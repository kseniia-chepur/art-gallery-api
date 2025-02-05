import { Request, Response } from 'express';
import * as artworkService from '../services/artwork.service';

const createArtwork = async (req: Request, res: Response) => {
  try {
    const artworkData = req.body;
    const newArtwork = await artworkService.createArtwork(artworkData);

    res.status(201).json(newArtwork);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Internal server error';
    res.status(500).json({ message });
  }
};

const getAllArtworks = async (req: Request, res: Response) => {
  try {
    const artworks = await artworkService.getAllArtworks();

    if (!artworks.length) {
      res.status(404).json({ message: 'No artwork found' });
      return;
    }

    res.status(200).json(artworks);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Internal server error';
    res.status(500).json({ message });
  }
};

const getOneArtwork = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const artwork = await artworkService.getArtworkById(id);

    res.status(200).json(artwork);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Internal server error';
    res.status(500).json({ message });
  }
};

const updateArtwork = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedArtwork = await artworkService.updateArtwork(id, req.body);

    res.status(200).json(updatedArtwork);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Internal server error';
    res.status(500).json({ message });
  }
};

const deleteArtwork = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await artworkService.deleteArtwork(id);

    res.sendStatus(204);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Internal server error';
    res.status(500).json({ message });
  }
};

export {
  createArtwork,
  getAllArtworks,
  getOneArtwork,
  updateArtwork,
  deleteArtwork,
};
