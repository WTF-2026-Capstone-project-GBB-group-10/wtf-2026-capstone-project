const { Auth, User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { email, password, full_name } = req.body;

    const hashed = await bcrypt.hash(password, 10);
    const auth = await Auth.create({ email, password: hashed });

    const user = await User.create({ auth_id: auth.id, full_name });

    res.status(201).json({ auth, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const auth = await Auth.findOne({ where: { email } });
    if (!auth) return res.status(401).json({ error: 'Invalid credentials' });
 const valid = await bcrypt.compare(password, auth.password);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: auth.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
