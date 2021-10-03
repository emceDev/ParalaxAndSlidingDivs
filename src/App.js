import {useEffect} from 'react'
import './styles/style1.css'
import styles from './styles/paralax.module.css'
import Div1 from './components/div1';
import Div2 from './components/div2';
import Div3 from './components/div3';
import Div4 from './components/div4';
import Div5 from './components/div5';
import Div6 from './components/div6';
import Paralax from './components/Paralax';

function App() {

let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // entry.target.style.opacity = entry.intersectionRatio;
    if (entry.intersectionRatio > 0) {
      console.log(entry.intersectionRatio)
      
      console.log('in the view:'+'  '+entry.target.className);
      document.getElementsByClassName(entry.target.className)[0].style.transform="translateX(0%)"
      // console.log(x)
    } else {
      console.log('out of view:  '+entry.target.className);
      // observer.unobserve(entry.target)
      // console.log(entry.target.className)
    }
  });
});
useEffect(() => {
  let divs =document.querySelectorAll('.App')[0].children
  let len = divs.length
  for (let i = 0; i < len; i++) {
    observer.observe(divs[i])
    // console.log(divs[i]) 
  }
}, []);

  return (
    <div className="App">
      <Paralax/>
      {/* <div style={{height:'300vh',width:'50vw',background:'green'}}></div> */}
      <Div1/>
      <Div2/>
      <Div3/>
      <Div4/> 
      <Div5/>
      <Div6/>
    </div>
  );
}

export default App;
