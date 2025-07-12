import { buildSelector } from '@shared/lib/store';

import { IUserStateSchema } from '../../lib/@types';

const selectUser = (state: RootState): RootState => state;

export const [useGetUser, getUser] = buildSelector<RootState, IUserStateSchema>(state => state.userSlice, [selectUser]);
