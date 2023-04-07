export interface ResponseData {
  data: any;
  error: boolean;
  loading: boolean;
}

export const InitialResponseDataState: ResponseData = {
  data: null,
  error: false,
  loading: false,
};
