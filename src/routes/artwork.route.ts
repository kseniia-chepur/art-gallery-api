import { Router } from 'express';
import * as artworkController from '../controllers/artwork.controller';
import * as artworkMiddleware from '../middlewares/artwork.middleware';

const router = Router();

router.post(
  '/',
  artworkMiddleware.validateArtworkDataOnCreate,
  artworkController.createArtwork
);
router.get('/', artworkController.getAllArtworks);
router.get('/:id', artworkController.getOneArtwork);
router.put(
  '/:id',
  artworkMiddleware.validateArtworkDataOnUpdate,
  artworkController.updateArtwork
);
router.delete('/:id');

export { router };
