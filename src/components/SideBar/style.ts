import styled from '@emotion/styled';
import { styledHeaderType } from './types';

export const styledHeader = styled.header<styledHeaderType>`
	width: 80px;
	height: 100vh;
	background-color: #1c1c1c;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: 0.5 ease;
	justify-content: space-between;
	animation: ${({ animationWidth }) =>
		animationWidth == 'animateWidth-in'
			? 'animateWidth-in 0.5s ease forwards'
			: 'animateWidth-out 0.5s ease forwards'};

	div {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		row-gap: 10px;
	}

	@media (max-width: 500px) {
		width: 100vw;
    height: 1000px;
		justify-content: flex-end;
		align-items: flex-start;
		padding: 10px;

		animation: ${({ animationWidth }) =>
			animationWidth == 'animateWidth-in'
				? 'animateHeight-in 0.5s ease forwards'
				: 'animateHeight-out 0.5s ease forwards'};

		div {
			align-items: flex-start;
			flex-direction: column;
			row-gap: 0px;
		}
	}

	@keyframes animateWidth-in {
		0% {
			transition: 0.5 ease;
			width: 80px;
		}
		100% {
			transition: 0.5 ease;
			width: 200px;
		}
	}

	@keyframes animateWidth-out {
		0% {
			transition: 0.5 ease;
			width: 200px;
		}
		100% {
			transition: 0.5 ease;
			width: 80px;
		}
	}

	@keyframes animateHeight-in {
		0% {
			transition: 0.5 ease;
			height: 50px;
		}
		100% {
			transition: 0.5 ease;
			height: 250px;
		}
	}

	@keyframes animateHeight-out {
		0% {
			transition: 0.5 ease;
			height: 250px;
		}
		100% {
			transition: 0.5 ease;
			height: 50px;
		}
	}
`;

export const styledDiv = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	transition: 0.5 ease;

	@media (max-width: 500px) {
		width: 50%;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: column;
	}
`;
