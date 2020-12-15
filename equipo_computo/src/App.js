import { Computadora } from './components/Computadora';
import { data } from "./data"
import { Presentacion } from './components/Presentacion';

function App() {

  return (
    <div className="App">
      <Presentacion />
      <div className="Componentes">
        {
          data.map(a => {
            return <Computadora key={a.id} data={a} />
          })
        }
      </div>
    </div>
  );
}

let delay = 0;
function delayf() {
  delay++;
  console.log(delay)
  return delay;
}

export default App;
