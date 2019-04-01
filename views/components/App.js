import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Todos from './todos/TodoList';
import TodoCreate from './todos/TodoCreate';
import TodoDelete from './todos/TodoDelete';
import TodoEdit from './todos/TodoEdit';

import history from '../history';
import {Container} from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Header />
                        <Container>
                            <Switch>
                                <Route path="/" exact component={Todos}></Route>
                                <Route path="/todos/new" component={TodoCreate}></Route>
                                <Route path="/todos/delete/:id" component={TodoDelete}></Route>
                                <Route path="/todos/edit/:id" component={TodoEdit}></Route>
                            </Switch>
                        </Container>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;