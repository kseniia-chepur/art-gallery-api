import { Artwork } from '../models/artwork.model';
import { ArtworkData } from '../utils/types/artwork.interface';

const createArtwork = (artworkData: ArtworkData ) => Artwork.create(artworkData);

export { createArtwork };
