import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { api } from '../../api/api';
import { IPostAxios, IPosts } from './types';

export const EditPostagens = () => {
	const { slug } = useParams();
	const [post, setPost] = useState<IPosts>();

	const handleGetPosts = async () => {
		try {
			const result: IPostAxios = await api.get(`/post/${slug}`);
			setPost(result.data);
		} catch {}
	};

	useEffect(() => {
		handleGetPosts();
	}, []);
	console.log(slug);
	return <h1>Você está na pagina: {post?.data.name}</h1>;
};
