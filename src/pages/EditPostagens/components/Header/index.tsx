import { NavigateFunction } from 'react-router';
import { Button } from '../../../../components/Button';
import * as S from './style';
import { BsViewStacked, BsFillEyeFill } from 'react-icons/bs';
import { AiOutlineFileAdd } from 'react-icons/ai';

interface IProps {
	navigate: NavigateFunction;
}

export const Header = ({ navigate }: IProps) => {
	const navigateToView = () => {
		navigate('/postagens');
	};

	return (
		<S.styledDiv>
			<div>
				<Button
					Icon={() => <BsViewStacked />}
					width="50px"
					justifyContent="center"
					backgroundColor="transparent"
					border="none"
					backgroundHover="#494949"
					boxShadowHover="0px 0px 10px 3px #494949"
					onClick={navigateToView}
				/>
			</div>

			<div className="right">
				<Button
					Icon={() => <BsFillEyeFill />}
					width="50px"
					justifyContent="center"
					backgroundColor="transparent"
					border="1px solid #494949"
					backgroundHover="#494949"
					boxShadowHover="0px 0px 10px 3px #494949"
					onClick={navigateToView}
				/>
				<Button
					Icon={() => <AiOutlineFileAdd />}
					width="50px"
					justifyContent="center"
					backgroundColor="transparent"
					border="1px solid #494949"
					backgroundHover="#494949"
					boxShadowHover="0px 0px 10px 3px #494949"
					onClick={navigateToView}
				/>
			</div>
		</S.styledDiv>
	);
};
