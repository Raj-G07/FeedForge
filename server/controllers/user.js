import JWTService from "../utils/jwt.js"
import {User} from "../models/user.js"
const LoginwithGoogle = async (profile,cb) => {
    const chk_user = await User.findOne({node_id:profile?._json.sub})
    if(chk_user){
        const token = JWTService.generateToken({userId:chk_user})
        cb(null,chk_user)
        return
    }
    const user = await User.create({
        node_id:profile?._json.sub,
        fullname:profile?._json.name,
        email:profile?._json.email
    })
    const token = JWTService.generateToken({userId:user._id})
    cb(user)
    return
}

export const VerifyToken = async (req, res, next) => {
  try {
    const authToken = req.headers['authorization'] || '';

    if (!authToken || !authToken.startsWith('Bearer')) {
      throw new Error('Please login first');
    }

    const token = authToken.split(' ')[1];

    if (!token) {
      throw new Error('Please provide a valid token');
    }

    const payload = JWTService.verifyToken(token,'userId');

    req.user = payload;
    next();
  } catch (error) {
    next(new Error(error.message));
  }
};

export const ProfileController = async (req, res) => {
  try {
    const chk_user = await User.findById(req.user);

    if (!chk_user) {
      return res.status(401).send({
        error: "Cannot find user",
      });
    }

    res.status(200).send({
      user: chk_user.toObject(),
    });
  } catch (error) {
    res.status(500).send({
      error: "Internal Server Error",
    });
  }
};


export default LoginwithGoogle;