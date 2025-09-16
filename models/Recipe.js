const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  ingredients: [{ type: String, required: true }],
  steps: [{ type: String, required: true }],
  servings: { type: Number, default: 1, min: 1 },
  prepTime: { type: Number, default: 0, min: 0 },
  cookTime: { type: Number, default: 0, min: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Recipe', RecipeSchema);
