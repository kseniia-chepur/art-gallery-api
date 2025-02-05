import { model, Schema } from 'mongoose';
import { ArtworkTypes } from '../utils/constants/artworkTypes.enum';

const artworkSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ArtworkTypes,
      default: ArtworkTypes.PAINTING,
    },
    image: { type: String },
    price: { type: Number, required: true },
    availability: { type: Boolean },
  },
  { timestamps: true, versionKey: false }
);

const Artwork = model('Artwork', artworkSchema);

export { Artwork };
