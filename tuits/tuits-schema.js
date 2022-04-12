import mongoose from 'mongoose';

const schema = mongoose.Schema({
  postedBy: {
    username: String,
    handle: String,
    profileImgSrc: String
  },
  timeStamp: String,
  content: String,
  link: {
    previewImageSrc: String,
    previewTitle: String,
    previewDescription: String,
    baseUrl: String
  },
  stats: {
    replies: Number,
    retuits: Number,
    likes: Number
  },
  liked: Boolean
}, { collection: 'tuits' });

export default schema;
