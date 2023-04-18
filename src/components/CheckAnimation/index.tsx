import * as S from './style';

interface IProps{
    width?: string,
    height?: string
}

export const CheckAnimate = ({width, height}: IProps) => {
	return (
		<S.styledSVG
			width={`${width ? width : '50px'}`}
			height={`${height ? height : '40px'}`}
			viewBox="0 0 133 133"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink">
			<g
				id="check-group"
				stroke="none"
				strokeWidth="1"
				fill="none"
				fillRule="evenodd">
				<circle
					id="filled-circle"
					fill="#fff"
					cx="66.5"
					cy="66.5"
					r="54.5"
				/>
				<circle
					id="white-circle"
					fill="#494949"
					cx="66.5"
					cy="66.5"
					r="55.5"
				/>
				<circle
					id="outline"
					stroke="#fff"
					strokeWidth="4"
					cx="66.5"
					cy="66.5"
					r="54.5"
				/>
				<polyline
					id="check"
					stroke="#000"
					strokeWidth="5.5"
					points="41 70 56 85 92 49"
				/>
			</g>
		</S.styledSVG>
	);
};
