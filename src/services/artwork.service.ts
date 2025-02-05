import { Artwork } from '../models/artwork.model';
import { ArtworkData } from '../utils/types/artwork.interface';

const createArtwork = (artworkData: ArtworkData ) => Artwork.create(artworkData);

const getAllArtworks = () => Artwork.find();

const getArtworkById = (id: string) => Artwork.findById(id);

export { createArtwork, getAllArtworks, getArtworkById };
