import styled from '@emotion/styled';
import { IStyledDiv } from './types';

export const styledDiv = styled.div<IStyledDiv>`
	width: 100vw;
	display: flex;
	flex-direction: ${({ cellphone }) => (cellphone ? 'column' : 'row')};
`;
