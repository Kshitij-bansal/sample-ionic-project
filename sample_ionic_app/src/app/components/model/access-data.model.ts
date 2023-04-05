
export interface AccessData {
  token_type: 'Bearer';
  email: string;
  firstName: string;
  id: number;
  id_token: string;
  lastName: string;
  mfa_enabled: false;
}

export const InitialAccessDataState: AccessData = {
  token_type: 'Bearer',
  email: '',
  firstName: '',
  id: 0,
  id_token: '',
  lastName: '',
  mfa_enabled: false
};
