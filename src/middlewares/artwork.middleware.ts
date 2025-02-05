import { Request, Response, NextFunction } from 'express';
import { validateArtworkDataWithJoi } from '../utils/validation/artwork.validation';

const validateArtworkData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { value, error } = validateArtworkDataWithJoi(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  req.body = value;
  next();
};

export { validateArtworkData };
