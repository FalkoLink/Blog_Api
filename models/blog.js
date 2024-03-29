const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String },
  timestamps: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Blog', blogSchema);
