const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ username }, 'secretkey', { expiresIn: '1h' });
  res.json({ token });
};

exports.signup = (req, res) => {
  res.json({ message: 'Signup successful!' });
};