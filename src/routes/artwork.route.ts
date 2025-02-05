import { Router } from 'express';

const router = Router();

router.post('/');
router.get('/:id');
router.put('/:id');
router.delete('/:id');

export { router };