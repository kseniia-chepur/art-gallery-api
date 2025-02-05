import Joi from 'joi';
import { ArtworkTypes } from '../constants/artworkTypes.enum';
import { ArtworkData } from '../types/artwork.interface';

const validateArtworkDataWithJoi = (dataToValidate: ArtworkData) =>
  Joi.object()
    .keys({
      title: Joi.string().max(99).required(),
      artist: Joi.string().max(50).required(),
      type: Joi.string()
        .valid(...Object.values(ArtworkTypes))
        .required(),
      image: Joi.string().uri(),
      price: Joi.number().greater(0).required(),
      availability: Joi.boolean(),
    })
    .validate(dataToValidate);

export { validateArtworkDataWithJoi };
