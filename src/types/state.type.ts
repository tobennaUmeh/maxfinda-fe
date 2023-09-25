export type GeneralStates = {
	loading?: boolean;
	error?: string;
};

export type PayloadType<T extends object = object> = GeneralStates &
	T;

export type Action<T extends PayloadType = PayloadType> = {
	type: string;
	payload?: T;
};

export type UserPayloadType = PayloadType<{
	data?: {
		user: UserType;
		tokens: TokenType;
	};
	users?: PaginationResponse<UserType>;
}>;

export type TokenType = {
	access: {
		token: string;
	};
	refresh: {
		token: string;
	};
};

// USER
export type UserStateType = PayloadType<{
	User?: {
		user: UserType;
		tokens: TokenType;
	};
	Users?: PaginationResponse<UserType>;
}>;

export type UserContextType = {
	state: UserStateType;
	replaceUserInfo: (data: {
		user: UserType;
		tokens: TokenType;
	}) => void;
	loginUser: (data: {
		email: string;
		password: string;
	}) => Promise<boolean | undefined>;
	logout: () => void;
};

export type UserTypeWithDoc = {
	_id: string;
	email: string;
	phone: string;
	approved: boolean;
	password?: string;
	user_role: string;
	token: string;
	entity_id: string;
	name: string;
	city: string;
	createdAt: string;
	updatedAt: string;
};

export type UserType = {
	id: string;
	email: string;
	phone: string;
	approved: boolean;
	password?: string;
	user_role: string;
	token: string;
	name: string;
	city: string;
	createdAt: string;
	updatedAt: string;
	_doc: UserTypeWithDoc;
};

export const isUserType = (User: unknown): User is UserType => {
	return (User as UserType).email !== undefined;
};

// Pagination

export type PaginationResponse<T extends object> = {
	docs: T[];
	totalDocs: number;
	limit: number;
	totalPages: number;
	page: number;
	pagingCounter: number;
	hasPrevPage: boolean;
	hasNextPage: boolean;
	prevPage?: number;
	nextPage?: number;
};

// Modal
export type ModalPayloadType = PayloadType<{
	modal?: string;
	data?: unknown;
	result?: unknown;
}>;

export type ModalStateType = {
	modal?: string;
	data?: unknown;
	result?: unknown;
};

export type ModalContextType = {
	state: ModalStateType;
	openModal: (routeName?: string, data?: unknown) => void;
	setModalResult: (data?: unknown) => void;
};
