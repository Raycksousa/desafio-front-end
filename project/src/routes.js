import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Pagina1 from './pages/pagina1/index';
import Pagina2 from './pages/pagina2/index';
import Pagina3 from './pages/pagina3/index';
import Pagina4 from './pages/pagina4/index';


export default function MyRoutes() {
	return (
		<BrowserRouter>
		      <Routes>
			<Route path="/"   element={<Pagina1 />} />
			<Route path="/pagina2/" element={<Pagina2 />}/>
			<Route path="/pagina3/" element={<Pagina3 />}/>
			<Route path="/pagina4/" element={<Pagina4 />}/>
		      </Routes>
		</BrowserRouter>
	);

}

