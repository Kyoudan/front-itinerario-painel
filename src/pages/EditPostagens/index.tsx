import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { api } from '../../api/api';
import { IPostAxios, IPosts } from './types';
import { Container } from '../../components/Container';
import { Header } from './components/Header';
import { useNavigate } from 'react-router-dom';
import * as S from './style'

export const EditPostagens = () => {
	const { slug } = useParams();
	const [post, setPost] = useState<IPosts>();

	const handleGetPosts = async () => {
		try {
			const result: IPostAxios = await api.get(`/post/${slug}`);
			if (result) {
				setPost(result.data);
			}
		} catch {}
	};

	useEffect(() => {
		handleGetPosts();
	}, []);
	console.log(slug);
	return (
		<Container>
			<S.styledDiv>
				<Header navigate={useNavigate()} />
				<h1>Você está na pagina: {post?.data.name}</h1>
			</S.styledDiv>
		</Container>
	);
};
