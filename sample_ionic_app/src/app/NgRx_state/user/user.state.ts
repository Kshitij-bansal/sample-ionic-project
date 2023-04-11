import { AuthenticateData } from '../../components/models/response/authenticate.model';

export interface UserState {
  userDetails: AuthenticateData | undefined;
  isLoading: boolean;
}

export const initialState: UserState = {
  userDetails: undefined,
  isLoading: false,
};
