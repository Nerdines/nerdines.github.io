import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return(
            <div>
                <h1 style={({textAlign: 'center'}, {fontFamily: 'Quicksand'})}>;
                    Nerdines
                </h1>
            </div>
        );
    }
}

ReactDOM(<Header />, document.getElementById('header'));