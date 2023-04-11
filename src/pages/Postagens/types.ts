export interface IPosts {
	id: number;
	name: string;
	description: string;
	color: string;
	uuid: string;
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

export interface IStyledLoading {
	cellphone?: boolean;
}

export interface IHandleViewPosts {
	route: string
}
