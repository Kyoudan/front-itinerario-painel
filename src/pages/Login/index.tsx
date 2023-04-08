import * as S from './style';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Message } from '../../components/Message';
import { Card } from '../../components/Card';
import Fundo from '../../assets/Painel.jpg';
import { ChangeEvent, useEffect, useState } from 'react';
import { api } from '../../api/api';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';

export const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');

	const navigation = useNavigate();

	const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
		if (event) {
			setEmail(event.target.value);
		}
	};

	const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
		if (event) {
			setPassword(event.target.value);
		}
	};

	const handleLogin = async () => {
		setLoading(true);
		try {
			const result = await api.post('/loginadmin', {
				email,
				password,
			});
			setLoading(false);
			Cookies.set('token', result.data, {
				sameSite: 'strict',
				expires: 1,
			});
			navigation('/painel');
		} catch (err: any) {
			setLoading(false);
			if (err.response) {
				setMessage(err.response.data.message);
			} else {
				setMessage('* Erro inesperado!!');
			}
			setTimeout(() => {
				setMessage('');
			}, 3000);
		}
	};

	const handleVerifyToken = async () => {
		const token = Cookies.get('token');
		if (token) {
			try {
				await api.post('/verifytokenadm', {
					token,
				});
				navigation('/painel');
			} catch {
				Cookies.remove('token');
			}
		}
	};

	useEffect(() => {
		handleVerifyToken();
	}, []);

	return (
		<S.styledDiv>
			<img src={Fundo} />
			<Card
				borderRadius="30px"
				backgroundColor="#fff"
				padding="50px 30px 50px 0px">
				<Message
					message="Painel"
					toUpper={false}
					fontSize="3em"
					margin="10px 0px"
				/>
				<Input
					label="Email"
					width="400px"
					height="55px"
					sizeHeight="55"
					borderRadius="10px"
					onText={handleEmail}
				/>

				<Input
					label="Password"
					width="400px"
					height="55px"
					sizeHeight="55"
					borderRadius="10px"
					onText={handlePassword}
					isHide={true}
				/>

				{message.length > 0 && (
					<Message
						message={message}
						fontSize="1.1em"
						color="red"
						margin="0px 0px"
						fontFamily="Montserrat, sans-serif"
					/>
				)}

				<Button
					message="Logar"
					margin="10px 0px 0px 20px"
					borderRadius="20px"
					isLoading={loading}
					onClick={handleLogin}
				/>
			</Card>
		</S.styledDiv>
	);
};
