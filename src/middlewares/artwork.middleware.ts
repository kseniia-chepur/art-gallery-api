import { Request, Response, NextFunction } from 'express';
import {
  validateArtworkDataWithJoiOnCreate,
  validateArtworkDataWithJoiOnUpdate,
} from '../utils/validation/artwork.validation';
import * as artworkService from '../services/artwork.service';
import { Artwork } from '../models/artwork.model';

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

const validateArtworkId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: 'Id is required' });
      return;
    }

    const isIdValid = artworkService.verifyIfIdValid(id);
    const isIdExists = await artworkService.verifyIfIdExists(id);

    if (!isIdValid || !isIdExists) {
      res.status(404).json({ message: 'Id is not valid or does not exist' });
      return;
    }

    next();
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export {
  validateArtworkDataOnCreate,
  validateArtworkDataOnUpdate,
  validateArtworkId,
};
