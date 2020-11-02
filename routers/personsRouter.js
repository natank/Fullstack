const express = require('express');

const router = express.Router();

const utils = require('../dal/personsDAL')

router.route('/')
  .get(function (req, resp) {
    return resp.json(utils.getAll())
  });


router.route('/:id')
  .get(function (req, resp) {
    let id = req.params.id;
    return resp.json(utils.getPerson(id))
  });

router.route('/')
  .post(function (req, resp) {
    utils.addPerson(req.body)
    return resp.json("Created !")
  });

router.route('/:id')
  .put(function (req, resp) {
    let id = req.params.id;
    utils.updatePerson(id, req.body)
    return resp.json("Updated !")
  });


router.route('/:id')
  .delete(function (req, resp) {
    let id = req.params.id;
    utils.deletePerson(id);
    return resp.json("Deleted !")
  });


module.exports = router;