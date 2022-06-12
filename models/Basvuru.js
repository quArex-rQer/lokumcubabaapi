import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  nameSurname: {
    type: String,
    required: true,
  },
  identity: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  telephoneNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  birthDay: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  where: {
    type: String,
    required: true,
  },
  amountOfInvestment: {
    type: Number,
    required: true,
  },
  anythingMore: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Application', applicationSchema);
