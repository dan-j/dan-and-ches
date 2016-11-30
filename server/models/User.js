import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  email: { type: String, select: false },
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
UserSchema.methods.comparePin = function(candidatePin, cb) {
  cb(null, this.pin === candidatePin)
};

export default mongoose.model('User', UserSchema);
