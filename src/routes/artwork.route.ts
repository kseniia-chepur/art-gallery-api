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
router.get(
  '/:id',
  artworkMiddleware.validateArtworkId,
  artworkController.getOneArtwork
);
router.put(
  '/:id',
  artworkMiddleware.validateArtworkId,
  artworkMiddleware.validateArtworkDataOnUpdate,
  artworkController.updateArtwork
);
router.delete(
  '/:id',
  artworkMiddleware.validateArtworkId,
  artworkController.deleteArtwork
);

export { router };
