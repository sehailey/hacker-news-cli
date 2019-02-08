const router = require('express').Router();

module.exports = router;

// what you will hit at /api/robots
router.get('/', async (req, res, next) => {
  try {
    console.log('NSA was here');
    res.status(201).send('FUCK YOU NSA\n');
  } catch (err) {
    next(err);
  }
});
