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
	margin,
	border,
	color,
	colorLabel,
	value,
	labelActive,
	type,
	padding,
	textAlign,
	fontSize,
	max,
	customCode,
	onText,
}: IProps) => {
	const [stateLabel, setStateLabel] = useState(false);
	const [text, setText] = useState<string | number>(
		type && typeof type === 'number' ? 0 : ''
	);
	const [hide, setHide] = useState('text');
	let size = 0;

	const verifyValue = () => {
		if (value && text == '') {
			setText(value);
		}
	};

	const handleClick = () => {
		setStateLabel(true);
	};

	const handleBlur = () => {
		if (typeof text === 'string' && text.length == 0) {
			setStateLabel(false);
		}
	};

	const handleSizeHeight = () => {
		if (sizeHeight) {
			size = parseFloat(sizeHeight) / 2 - 20;
		}
	};

	const handleHide = () => {
		if (type) {
			setHide(type);
		} else if (isHide) {
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
		if (labelActive) {
			setStateLabel(true);
		}
		handleHide();
		verifyValue();
	}, []);

	useEffect(() => {
		if (text && typeof text === 'string' && text.length > 0) {
			setStateLabel(true);
		}

		if (max && text && typeof text === 'number') {
			if (text >= max) {
				setText(max);
				console.log('Aqui');
			}
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
			mediaCustom={mediaCustom}
			margin={margin}
			colorLabel={colorLabel}
			customCode={customCode}>
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

			{type == 'color' ? (
				<S.styledInput
					onClick={handleClick}
					onBlur={handleBlur}
					height={height}
					onChange={(event) => handleChange(event)}
					borderRadius={borderRadius}
					type={hide}
					mediaCustom={mediaCustom}
					border={border}
					color="#ff9999"
					value={text}
					padding={padding}
					></S.styledInput>
			) : (
				<S.styledInput
					onClick={handleClick}
					onBlur={handleBlur}
					height={height}
					onChange={(event) => handleChange(event)}
					borderRadius={borderRadius}
					type={hide}
					mediaCustom={mediaCustom}
					border={border}
					color={color}
					value={text}
					padding={padding}
					textAlign={textAlign}
					max={type && typeof type === 'number' && max ? max : ''}
					min={0}
					fontSize={fontSize}
					></S.styledInput>
			)}
		</S.styledDiv>
	);
};
