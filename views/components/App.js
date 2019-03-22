import React from 'react';

import Header from './Header';
import Todos from './Todos';
class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Todos />
                </div>
            </div>
        );
    }
}

export default App;