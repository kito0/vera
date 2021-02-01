import React from 'react';
import './css/App.css';
import Header from './components/Header';

import { ThemeProvider } from '@material-ui/core/styles';

function App() {
	return (
		<div className="App">
			<Header />
		</div>
	);
}

export default App;
