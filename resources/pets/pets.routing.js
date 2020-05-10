const router = require('express').Router();
const Pet = require('./pets.model');

router
  .route('/')
  .get(async (req, res) => {
    const pets = await Pet.find({});
    await res.status(200).json(pets.map(Pet.toResponse)).end();
  })
  .post(async (req, res) => {
    const pet = new Pet({ ...req.body });
    console.log(pet);
    try {
      await pet.save();
      res.end();
    } catch (e) {
      console.log(e);
      res.sendStatus(400).end(e);
    }
  });
router
  .route('/:id')
  .get(async (req, res) => {
    const pets = await Pet.find({ clientId: req.params.id });
    await res.status(200).json(pets.map(Pet.toResponse)).end();
  });

module.exports = router;
