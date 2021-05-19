export type ErrorTypes = Record<string, number | string>;

export type Properties = {
  errorCode: string | number;
  status: number;
  message: string;
}[];
