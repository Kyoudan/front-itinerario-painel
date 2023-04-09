import { ReactNode, useEffect, useState } from 'react';
import { SideBar } from '../SideBar';
import * as S from './style';

interface IProps {
	children: ReactNode;
}

export const Container = ({ children }: IProps) => {
	const [cellphone, setCellphone] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);

	const VerifyPlataform = () => {
		if (width < 500) {
			setCellphone(true);
		} else {
			setCellphone(false);
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
