import jwt from 'jsonwebtoken';
import configLoader from '../config-loader';

const { issuer, expiresIn, secretOrKey } = configLoader().jwt;
const signOpts = {
  issuer,
  expiresIn,
};

export default class AuthController {

  static login(req, res) {
    const user = req.user.toObject();
    delete user['pin'];

    const payload = {
      sub: user.email,
    };

    const token = jwt.sign(payload, secretOrKey, signOpts);

    res.status(200).json({
      token: `JWT ${token}`,
      user
    })

  }
}
