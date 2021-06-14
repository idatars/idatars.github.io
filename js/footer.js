'use strict';

//const e = React.createElement;

function Footer(props) {
    return React.createElement(
        'footer',
        null,
        'Created by Isabel with React :)'
    ); //React.createElement('footer', null, 'Created by Isabel via React :)');
}

var domContainer = document.querySelector('#footer');
ReactDOM.render(React.createElement(Footer, null), domContainer);