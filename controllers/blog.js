const Blog = require('../models/blog');
const { validationResult } = require('express-validator');


const handleValidationErrors = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
};

exports.getAll = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res) => {
 
 handleValidationErrors(req, res);

 const { title, body, author } = req.body;

 console.log(req.body);
 try {
	 const newBlog = new Blog({ title, body, author });
	 const savedBlog = await newBlog.save();
	 res.status(201).json(savedBlog);
 } catch (err) {
	 res.status(500).json({ message: err.message });
 }
};

exports.updateById = async (req, res) => {

  handleValidationErrors(req, res);

  const { title, body, author } = req.body;
	console.log(req.body)
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, { title, body, author }, { new: true });
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
