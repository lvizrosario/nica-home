import * as React from 'react'
import './navbar'
import { createRoot } from 'react-dom/client'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from '@/components/ui/carousel'
import releases from './releases.json'

type Product = { id:string; name:string; color:string; price:number; x:number; y:number; w:number; h:number; swatch:string }
type Release = {id:string;productId:string;label?:string;src?:string;alt?:string;crop?:{x:number;y:number;w:number;h:number}}
declare global { interface Window { nicaProducts: Product[] } }
const money = (n:number) => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(n)

function Novidades() {
  const [api,setApi] = React.useState<CarouselApi>()
  const [current,setCurrent] = React.useState(0)
  const [snaps,setSnaps] = React.useState<number[]>([])
  const [visible,setVisible] = React.useState<number[]>([0,1,2,3])
  const [favorites,setFavorites] = React.useState<string[]>([])
  const [playing,setPlaying] = React.useState(true)
  const [hovered,setHovered] = React.useState(false)
  const [inView,setInView] = React.useState(false)
  const [hidden,setHidden] = React.useState(document.hidden)
  const [reduced,setReduced] = React.useState(matchMedia('(prefers-reduced-motion: reduce)').matches)
  const root = React.useRef<HTMLDivElement>(null)
  const autoplay = React.useRef(Autoplay({delay:5000,playOnInit:false,stopOnInteraction:true,stopOnMouseEnter:false,stopOnFocusIn:false}))
  const plugins = React.useMemo(()=>[autoplay.current],[])
  const options = React.useMemo(()=>({align:'start' as const,loop:true,inViewThreshold:0.5,slidesToScroll:'auto' as const,duration:reduced?0:30}),[reduced])
  const running = playing && !hovered && inView && !hidden && !reduced

  React.useEffect(()=>{
    const media=matchMedia('(prefers-reduced-motion: reduce)')
    const motion=()=>setReduced(media.matches)
    const visibility=()=>setHidden(document.hidden)
    const favorite=(event:Event)=>setFavorites((event as CustomEvent<string[]>).detail)
    const observer=new IntersectionObserver(([entry])=>setInView(entry.isIntersecting),{threshold:.2})
    if(root.current)observer.observe(root.current)
    media.addEventListener('change',motion)
    document.addEventListener('visibilitychange',visibility)
    document.addEventListener('nica:favorite',favorite)
    return()=>{observer.disconnect();media.removeEventListener('change',motion);document.removeEventListener('visibilitychange',visibility);document.removeEventListener('nica:favorite',favorite)}
  },[])
  React.useEffect(()=>{
    if(!api)return
    const sync=()=>{setCurrent(api.selectedScrollSnap());setSnaps(api.scrollSnapList());setVisible(api.slidesInView())}
    const stop=()=>setPlaying(false)
    sync();api.on('select',sync).on('reInit',sync).on('slidesInView',sync).on('pointerDown',stop)
    return()=>{api.off('select',sync).off('reInit',sync).off('slidesInView',sync).off('pointerDown',stop)}
  },[api])
  React.useEffect(()=>{if(!api)return;if(running)autoplay.current.play();else autoplay.current.stop()},[api,running])
  const manual=()=>setPlaying(false)

  return <Carousel ref={root} setApi={setApi} opts={options} plugins={plugins} className="nica-carousel" aria-label="Novidades da coleção Skin 01"
    onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
    onKeyDown={()=>setPlaying(false)}
    onFocusCapture={manual}>
    <CarouselContent className="carousel-track" aria-live={running?'off':'polite'}>
      {(releases as Release[]).map((release,index)=>{
        const p=window.nicaProducts.find(product=>product.id===release.productId)!
        const rect=release.crop??p
        const focused=visible.includes(index)
        return <CarouselItem key={release.id} className="release-slide" aria-label={`${index+1} de ${releases.length}`}>
          <article className="product-card" inert={!focused}>
            <button className="product-image-button" data-product={p.id} aria-label={`Ver ${p.name}${release.label?' — detalhe':''}`}>
              {release.src?<img className="release-photo" src={release.src} alt={release.alt??p.name} width="450" height="340" loading="lazy" draggable={false}/>:<div className="crop" style={{'--x':rect.x,'--y':rect.y,'--w':rect.w,'--h':rect.h} as React.CSSProperties}><img src="assets/nica-reference.png" alt={`${p.name} — ${release.label??p.color}`} width="1024" height="1536" loading="lazy" draggable={false}/></div>}
            </button>
            <button className="favorite" data-favorite={p.id} aria-pressed={favorites.includes(p.id)} aria-label={`${favorites.includes(p.id)?'Remover dos favoritos':'Favoritar'} ${p.name}`}><svg><use href="#i-heart"/></svg></button>
            <div className="product-meta"><h3><button className="product-name" data-product={p.id}>{p.name}</button></h3><p><span className="color-dot" style={{'--swatch':p.swatch} as React.CSSProperties}/>{p.color}{release.label&&<span className="release-label"> · {release.label}</span>}</p><p className="price">{money(p.price)}</p></div>
          </article>
        </CarouselItem>
      })}
    </CarouselContent>
    <CarouselPrevious className="carousel-arrow carousel-prev translate-x-0 translate-y-0" onClick={()=>{manual();api?.scrollPrev(reduced)}}/>
    <CarouselNext className="carousel-arrow carousel-next translate-x-0 translate-y-0" onClick={()=>{manual();api?.scrollNext(reduced)}}/>
    <div className="carousel-controls">
      <div className="carousel-pagination" aria-label="Páginas do carrossel">{snaps.map((_,i)=><button key={i} aria-label={`Ir para página ${i+1}`} aria-current={current===i?'true':undefined} onClick={()=>{manual();api?.scrollTo(i,reduced)}}/>)}</div>

    </div>
  </Carousel>
}
createRoot(document.getElementById('products-grid')!).render(<Novidades/>);


