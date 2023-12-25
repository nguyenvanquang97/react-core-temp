export interface BaseResponse<T> {
  code: number;
  message: string;
  data: T;
}

export interface BaseResToken {
  code: number;
  token: string;
}