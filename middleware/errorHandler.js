module.exports = (err, req, res, next) => {
  if (res.headersSent) return next(err);
  if (err.name === 'ValidationError') {
    const errors = Object.keys(err.errors).map(key => ({ field: key, message: err.errors[key].message }));
    return res.status(400).json({ message: 'Validation Error', errors });
  }
  if (err.name === 'CastError' && err.kind === 'ObjectId') return res.status(400).json({ message: 'Invalid ID format' });
  res.status(500).json({ message: err.message || 'Server Error' });
};
