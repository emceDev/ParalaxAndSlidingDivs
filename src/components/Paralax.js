import background from '../imgs/background.jpg'
import l from '../imgs/leaf.png'
import l1 from '../imgs/leaf1.png'
import l2 from '../imgs/leaf2.png'
import l3 from '../imgs/leaf3.png'
import l4 from '../imgs/leaf4.png'
import l5 from '../imgs/leaf5.png'
import l6 from '../imgs/leaf6.png'

import s from '../styles/paralax.module.css'
import { useEffect, useState } from 'react';
import ParalaxItem from './ParalaxItem';
function Paralax() {
    const [pos, setPos] = useState('juerwa');
    function logit() {
        setPos(Math.round(window.scrollY * 0.3));
      }
    const leafs = [
    {url:l,left:12,top:-100, speed:0.5},
    {url:l2,left:82,top:100, speed:1.1},
    {url:l1,left:12,top:300, speed:1.2},
    {url:l3,left:82,top:-400, speed:1.5},
    {url:l4,left:62,top:-150, speed:1.9},
    {url:l5,left:72,top:-200, speed:1.6},
    {url:l6,left:32,top:-2, speed:2}
    ]
    const vh=window.screen.availHeight
    useEffect(() => {
        function watchScroll() {
          window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
          window.removeEventListener("scroll", logit);
        };
      });

    return ( <div className="s.Paralax" >
    <img src={background} className={s.pBackground} style={{zIndex:'-1001'}}/>
    {leafs.map((x)=>{
        return <ParalaxItem img={x.url} pos={(vh/2)+x.top+(pos*x.speed)} left={x.left}  speed={x.speed} width="10vw"/>
    })}
      {leafs.map((x)=>{
        return <ParalaxItem img={x.url} pos={((vh/3)+x.top+(pos*x.speed))*0.5} left={x.left/1.2}  speed={x.speed} width='5vw'/>
    })}
    </div> );
}

export default Paralax;