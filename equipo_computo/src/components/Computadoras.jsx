import { Computadora } from './Computadora';
import { data } from '../Services/data';

function Computadoras() {

    return (
        <div className="App">
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

export default Computadoras;
