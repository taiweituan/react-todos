import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Todos from './Todos';

import history from "../history";
class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Header />
                        <div className="container">
                            <Todos />
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;