import * as S from './style';
import { Input } from '../../components/Input';

export const Login = () => {
	return (
		<S.styledDiv>
			<h1>LOGIN</h1>
			<Input
				label="Email"
				width="300px"
				height="40px"
				sizeHeight="40"
			/>
		</S.styledDiv>
	);
};
