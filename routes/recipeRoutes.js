const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/recipeController');

const validateRecipe = [
  body('title').isString().trim().notEmpty(),
  body('ingredients').isArray({ min: 1 }),
  body('steps').isArray({ min: 1 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];

router.post('/', validateRecipe, controller.createRecipe);
router.get('/', controller.getAllRecipes);
router.get('/:id', controller.getRecipeById);
router.put('/:id', validateRecipe, controller.updateRecipe);
router.delete('/:id', controller.deleteRecipe);

module.exports = router;
