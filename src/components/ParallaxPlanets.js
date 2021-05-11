import './ParallaxPlanets.css';
import {useEffect, useState} from 'react';

function ParallaxPlanets() {

  const [planetPos, setPlanetPos] = useState({});
  const [planetWrapperTop, setPlanetWrapperTop] = useState(0);

  const parallaxFactor = .33;

  useEffect(() => {
    setPlanetPos({
      0: {
        top: 300,
        left: .7 * window.innerWidth,
      },
      1: {
        top: .4 * parallaxFactor * document.body.scrollHeight,
        left: .1 * window.innerWidth,
      },
      2: {
        top: .6 * parallaxFactor * document.body.scrollHeight,
        left: .6 * window.innerWidth,
      },
      3: {
        top: .88 * parallaxFactor * document.body.scrollHeight,
        left: .5 * window.innerWidth,
      },
      4: {
        top: 1.2 * parallaxFactor * document.body.scrollHeight,
        left: .8 * window.innerWidth,
      },
    });

    const onScroll = e => {
      setPlanetWrapperTop(-.33 * window.scrollY);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
      <div className="ParallaxPlanets" style={{top: planetWrapperTop}}>
        <img src={require('../assets/img/planet0.png').default}
             style={planetPos['0']} alt=""/>
        <img src={require('../assets/img/planet1.png').default}
             style={planetPos['1']} alt=""/>
        <img src={require('../assets/img/planet2.png').default}
             style={planetPos['2']} alt=""/>
        <img src={require('../assets/img/planet3.png').default}
             style={planetPos['3']} alt=""/>
        <img src={require('../assets/img/planet1.png').default}
             style={planetPos['4']} alt=""/>
      </div>
  );
}

export default ParallaxPlanets;
