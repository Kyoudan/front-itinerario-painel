import { useEffect, useState, useContext } from 'react';
import { Container } from '../../components/Container';
import { api } from '../../api/api';
import { IPostContent, IPosts } from './types';
import { Header } from './components/Header';
import { useNavigate } from 'react-router';
import * as S from './styles';
import { SearchBar } from '../../components/SearchBar';
import { Button } from '../../components/Button';
import { BsFillBrushFill } from 'react-icons/bs';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

export const Postagens = () => {
	const [posts, setPosts] = useState<IPosts[]>([]);
	const [search, setSearch] = useState('');
	const [loading, setLoading] = useState(false);
	const {cellphone} = useContext(AuthContext)

	const getDices = async () => {
		try {
			setLoading(true);
			const dices = await api.get('/post');
			console.log(dices.data.data);
			setPosts(dices.data.data);
			setLoading(false);
		} catch {}
	};

	const handleSearch = async () => {
		try {
			setLoading(true);
			if (search) {
				const seacrhDices = await api.get(`/posts/slug?q=${search}`);
				console.log(seacrhDices);
				setPosts(seacrhDices.data.data);
				setLoading(false);
				return;
			}
			getDices();
		} catch {}
	};

	useEffect(() => {
		getDices();
	}, []);

	useEffect(() => {
		console.log(search);
	}, [search]);

	useEffect(() => {console.log(cellphone)}, [cellphone])

	return (
		<Container>
			<S.styledDiv>
				<Header navigate={useNavigate()} />
				<SearchBar
					text={(e) => setSearch(e.target.value)}
					onClick={handleSearch}
					widthCard="100%"
				/>

				{loading ? (
					<S.styledLoading cellphone={cellphone}>
						<Button
							width="60px"
							backgroundColor="transparent"
							border="none"
							sizeLoading={100}
							isLoading={true}
							colorLoading="#000"
							justifyContent="center"
						/>
					</S.styledLoading>
				) : (
					posts.map((item) => (
						<S.styledPostDiv>
							<S.styledContainerPost key={item.id}>
								<div>
									<S.styledPostTitle>
										Titulo: {item.name}
									</S.styledPostTitle>
									<S.styledPostText>
										Descrição: {item.description}
									</S.styledPostText>
								</div>
								<div>
									<Button
										width="50px"
										height="50px"
										background="#ff3939"
										boxShadowHover="0px 0px 10px 1px #ff3939"
										justifyContent="center"
										borderRadius="50%"
										border="none"
										Icon={() => <BsFillBrushFill />}
									/>
								</div>
							</S.styledContainerPost>
						</S.styledPostDiv>
					))
				)}
			</S.styledDiv>
		</Container>
	);
};
