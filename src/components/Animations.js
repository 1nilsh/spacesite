import './Animations.css';
import {useEffect, useState} from 'react';

function Animations() {
  const [scrollHintOpacity, setScrollHintOpacity] = useState(1);
  const [astronautCss, setAstronautCss] = useState({});
  const [spaceshipCss, setSpaceshipCss] = useState({});
  const [cometCss, setCometCss] = useState({});

  useEffect(() => {
    const onScroll = e => {
      setScrollHintOpacity((300 - window.scrollY) / 300);
      setAstronautCss({
        left: -153 + .4 * window.scrollY,
        transform: 'rotate(' + (0.1 * window.scrollY % 360) + 'deg)',
      });
      setSpaceshipCss({
        left: -331 + .6 * window.scrollY,
        transform: 'rotate(' + (0.05 * window.scrollY % 360) + 'deg)',
      });
      setCometCss({
        left: -2 * 220 + 5 * window.scrollY,
        top: -264 + 5 * window.scrollY,
      });
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
      <div className="Animations">
        <img src={require('../assets/img/astronaut.png').default} alt="" className="astronaut" style={astronautCss}/>
        <img src={require('../assets/img/spaceship.png').default} alt="" className="spaceship" style={spaceshipCss}/>
        <img src={require('../assets/img/comet.png').default} alt="" className="comet" style={cometCss}/>
        <label className="keep-scrolling" style={{opacity: scrollHintOpacity}}><h2>Keep scrolling...</h2></label>
      </div>
  );
}

export default Animations;
