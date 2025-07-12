const admin = require('../config/firebase');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.user = decoded; // decoded contains the Firebase UID and other data
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid or expired Firebase token' });
  }
};

module.exports = authMiddleware;
