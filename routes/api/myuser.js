// routes/api/myuser.js

const express = require('express');
const router = express.Router();

// Load Myuser model
const Myuser = require('../../models/Myuser');

// @route GET api/myuser/test
// @description tests myuser route
// @access Public
router.get('/test', (req, res) => res.send('myuser route testing!'));

// @route GET api/myuser
// @description Get all myuser
// @access Public
router.get('/', (req, res) => {
  Myuser.find()
    .then(myuser => res.json(myuser))
    .catch(err => res.status(404).json({ nomyuserfound: 'No Myusers found' }));
});

// @route GET api/myuser/:id
// @description Get single myuser by id
// @access Public
router.get('/:nik', (req, res) => {
  // Myuser.findById(req.params.nik)
  Myuser.findOne({ 'nik': req.params.nik })
    .then(myuser => res.json(myuser))
    .catch(err => res.status(404).json({ nomyuserfound: 'No Myuser found' }));
});

// @route GET api/myuser
// @description add/save myuser
// @access Public
router.post('/', (req, res) => {
  // console.log(req.body);
  Myuser.create(req.body)
    .then(myuser => res.json({ msg: 'Myuser added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this myuser' }));
});

// @route GET api/myuser/:id
// @description Update myuser
// @access Public
router.put('/:nik', (req, res) => {
  // Myuser.findByIdAndUpdate(req.params.nik, req.body)
  Myuser.findOneAndUpdate({ 'nik': req.params.nik }, req.body)
    .then(myuser => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/myuser/:id
// @description Delete myuser by id
// @access Public
router.delete('/:nik', (req, res) => {
  // Myuser.findByIdAndRemove(req.params.id, req.body)
  Myuser.findOneAndDelete({ 'nik': req.params.nik }, req.body)
    .then(myuser => res.json({ mgs: 'Myuser entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a myuser' }));
});

module.exports = router;