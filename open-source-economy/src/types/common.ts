export type ApiResponse<T> = {
  data: T;
  statusCode: number;
  message?: string;
};

export type ApiErrorResponse = {
  statusCode: number;
  message: string;
};
