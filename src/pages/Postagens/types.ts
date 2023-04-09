export interface IPosts {
	id: number;
	name: string;
	description: string;
	color: string;
	slug: string;
	createdAt: string;
	postTags: {
		id: number;
		name: string;
	};
	users: {
		id: number;
		name: string;
		email: string;
	};
	PostContent: IPostContent[];
}

export interface IPostContent {
	id: number;
	content: string;
	PostContentType: {
		id: number;
		name: string;
	};
}
