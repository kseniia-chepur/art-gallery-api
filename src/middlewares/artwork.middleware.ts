import { Request, Response, NextFunction } from 'express';
import {
  validateArtworkDataWithJoiOnCreate,
  validateArtworkDataWithJoiOnUpdate,
} from '../utils/validation/artwork.validation';
import * as artworkService from '../services/artwork.service';
import { ErrorMsg } from '../utils/constants/errorMsg.enum';
import { HTTPCodes } from '../utils/constants/httpCodes.enum';
import { handleServerError } from '../utils/handleServerError';

const validateArtworkDataOnCreate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { value, error } = validateArtworkDataWithJoiOnCreate(req.body);

  if (error) {
    res.status(HTTPCodes.BAD_REQUEST).json({ message: error.message });
    return;
  }

  req.body = value;
  next();
};

const validateArtworkDataOnUpdate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { value, error } = validateArtworkDataWithJoiOnUpdate(req.body);

  if (error) {
    res.status(HTTPCodes.BAD_REQUEST).json({ message: error.message });
    return;
  }

  req.body = value;
  next();
};

const validateArtworkId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const isIdValid = artworkService.verifyIfIdValid(id);
    const isIdExists = await artworkService.verifyIfIdExists(id);

    if (!isIdValid || !isIdExists) {
      res.status(HTTPCodes.NOT_FOUND).json({ message: ErrorMsg.INVALID_ID });
      return;
    }

    next();
  } catch (error) {
    const message = handleServerError(error);
    res.status(HTTPCodes.INTERNAL_SERVER_ERROR).json({ message });
  }
};

export {
  validateArtworkDataOnCreate,
  validateArtworkDataOnUpdate,
  validateArtworkId,
};
