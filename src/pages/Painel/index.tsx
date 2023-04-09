import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { SideBar } from '../../components/SideBar';
import { Container } from '../../components/Container';

export const Painel = () => {
	const { user, VerifyToken } = useContext(AuthContext);

	useEffect(() => {
		VerifyToken();
	}, []);

	return (
		<>
			{user && (
				<Container>
					<h1>Testeee</h1>
				</Container>
			)}
		</>
	);
};
