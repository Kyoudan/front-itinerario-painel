import { ReactNode, useEffect, useState, useContext } from 'react';
import { SideBar } from '../SideBar';
import * as S from './style';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

interface IProps {
	children: ReactNode;
}

export const Container = ({ children }: IProps) => {
	const [cellphone, setCellphone] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);
	const { setCellphoneContext } = useContext(AuthContext);

	const VerifyPlataform = () => {
		if (width < 600) {
			setCellphone(true);
			setCellphoneContext?.(true);
		} else {
			setCellphone(false);
			setCellphoneContext?.(false);
		}
	};

	useEffect(() => {
		VerifyPlataform();
	}, []);

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
			VerifyPlataform();
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [width]);

	return (
		<S.styledDiv cellphone={cellphone}>
			<SideBar cellphone={cellphone} />
			{children}
		</S.styledDiv>
	);
};
