import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore } from './app/store/createStore'
import { BrowserRouter } from 'react-router-dom'

const store = createStore();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App/>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();