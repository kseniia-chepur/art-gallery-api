import { Router } from 'express';
import * as artworkController from '../controllers/artwork.controller';
import * as artworkMiddleware from '../middlewares/artwork.middleware';

const router = Router();

router.post('/', artworkController.createArtwork);
router.get('/:id');
router.put('/:id');
router.delete('/:id');

export { router };