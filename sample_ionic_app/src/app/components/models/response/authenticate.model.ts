import { JWT_TOKEN_TYPE } from '../../../constants/strings'
export interface AuthenticateData {
  token_type: string;
  email: string | null;
  firstName: string | null;
  id: number | null;
  id_token: string | null;
  lastName: string | null;
  mfa_enabled: false;
  roles: { name: string }[] | undefined;
}

export const InitialAuthenticateDataState: AuthenticateData = {
  token_type: JWT_TOKEN_TYPE,
  email: null,
  firstName: null,
  id: null,
  id_token: null,
  lastName: null,
  mfa_enabled: false,
  roles: undefined,
};
