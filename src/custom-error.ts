import { ErrorTypes, Properties } from './custom-error.type';

export class CustomError<E extends ErrorTypes> extends Error {
  name: string;
  status: number;
  message: string;
  errorCode: number | string;

  readonly #errorTypes: E;
  readonly #properties: Properties;

  constructor(errorTypes: E, properties: Properties) {
    super();

    this.#errorTypes = errorTypes;
    this.#properties = properties;
  }

  select = (errorName: keyof E, arg?: any) => {
    this.errorCode = this.#errorTypes[errorName];
    this.name = errorName.toString();

    const properties = this.#properties.find((eachProperties) => eachProperties.errorCode === this.errorCode);

    if (properties === undefined || properties === null) {
      return this;
    }

    this.status = properties.status;

    try {
      this.message = new Function('arg', `return \`${properties.message}\`;`).call(this, arg);
    } catch (error) {
      this.message = properties.message;
    }

    return this;
  };

  setName = (name: string) => {
    this.name = name;

    return this;
  };

  setStatus = (status: number) => {
    this.status = status;

    return this;
  };

  setMessage = (message: string) => {
    this.message = message;

    return this;
  };
}
