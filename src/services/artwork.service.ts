import { FilterQuery, Types } from 'mongoose';
import { Artwork } from '../models/artwork.model';
import { ArtworkData } from '../utils/types/artwork.interface';
import { QueryParams } from '../utils/types/queryParams.interface';

const createArtwork = (artworkData: ArtworkData) => Artwork.create(artworkData);

const getAllArtworks = () => Artwork.find();

const getArtworksByQuery = async (query: QueryParams) => {
  const { artist, type, price } = query;

  const filter: FilterQuery<QueryParams> = {};
  if (artist) filter.artist = artist;
  if (type) filter.type = type;

  let artworks = await Artwork.find(filter).sort(
    price ? { price: price === 'asc' ? 1 : -1 } : {}
  );

  return artworks;
};

const getArtworkById = (id: string) => Artwork.findById(id);

const updateArtwork = (id: string, artworkData: Partial<ArtworkData>) =>
  Artwork.findByIdAndUpdate(id, artworkData, { new: true });

const deleteArtwork = (id: string) => Artwork.findByIdAndDelete(id);

const verifyIfIdValid = (id: string) => Types.ObjectId.isValid(id);

const verifyIfIdExists = (id: string) => Artwork.exists({ _id: id });

export {
  createArtwork,
  getAllArtworks,
  getArtworksByQuery,
  getArtworkById,
  updateArtwork,
  deleteArtwork,
  verifyIfIdValid,
  verifyIfIdExists,
};
