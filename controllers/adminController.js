import Application from '../models/Basvuru.js';

export const getApplication = async (req, res, next) => {
  try {
    const allApplications = await Application.find();
    res.status(200).json(allApplications);
  } catch (err) {
    next(err);
  }
};
