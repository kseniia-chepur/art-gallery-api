import { Router } from 'express';
import * as artworkController from '../controllers/artwork.controller';
import * as artworkMiddleware from '../middlewares/artwork.middleware';

const router = Router();

router.post(
  '/',
  artworkMiddleware.validateArtworkData,
  artworkController.createArtwork
);
router.get('/', artworkController.getAllArtworks);
router.get('/:id', artworkController.getOneArtwork);
router.put('/:id');
router.delete('/:id');

export { router };
