import { Artwork } from '../models/artwork.model';
import { ArtworkData } from '../utils/types/artwork.interface';

const createArtwork = (artworkData: ArtworkData) => Artwork.create(artworkData);

const getAllArtworks = () => Artwork.find();

const getArtworkById = (id: string) => Artwork.findById(id);

const updateArtwork = (id: string, artworkData: Partial<ArtworkData>) =>
  Artwork.findByIdAndUpdate(id, artworkData, { new: true });

export { createArtwork, getAllArtworks, getArtworkById, updateArtwork };
