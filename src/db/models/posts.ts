import mongoose, { Schema, Document } from "mongoose";

interface IContent {
  type: string;
  data: string;
}

interface IPost extends Document {
  title: string;
  image: string;
  summary: string;
  content: IContent[];
  author: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  keywords: string[];
}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  summary: { type: String, required: true },
  content: [
    {
      type: { type: String, required: true },
      data: { type: String, required: true },
    },
  ],
  author: { type: mongoose.Schema.Types.ObjectId, required: true },
  createdAt: { type: Date, required: true },
  keywords: [{ type: String, required: true }],
});

export default mongoose.model<IPost>("Post", PostSchema);
