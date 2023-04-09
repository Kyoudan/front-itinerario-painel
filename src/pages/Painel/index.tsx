import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
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
				</Container>
			)}
		</>
	);
};
