import { Request, Response } from 'express';
import * as artworkService from '../services/artwork.service';
import { ErrorMsg } from '../utils/constants/errorMsg.enum';
import { HTTPCodes } from '../utils/constants/httpCodes.enum';

const createArtwork = async (req: Request, res: Response) => {
  try {
    const artworkData = req.body;
    const newArtwork = await artworkService.createArtwork(artworkData);

    res.status(HTTPCodes.CREATED).json(newArtwork);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : ErrorMsg.INTERNAL_SERVER_ERROR;
    res.status(HTTPCodes.INTERNAL_SERVER_ERROR).json({ message });
  }
};

const getAllArtworks = async (req: Request, res: Response) => {
  try {
    const artworks = await artworkService.getAllArtworks();

    if (!artworks.length) {
      res
        .status(HTTPCodes.NOT_FOUND)
        .json({ message: ErrorMsg.NO_ENTITY_FOUND });
      return;
    }

    res.status(HTTPCodes.OK).json(artworks);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : ErrorMsg.INTERNAL_SERVER_ERROR;
    res.status(HTTPCodes.INTERNAL_SERVER_ERROR).json({ message });
  }
};

const getOneArtwork = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const artwork = await artworkService.getArtworkById(id);

    res.status(HTTPCodes.OK).json(artwork);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : ErrorMsg.INTERNAL_SERVER_ERROR;
    res.status(HTTPCodes.INTERNAL_SERVER_ERROR).json({ message });
  }
};

const updateArtwork = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedArtwork = await artworkService.updateArtwork(id, req.body);

    res.status(HTTPCodes.OK).json(updatedArtwork);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : ErrorMsg.INTERNAL_SERVER_ERROR;
    res.status(HTTPCodes.INTERNAL_SERVER_ERROR).json({ message });
  }
};

const deleteArtwork = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await artworkService.deleteArtwork(id);

    res.sendStatus(HTTPCodes.NO_CONTENT);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : ErrorMsg.INTERNAL_SERVER_ERROR;
    res.status(HTTPCodes.INTERNAL_SERVER_ERROR).json({ message });
  }
};

export {
  createArtwork,
  getAllArtworks,
  getOneArtwork,
  updateArtwork,
  deleteArtwork,
};
