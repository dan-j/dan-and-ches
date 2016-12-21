import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  email: String,
  partySize: Number,
  invitation: {
    ceremony: Boolean,
    meal: Boolean,
    evening: Boolean,
  },
  pin: { type: String, select: false },
}, {
  collection: 'users',
});

/* this function errors if using ES6 => notation!!! */
UserSchema.methods.comparePin = function comparePin(candidatePin, cb) {
  cb(null, this.pin === candidatePin);
};

UserSchema.statics.findByEmail = function findByEmail(email, cb) {
  return this.findOne({ email: { $regex: new RegExp(email, 'i') } }, '+pin', cb);
};

export default mongoose.model('User', UserSchema);
