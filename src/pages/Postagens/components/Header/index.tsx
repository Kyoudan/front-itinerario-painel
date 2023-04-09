import { NavigateFunction } from 'react-router';
import { Button } from '../../../../components/Button';
import * as S from './style';

interface IProps {
	navigate: NavigateFunction;
}

export const Header = ({ navigate }: IProps) => {
	const navigateToCreate = () => {
		navigate('/postagens/create');
	};

	const navigateToView = () => {
		navigate('/postagens');
	};

	return (
		<S.styledDiv>
			<Button
				message="Visualizar"
				width="200px"
				justifyContent="center"
				backgroundColor="transparent"
				border="none"
				backgroundHover="#494949"
				boxShadowHover="0px 0px 10px 3px #494949"
				onClick={navigateToView}
			/>
			<Button
				message="Criar"
				width="200px"
				justifyContent="center"
				backgroundColor="transparent"
				border="none"
				backgroundHover="#494949"
				boxShadowHover="0px 0px 10px 3px #494949"
				onClick={navigateToCreate}
			/>
		</S.styledDiv>
	);
};
