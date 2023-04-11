import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { Container } from '../../components/Container';
import { MessageBalloon } from '../../hooks/Message';

export const Painel = () => {
	const { user, VerifyToken } = useContext(AuthContext);
	const message = MessageBalloon("Teste")

	useEffect(() => {
		VerifyToken();
	}, []);

	return (
		<>
			{user && (
				<Container>
					{message}
				</Container>
			)}
		</>
	);
};
