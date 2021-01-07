import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import App from './App';
import { NavBar } from './components/NavBar';
import { NormasUso } from './components/NormasUso';
import { PcPagina } from './components/PcPagina';
import { data } from "./Services/data"
import Computadoras from './components/Computadoras';
import { Plano } from './components/Plano';

export const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={App} />
                {
                    data.map(a => {
                        return <Route key={a.name} exact path={"/" + a.name} component={PcPagina} />
                    })
                }
                <Route exact path="/NormasUso" component={NormasUso} />
                <Route exact path={"/Computadoras"} component={Computadoras} />
                <Route exact path={"/Plano"} component={Plano} />
            </Switch>
        </Router>
    )
}
