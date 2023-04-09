import { useEffect, useState } from 'react';
import { Container } from '../../components/Container';
import { api } from '../../api/api';
import { IPostContent, IPosts } from './types';

export const Postagens = () => {
	const [posts, setPosts] = useState<IPosts[]>([]);

	const getDices = async () => {
		try {
			const dices = await api.get('/post');
			console.log(dices.data.data);
			setPosts(dices.data.data);
		} catch {}
	};

	useEffect(() => {
		getDices();
	}, []);

	return (
		<Container>
			<div>
				{posts.map((item) => (
					<ul key={item.id}>
						<li>{item.name}</li>
						<li>{item.color}</li>
						<li>{item.slug}</li>
						<li>{item.createdAt}</li>
						<li>{item.users.name}</li>
						<li>{item.users.email}</li>
						<li>{item.postTags.name}</li>
						{item.PostContent.map((res: IPostContent) => (
							<div>
								<li>{res.content}</li>
							</div>
						))}
						<br />
						<br />
						<br />
						<br />
						<hr />
					</ul>
				))}
			</div>
		</Container>
	);
};
