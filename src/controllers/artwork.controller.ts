import { Request, Response } from 'express';
import * as artworkService from '../services/artwork.service';

const createArtwork = async (req: Request, res: Response) => {
  try {
    const artworkData = req.body;
    const newArtwork = await artworkService.createArtwork(artworkData);

    res.status(201).json(newArtwork);
  } catch (error) {
    let message;
    if (error instanceof Error) {
      message = error.message || 'Internal server error';
    }
    res.status(500).json({ message });
  }
};

export { createArtwork };

