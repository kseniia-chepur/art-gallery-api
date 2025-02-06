import { ErrorMsg } from './constants/errorMsg.enum';

const handleServerError = (error: unknown) => {
  return error instanceof Error
    ? error.message
    : ErrorMsg.INTERNAL_SERVER_ERROR;
};

export { handleServerError };
