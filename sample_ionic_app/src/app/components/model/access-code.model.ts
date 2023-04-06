
export interface AccessCode {
  data: any;
  error: boolean;
  loading: boolean;
}

export const InitialAccessCodeState: AccessCode = {
  data: null,
  error: false,
  loading: false,
};
