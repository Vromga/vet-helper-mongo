const router = require('express').Router();
const Client = require('./user.model');

router
  .route('/')
  .get(async (req, res) => {
    const users = await Client.find({});
    await res.status(200).json(users.map(Client.toResponse)).end();
  })
  .post(async (req, res) => {
    const user = new Client({ ...req.body });
    console.log(user);
    try {
      await user.save();
      res.end();
    } catch (e) {
      console.log(e);
      res.sendStatus(400).end(e);
    }
  });

router
  .route('/:id')
  .get()
  .put(async (req, res) => {

    res.end();
  })
  .patch(async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const options = { new: true };
    try {
      const result = await Client.findByIdAndUpdate(id, body, options);
      res.json(result).end();
    } catch (e) {
      console.log(e);
    }
  })
  .delete();

module.exports = router;
