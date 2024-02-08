import mongoose, { Schema, Document } from "mongoose";

interface IComment extends Document {
  content: string;
  author: mongoose.Schema.Types.ObjectId;
  post: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
}

const CommentSchema: Schema = new Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
  createdAt: { type: Date, required: true },
});

export default mongoose.model<IComment>("Comment", CommentSchema);
