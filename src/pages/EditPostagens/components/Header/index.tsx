import { NavigateFunction } from 'react-router';
import { Button } from '../../../../components/Button';
import * as S from './style';
import { BsViewStacked, BsFillEyeFill } from 'react-icons/bs';
import { AiOutlineFileAdd, AiFillCheckCircle, AiFillSave } from 'react-icons/ai';
import { MouseEventHandler, useState, useEffect } from 'react';
import { CheckAnimate } from '../../../../components/CheckAnimation';

interface IProps {
	isCheck?: boolean;
	isLoading?: boolean;
	onClickButtonView?: MouseEventHandler;
	navigate?: NavigateFunction;
	onClick?: MouseEventHandler;
}

export const Header = ({ navigate, onClick, isCheck, isLoading, onClickButtonView }: IProps) => {
	const [check, setCheck] = useState(false);
	const [saveIconColor, setSaveIconColor] = useState<string>("#fff")

	const navigateToView = () => {
		if (navigate) {
			navigate('/postagens');
		}
	};

	const handleTimeCheck = () => {
		setTimeout(() => {
			setCheck(false);
		}, 4000);
	};

	useEffect(() => {
		if (isCheck == false || isCheck) {
			setCheck(isCheck);
		}
		handleTimeCheck();
	}, [isCheck]);

	return (
		<S.styledDiv>
			<div>
				{!check ? (
					<Button
						Icon={() => <AiFillSave color={saveIconColor}/>}
						width="50px"
						justifyContent="center"
						backgroundColor="transparent"
						border="1px solid #ffffff"
						borderHover='1px solid #56ff97'
						backgroundHover="#56ff97"
						boxShadowHover='0px 0px 10px 1px #56ff97'
						onClick={navigateToView}
						onMouseDown={onClick}
						isLoading={isLoading}
					/>
				) : (
					<S.styledCheckAnimation>
						<CheckAnimate
							width="22px"
							height="22px"
						/>
					</S.styledCheckAnimation>
				)}
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
					onClick={onClickButtonView}
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
