import './App.css';
import ParallaxPlanets from './components/ParallaxPlanets';
import Swirl from './components/Swirl';
import ParallaxStars from './components/ParallaxStars';
import Animations from './components/Animations';

function App() {

  return (
      <div className="App">
        <div className="content">
          <div className="contentBox" id="cb-1" data-navname="About me"
               data-cbid="1">
            <h1>What I do:</h1>

          </div>

          <div className="contentBox" id="cb-2" data-navname="Links"
               data-cbid="2">
            <h1>You might want to check this out...</h1>

            <a href="https://xing.de">xing - nils hodys</a>

          </div>

          <div className="contentBox" id="cb-3" data-navname="Shenanigans"
               data-cbid="3">
            <h1>For Fun And Profit</h1>
            <ul>
              <li>Icke bin die perfekte Bereicherung für Ihren Laden</li>
              <li>Ich bin blond und schön</li>
              <li>Ich mag Züge</li>
            </ul>
          </div>

          <div className="contentBox" id="cb-4" data-navname="Contact"
               data-cbid="4">
            <h1>Nach hause telefonieren:</h1>
          </div>

          <div className="contentBox" id="cb-5" data-navname="Contact"
               data-cbid="5">
            <h1>Contact Info</h1>
            <span>
			Nils Hodys<br/>
			Agnes-Miegel-Str. 2<br/>
			21391 Reppenstedt<br/>
			<br/>
			elektronische-post@nils.bz
		</span>

            <br/>
            <br/>

            <p>Vector Design by
              <a href="https://www.vecteezy.com">Vecteezy</a>
            </p>
          </div>
        </div>
        <div className="effects">
          <Swirl/>
          <ParallaxPlanets/>
          <ParallaxStars/>
          <Animations/>
        </div>

      </div>
  );
}

export default App;
