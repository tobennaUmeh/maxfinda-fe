import {
	AsyncThunk,
	createAsyncThunk,
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';
import { AuthService } from '../../service/includes/AuthService.ts';

interface AuthInitialStateType {
	isLoggedIn?: boolean;
	user?: USER | null;
	token?: TOKEN | null;
	isLoading?: boolean;
}

interface AuthActionType {
	type: string;
	payload: any; // eslint-disable-line @typescript-eslint/no-explicit-any
	login?: AsyncThunk<void, void, AsyncThunkConfig>;
}

const initialState: AuthInitialStateType = {
	token: null,
	isLoading: false,
};

export const authAction: AuthActionType = {
	login: createAsyncThunk('auth/authAction/login', () => {
		AuthService.login()
			.then((response) => {
				return response.data;
			})
			.catch((reason) => {
				return reason.message;
			});
	}),
};
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(authAction.login.pending, (state) => {
				state.isLoading = false;
			})
			.addCase(
				authAction.login.fulfilled,
				(state, action: PayloadAction<any>) => {
					state.token = action.payload.token;
					state.isLoading = false;
				},
			);
	},
});
