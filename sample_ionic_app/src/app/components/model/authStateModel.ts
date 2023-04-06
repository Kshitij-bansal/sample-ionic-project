
import { TokenStatus } from "../emuns/token.enum";
import { AccessData, InitialAccessDataState } from "./access-data.model";


export interface AuthState {
  user: any;
  accessData: AccessData;
  isLoggedIn: boolean;
  accessTokenStatus: TokenStatus;
  isLoadingLogin: boolean;
  hasLoginError: boolean;
}

export const InitialAuthState: AuthState = {
  accessData: InitialAccessDataState,
  user : null,
  isLoggedIn: false,
  accessTokenStatus: TokenStatus.PENDING,
  isLoadingLogin: false,
  hasLoginError: false,
};
