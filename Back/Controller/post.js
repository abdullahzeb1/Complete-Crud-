const User = require('../Model/view');

//creting Api
const createApi = async (req, res) => {
  try {
    const myuser = await User(req.body);
    myuser.save().then((used) => {
      res.status(200).json(used);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const showApi = async (req, res) => {
  User.find((err, used) => {
    if (err) {
      res.status(500).json('Api failed');
    } else {
      res.status(200).json(used);
    }
  });
};

const DeleteApi = async (req, res) => {
  const id = req.params.id;
  User.findByIdAndRemove(id, (err, used) => {
    if (err) {
      console.log('Api failed to delete');
    } else {
      res.status(200).send(used);
    }
  });
};

const editApi = async (req, res) => {
  const id = req.params.id;
  User.findById(id, (err, used) => {
    if (err) {
      console.log('Api failed to get');
    } else {
      res.status(200).send(used);
    }
  });
};
const updateApi = async (req, res) => {
  const id = req.params.id;
  User.findById(id, (err, used) => {
    if (err) {
      console.log('Api failed to get');
    } else {
      used.name = req.body.name;
      used.tittle = req.body.tittle;
      used.data = req.body.data;
      used
        .save()
        .then((used) => {
          res.status(200).json(used);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  });
};

module.exports = { createApi, showApi, DeleteApi, editApi, updateApi };
