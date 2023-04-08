import * as S from './style';
import { Links } from './Links';
import { useNavigate } from 'react-router';
import { Button } from '../Button';
import { useEffect, useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { ImExit } from 'react-icons/im';
import { BsList } from 'react-icons/bs';
import Cookies from 'js-cookie';

export const SideBar = () => {
	const [sizeButton, setSizeButton] = useState('60px');
	const [justifyContent, setJustifyContent] = useState('center');
	const [message, setMessage] = useState(false);
	const [arrow, setArrow] = useState('AiOutlineArrowRight');
	const [animationWidth, setAnimationWidth] = useState('');
	const [cellphone, setCellphone] = useState(false);
	const [activateCellphone, setActivateCellphone] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);
	const navigate = useNavigate();

	const VerifyPlataform = () => {
		if (width < 500) {
			setCellphone(true);
		} else {
			setCellphone(false);
		}
	};

	const handleSizeSideBar = () => {
		VerifyPlataform();
		sizeButton == '60px' ? setSizeButton('180px') : setSizeButton('60px');
		justifyContent == 'center'
			? setJustifyContent('flex-start')
			: setJustifyContent('center');
		message == false ? setMessage(true) : setMessage(false);
		arrow == 'AiOutlineArrowLeft'
			? setArrow('AiOutlineArrowRight')
			: setArrow('AiOutlineArrowLeft');
		animationWidth == 'animateWidth-in'
			? setAnimationWidth('animateWidth-out')
			: setAnimationWidth('animateWidth-in');
		activateCellphone
			? setActivateCellphone(false)
			: setActivateCellphone(true);
	};

	const Exit = () => {
		Cookies.remove('token');
		navigate('/');
	};

	const ButtonDices = Links(
		useNavigate(),
		justifyContent,
		sizeButton,
		message
	);

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
			VerifyPlataform();
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [width]);

	useEffect(() => {
		VerifyPlataform();
	}, []);

	return (
		<S.styledHeader animationWidth={animationWidth}>
			<div>
				{cellphone
					? ButtonDices.map((item) => (
							<S.styledDiv key={item.name}>
								{item.button}
							</S.styledDiv>
					  ))
					: ''}
				{!cellphone ? (
					<Button
						margin="20px 0px 0px 0px"
						width={sizeButton}
						backgroundColor="#1c1c1c"
						backgroundHover="#494949"
						border="1px solid #484848"
						onClick={handleSizeSideBar}
						justifyContent="center"
						Icon={() =>
							arrow == 'AiOutlineArrowLeft' ? (
								<AiOutlineArrowRight />
							) : (
								<AiOutlineArrowLeft />
							)
						}
					/>
				) : (
					<Button
						margin="20px 0px 0px 0px"
						width="60px"
						backgroundColor="#1c1c1c"
						backgroundHover="#494949"
						border="1px solid #484848"
						onClick={handleSizeSideBar}
						justifyContent="center"
						Icon={() => <BsList />}
					/>
				)}
				{!cellphone
					? ButtonDices.map((item) => (
							<S.styledDiv key={item.name}>
								{item.button}
							</S.styledDiv>
					  ))
					: ''}
			</div>
			<div>
				{!cellphone ? (
					<Button
						Icon={() => <ImExit />}
						width={sizeButton}
						backgroundColor="#1c1c1c"
						backgroundHover="#494949"
						border="none"
						margin="0px 0px 20px 0px"
						onClick={Exit}
						justifyContent="center"
					/>
				) : (
					''
				)}
			</div>
		</S.styledHeader>
	);
};
