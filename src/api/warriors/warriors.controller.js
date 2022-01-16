const Warriors = require("./warriors.model");
const { setError } = require("../../utils/error/error");

const postNewWarriors = async (req, res, next) => {
  try {
    const newWarriors = new Warriors();
    newWarriors.name = req.body.name;
    newWarriors.description = req.body.description;
    newWarriors.weight = req.body.weight;
    newWarriors.height = req.body.height;
    newWarriors.record = req.body.record;
    newWarriors.category= req.body.category;
    if (req.file) {
      newWarriors.img= req.file.path;
    }
    const warriorsDB = await newWarriors.save();
    return res.status(201).json(warriorsDB);
  } catch (error) {
    return next(setError(500, "Warriors not saved"));
  }
};

const getAllWarriors = async (req, res, next) => {
  try {
    const warriorsDB = await Warriors.find();
    res.status(200).json(warriorsDB);
  } catch (error) {
    return next(setError(500, "Warriors failed server"));
  }
};

const getWarriors = async (req, res, next) => {
  try {
    const { id } = req.params;
    const warriorsDB = await Warriors.findById(id);
    if (!warriorsDB) {
      return next(setError(404, "Warrior not found"));
    }
    return res.status(200).json(warriorsDB);
  } catch (error) {
    return next(setError(500, "Warriors server error"));
  }
};

module.exports = {
  postNewWarriors,
  getAllWarriors,
  getWarriors,
};
