import * as S from './style';
import { IProps } from './types';
import { useState, useEffect, ChangeEvent } from 'react';
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';

export const Input = ({
	width,
	height,
	label,
	sizeHeight,
	isHide,
	borderRadius,
	mediaCustom,
	onText,
}: IProps) => {
	const [stateLabel, setStateLabel] = useState(false);
	const [text, setText] = useState('');
	const [hide, setHide] = useState('text');
	let size = 0;

	const handleClick = () => {
		setStateLabel(true);
	};

	const handleBlur = () => {
		if (text.length == 0) {
			setStateLabel(false);
		}
	};

	const handleSizeHeight = () => {
		if (sizeHeight) {
			size = parseFloat(sizeHeight) / 2 - 20;
		}
	};

	const handleHide = () => {
		if (isHide) {
			setHide('password');
		}
	};

	const handleIcon = () => {
		hide == 'password' ? setHide('text') : setHide('password');
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (onText && event) {
			setText(event.target.value);
			onText(event);
		}
	};

	useEffect(() => {
		handleHide();
	}, []);

	useEffect(() => {
		if (text && text.length > 0) {
			setStateLabel(true);
		}
	}, [text]);

	handleSizeHeight();

	return (
		<S.styledDiv
			width={width}
			height={height}
			label={label}
			stateLabel={stateLabel}
			sizeHeight={size}
			mediaCustom={mediaCustom}>
			{hide == 'password' && (
				<BsFillEyeSlashFill
					className="Icon"
					onClick={handleIcon}
				/>
			)}
			{hide == 'text' && isHide && (
				<BsFillEyeFill
					className="Icon"
					onClick={handleIcon}
				/>
			)}
			<S.styledInput
				onClick={handleClick}
				onBlur={handleBlur}
				onChange={(event) => handleChange(event)}
				borderRadius={borderRadius}
				type={hide}
				mediaCustom={mediaCustom}></S.styledInput>
		</S.styledDiv>
	);
};
