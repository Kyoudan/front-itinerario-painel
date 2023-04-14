import styled from '@emotion/styled';

export const styledDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	column-gap: 10px;
	padding: 20px 0px;
	background-color: #1c1c1c;
	justify-content: space-between;

	div {
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.right {
		justify-content: end;
		column-gap: 10px;
		padding-right: 20px;
	}
`;
