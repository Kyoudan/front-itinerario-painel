import { Message } from '../../components/Message';
import * as S from './style';
import { IoIosWarning } from 'react-icons/io';

export const Error = () => {
	return (
		<S.styledDiv>
			<IoIosWarning className="Icon" />
			<Message
				message="404 - Not Found"
				padding="10px 0px 0px 0px"
			/>
			<Message
				message="Pagina não encontrada!!"
				fontSize="1.2em"
				color="#ff0101"
			/>
		</S.styledDiv>
	);
};
