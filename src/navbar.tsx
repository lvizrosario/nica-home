import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'

const links = [
  {label:'Loja',href:'#novidades'},
  {label:'Novidades',href:'#novidades'},
  {label:'Skin 01',href:'#skin'},
  {label:'Sobre',href:'#sobre'},
]

function Navbar() {
  React.useEffect(()=>{
    const header=document.querySelector<HTMLElement>('.header')!
    let previousY=Math.max(0,window.scrollY)
    let accumulated=0
    let frame=0
    const reveal=()=>{header.classList.remove('header-hidden');accumulated=0}
    const update=()=>{
      frame=0
      // Clamp elastic overscroll on touch devices before detecting direction.
      const y=Math.max(0,Math.min(window.scrollY,document.documentElement.scrollHeight-window.innerHeight))
      const delta=y-previousY
      previousY=y
      header.classList.toggle('header-scrolled',y>64)
      const keyboardFocus=header.contains(document.activeElement)&&document.activeElement?.matches(':focus-visible')
      if(y<160||keyboardFocus||document.querySelector('dialog[open]')){reveal();return}
      if(!delta)return
      accumulated=Math.sign(delta)===Math.sign(accumulated)?accumulated+delta:delta
      // Ignore tiny direction changes, so the menu never flickers while scrolling.
      if(accumulated>20){header.classList.add('header-hidden');accumulated=0}
      else if(accumulated < -12){reveal()}
    }
    const onScroll=()=>{if(!frame)frame=requestAnimationFrame(update)}
    const onFocus=()=>reveal()
    const onResize=()=>{previousY=Math.max(0,window.scrollY);reveal()}
    update()
    window.addEventListener('scroll',onScroll,{passive:true})
    window.addEventListener('resize',onResize)
    header.addEventListener('focusin',onFocus)
    return()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onResize);header.removeEventListener('focusin',onFocus);header.classList.remove('header-hidden','header-scrolled')}
  },[])

  return <NavigationMenu className="nica-navigation" aria-label="Navegação principal">
    <NavigationMenuList className="nica-navigation-list">
      {links.map(link=><NavigationMenuItem key={link.label}><NavigationMenuLink className="nica-navigation-link" href={link.href}>{link.label}</NavigationMenuLink></NavigationMenuItem>)}
    </NavigationMenuList>
  </NavigationMenu>
}

const mount=document.getElementById('navbar-root')
if(mount)createRoot(mount).render(<Navbar/>);
