import { Computadora } from './components/Computadora';
import { data } from "./Services/data"
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

export default App;
