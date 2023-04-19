import styled from '@emotion/styled';
import { IStyledDivRenderContent, IStyledTextArea } from './types';

export const styledDiv = styled.div`
	width: 100%;
`;

export const styledDivContent = styled.div`
	width: 100%;
	display: flex;
	padding-top: 20px;
	flex-direction: column;
	row-gap: 15px;
	align-items: center;
	overflow: hidden;
`;

export const styledDivOverflow = styled.div`
	width: 1200px;
	height: 80vh;
	padding-top: 10px;
	padding-bottom: 10px;
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
	row-gap: 15px;
	align-items: center;
	border-radius: 10px;
	box-shadow: 0px 0px 10px 0.3px rgba(73, 73, 73, 0.5);
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar:hover {
		width: 13px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background: #1c1c1c;
		border-radius: 5px;
		transition: 0.5s ease;
	}

	&::-webkit-scrollbar-thumb:hover {
		transition: 0.5s ease;
		background: #555;
	}

	@media (max-width: 1300px) {
		width: 1000px;
	}

	@media (max-width: 1100px) {
		width: 800px;
	}

	@media (max-width: 900px) {
		width: 600px;
	}

	@media (max-width: 700px) {
		width: 500px;
	}

	@media (max-width: 600px) {
		width: 350px;
	}

	@media (max-height: 650px) {
		height: 70vh;
	}
	@media (max-height: 450px) {
		height: 60vh;
	}
`;

export const styledCardTitle = styled.textarea`
	width: 90%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 0px 10px 0.3px rgba(73, 73, 73, 0.5);
	cursor: pointer;
	border-radius: 5px;
	transition: 0.5s ease;
	text-align: center;

	h1 {
		font-size: 1.5em;
		font-family: 'Montserrat', sans-serif;
	}

	p {
		font-size: 1.1em;
		font-family: 'Montserrat', sans-serif;
	}

	&:hover {
		transition: 0.5s ease;
		box-shadow: 0px 0px 10px 0.3px rgba(73, 73, 73, 1);
	}

	@media (max-width: 1200px) {
		width: 70%;
	}

	@media (max-width: 750px) {
		width: 90%;
	}

	@media (max-width: 550px) {
		h1 {
			font-size: 1.3em;
		}
	}
`;

export const styledTextArea = styled.textarea<IStyledTextArea>`
	position: relative;
	width: 100%;
	height: ${({ height }) => (height ? height : '')};
	height: auto;
	resize: vertical;
	font-size: 1.5em;
	padding: 0px 10px;
	border-radius: 5px;
	border: 1px solid #ff0101;
	padding-top: 20px;
	outline: none;

	${({ type }) =>
		type
			? `
		${type == 'label' ? 'font-size: 1.3em;' : ''}
		${type == 'textBold' ? 'font-weight: 800;' : ''}
	`
			: ''}

	@media (max-width: 600px) {
		width: 95%;
	}
`;

export const styledDivRenderContent = styled.div<IStyledDivRenderContent>`
	width: 90%;
	position: relative;
	::after {
		content: '${({ label }) => (label ? label : '')}';
		width: 50px;
		height: 50px;
		position: absolute;
		top: 6px;
		left: 10px;
		font-size: 0.9em;
		text-transform: capitalize;
		font-family: 'Montserrat', sans-serif;
		color: rgba(255, 1, 1, 0.8);
	}
`;
