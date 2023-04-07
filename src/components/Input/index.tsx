import * as S from './style';
import { IProps } from './types';
import { useState, useEffect } from 'react';

export const Input = ({ width, height, label, sizeHeight }: IProps) => {
	const [stateLabel, setStateLabel] = useState(false);
	const [text, setText] = useState('');
	let size = 0;

	function handleClick() {
		setStateLabel(true);
	}

	function handleBlur() {
		if (text.length == 0) {
			setStateLabel(false);
		}
	}

	if (sizeHeight) {
		size = parseFloat(sizeHeight) / 2 - 10;
	}

	return (
		<S.styledDiv
			width={width}
			height={height}
			label={label}
			stateLabel={stateLabel}
			sizeHeight={size}>
			<S.styledInput
				onClick={handleClick}
				onBlur={handleBlur}
				onChange={(event) =>
					setText(event.target.value)
				}></S.styledInput>
		</S.styledDiv>
	);
};
