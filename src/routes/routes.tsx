import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Error } from '../pages/Error';
import { Painel } from '../pages/Painel';

export const RoutesProject = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					element={<Login />}
					path="/"
				/>

				<Route
					element={<Painel />}
					path="/painel"
				/>
        
				<Route
					element={<Error />}
					path="*"
				/>
			</Routes>
		</BrowserRouter>
	);
};
