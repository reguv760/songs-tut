import React from 'react';
import ReactDOM from 'react-dom';

//provider component from Redux:::
import { Provider } from 'react-redux';
//store component from redux
import { createStore } from 'redux';
//reducers:::
import reducers from './reducers';


import App from './components/App';

//encapsulate App in <Provider />
//to link react-redux + react

ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>, document.querySelector('#root'));