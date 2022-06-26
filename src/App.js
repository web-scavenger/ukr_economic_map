import {Map} from './components'
import {MapProvider} from './context/mapContext'

function App() {
  return (
    <div className="App">
      <MapProvider>
        <Map />
      </MapProvider>
    </div>
  );
}

export default App;
