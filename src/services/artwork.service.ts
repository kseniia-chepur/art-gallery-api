import { Types } from 'mongoose';
import { Artwork } from '../models/artwork.model';
import { ArtworkData } from '../utils/types/artwork.interface';

const createArtwork = (artworkData: ArtworkData) => Artwork.create(artworkData);

const getAllArtworks = () => Artwork.find();

const getArtworkById = (id: string) => Artwork.findById(id);

const updateArtwork = (id: string, artworkData: Partial<ArtworkData>) =>
  Artwork.findByIdAndUpdate(id, artworkData, { new: true });

const deleteArtwork = (id: string) => Artwork.findByIdAndDelete(id);

const verifyIfIdValid = (id: string) => Types.ObjectId.isValid(id);

const verifyIfIdExists = (id: string) => Artwork.exists({ _id: id });

export {
  createArtwork,
  getAllArtworks,
  getArtworkById,
  updateArtwork,
  deleteArtwork,
  verifyIfIdValid,
  verifyIfIdExists,
};
