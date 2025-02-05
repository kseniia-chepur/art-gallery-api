import { Request, Response, NextFunction } from 'express';
import {
  validateArtworkDataWithJoiOnCreate,
  validateArtworkDataWithJoiOnUpdate,
} from '../utils/validation/artwork.validation';

const validateArtworkDataOnCreate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { value, error } = validateArtworkDataWithJoiOnCreate(req.body);

  if (error) {
    res.status(400).json({ message: error.message });
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
    res.status(400).json({ message: error.message });
    return;
  }

  req.body = value;
  next();
};

export { validateArtworkDataOnCreate, validateArtworkDataOnUpdate };
