import './ParallaxStars.css';
import {useEffect, useRef, useState} from 'react';

function ParallaxStars() {
  const [stars, setStars] = useState([]);
  const [starsTop, setStarsTop] = useState({0: 0, 1: 0, 2: 0, 3: 0});

  const canvasRef = useRef(null);

  const generateStars = () => {
    const starDensity = 0.00003;
    const numberOfLayers = 4;

    const width = window.innerWidth;
    const height = document.body.scrollHeight;

    const stars = [];
    const starsPerLayer = (width * height * starDensity) / numberOfLayers;

    for (let layer = 0; layer < numberOfLayers; layer++) {
      for (let starCount = 0; starCount < starsPerLayer; starCount++) {
        let randomX = Math.floor(Math.random() * (width + 1));
        let randomY = Math.floor(Math.random() * (height + 1));

        stars.push({x: randomX + 3, y: randomY + 3, layer});
      }
    }

    return stars;
  };

  useEffect(() => {
    const stars = generateStars();
    setStars(stars);

    const parallaxFactor = {
      0: .8,
      1: .6,
      2: .4,
      3: .2,
    };

    const onScroll = e => {
      setStarsTop({
        0: -parallaxFactor['0'] * window.scrollY,
        1: -parallaxFactor['1'] * window.scrollY,
        2: -parallaxFactor['2'] * window.scrollY,
        3: -parallaxFactor['3'] * window.scrollY,
      });
    };

    const mouseMagic = (e) => {
      const mouseX = e.x;
      const mouseY = e.y;
      const scrollY = window.scrollY;

      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      const canvasContext = canvasRef.current.getContext('2d');

      canvasContext.clearRect(0, 0, window.innerWidth, window.innerHeight);

      stars.forEach((star) => {
        let dist = Math.sqrt(
            Math.pow((star.x - mouseX), 2) +
            Math.pow((star.y - (mouseY + (scrollY * parallaxFactor[star.layer]))), 2),
        );

        if (dist < 500) {
          canvasContext.beginPath();
          canvasContext.moveTo(star.x + 3, star.y + 3 - scrollY * parallaxFactor[star.layer]);
          canvasContext.lineTo(mouseX, mouseY);
          canvasContext.closePath();
          canvasContext.strokeStyle = 'rgba(255,255,255,' + (0.5 - dist / 500) + ')';
          canvasContext.stroke();
        }
      });

    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('mousemove', mouseMagic);
    window.addEventListener('mousewheel', mouseMagic);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', mouseMagic);
      window.removeEventListener('mousewheel', mouseMagic);
    };
  }, []);

  return (
      <div className="ParallaxStars">
        <div className="layer0" style={{top: starsTop['0']}}>
          {
            stars.map((star, index) => {
              if (star.layer === 0) {
                return (
                    <img key={index} src={require('../assets/img/star0.png').default}
                         alt="" style={{top: star.y, left: star.x}}/>);
              } else return null;
            })
          }
        </div>

        <div className="layer1" style={{top: starsTop['1']}}>
          {
            stars.map((star, index) => {
              if (star.layer === 1) {
                return (
                    <img key={index} src={require('../assets/img/star1.png').default}
                         alt="" style={{top: star.y, left: star.x}}/>);
              } else return null;
            })
          }
        </div>
        <div className="layer2" style={{top: starsTop['2']}}>
          {
            stars.map((star, index) => {
              if (star.layer === 2) {
                return (
                    <img key={index} src={require('../assets/img/star2.png').default}
                         alt="" style={{top: star.y, left: star.x}}/>);
              } else return null;
            })
          }
        </div>
        <div className="layer3" style={{top: starsTop['3']}}>
          {
            stars.map((star, index) => {
              if (star.layer === 3) {
                return (
                    <img key={index} src={require('../assets/img/star3.png').default}
                         alt="" style={{top: star.y, left: star.x}}/>);
              } else return null;
            })
          }
        </div>

        <div className="canvasLayer">
          <canvas ref={canvasRef}/>
        </div>
      </div>
  );
}

export default ParallaxStars;
