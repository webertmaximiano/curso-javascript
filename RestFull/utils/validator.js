const { body, validationResult } = require('express-validator');

// Validador para a rota de criação e edição de usuários
const userValidator = [
  body('name').notEmpty().withMessage('The name is required.'),
  body('email').notEmpty().withMessage('The email is required.').isEmail().withMessage('The email is invalid.'),
];

// Função para lidar com erros de validação
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { userValidator, handleValidationErrors };
