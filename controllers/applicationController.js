import Application from '../models/Basvuru.js';

export const getApplication = async (req, res, next) => {
  try {
    const allApplications = await Application.find();
    res.status(200).json(allApplications);
  } catch (err) {
    next(err);
  }
};

export const postApplication = async (req, res, next) => {
  const newApplication = new Application(req.body);
  try {
    const savedApplication = await newApplication.save();
    res.status(200).json(savedApplication);
  } catch (err) {
    next(err);
  }
};
