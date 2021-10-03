## Custom Error

Developed to select pre-defined error properties easily.

![npm](https://img.shields.io/npm/v/@mertsolak/custom-error)
![license](https://img.shields.io/npm/l/@mertsolak/custom-error)
![size](https://img.shields.io/bundlephobia/min/@mertsolak/custom-error)
![issue](https://img.shields.io/github/issues/mert-solak/custom-error)

## Installation

Use node package manager to install @mertsolak/custom-error.

```bash
npm i @mertsolak/custom-error
```

## Usage

Create an instance in any file.

```typescript
// custom-error.ts

enum ErrorTypes {
  INTERNAL_SERVER_ERROR,
  BAD_REQUEST,
}

const properties = [
  {
    errorCode: ErrorTypes.INTERNAL_SERVER_ERROR,
    status: 500,
    message: 'Internal Server Error',
  },
  {
    errorCode: ErrorTypes.BAD_REQUEST,
    status: 400,
    message: 'The field ${ arg.fieldName } has to be type of ${ arg.fieldType }',
  },
];

export const customError = new CustomError(ErrorTypes, properties);
```

Import and use custom-error in everywhere.

```typescript
// any-file.ts

import { customError } from './custom-error';

throw customError.select('BAD_REQUEST', { fieldName: 'email', fieldType: 'string' });
// OR
throw customError.select('INTERNAL_SERVER_ERROR');
// OR pre-defined error properties can be overwritten
throw customError.select('INTERNAL_SERVER_ERROR').setName('updatedName').setStatus(404);
```
