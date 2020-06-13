const router = require('express').Router();
const Breed = require('./breed.model');

router.route('/').post(async (req, res) => {
  const breeds = new Breed({ ...req.body });
  try {
    await breeds.save();
    res.status(200).end();
  } catch (e) {
    console.log(e);
    res.sendStatus(400).end(e);
  }
});
router.route('/:name').get(async (req, res) => {
  const breeds = await Breed.find({ name: req.params.name });
  await res.status(200).json(breeds.map(Breed.toResponse)).end();
});

module.exports = router;
