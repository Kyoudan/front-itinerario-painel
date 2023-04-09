import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Error } from '../pages/Error';
import { Painel } from '../pages/Painel';
import { PrivateRoute } from '../components/PrivateRoute';
import { Postagens } from '../pages/Postagens';

export const RoutesProject = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					element={<Login />}
					path="/"
				/>

				<Route
					element={
						<PrivateRoute>
							<Painel />
						</PrivateRoute>
					}
					path="/painel"
				/>

				<Route
					element={
						<PrivateRoute>
							<Postagens />
						</PrivateRoute>
					}
					path="/postagens"
				/>

				<Route
					element={<Error />}
					path="*"
				/>
			</Routes>
		</BrowserRouter>
	);
};
