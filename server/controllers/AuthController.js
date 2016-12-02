import jwt from 'jsonwebtoken';
import config from '../../config';

const { issuer, expiresIn, secretOrKey } = config.jwt;
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
