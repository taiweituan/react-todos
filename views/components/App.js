import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Todos from './todos/TodoList';
import TodoCreate from './todos/TodoCreate';

import history from '../history';
class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={Todos}></Route>
                            <Route path="/todos/new" component={TodoCreate}></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;