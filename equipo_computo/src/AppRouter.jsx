import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import App from './App';
import { NavBar } from './components/NavBar';
import { PcPagina } from './components/PcPagina';
import { data } from "./data"

export const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/AuditoriaInformatica/" component={App} />
                {
                    data.map(a => {
                        return <Route exact path={"/AuditoriaInformatica/" + a.name} component={PcPagina} />
                    })
                }
            </Switch>
        </Router>
    )
}
