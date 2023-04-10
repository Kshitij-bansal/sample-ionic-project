import {AuthenticateData} from "../../components/models/response/authenticate.model";

export interface UserState {
  userDetails: AuthenticateData | undefined;
}

export const initialState: UserState = {
  userDetails: undefined,
};
