// main.js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import { App } from './app';
const render = (Component) => {
    ReactDOM.render(React.createElement(AppContainer, null,
        React.createElement(Component, null)), document.getElementById('root'));
};
render(App);
// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./app', () => render(App));
}
//# sourceMappingURL=hot.js.map