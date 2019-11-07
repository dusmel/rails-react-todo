import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const decodeToken = () => {
  const bearerToken = localStorage.getItem('todo-token');
  if (bearerToken) {
    const [, token] = bearerToken.split(' ');
    try {
      const jwtPayload = jwt.verify(token, process.env.SECRET_KEY);
      return jwtPayload;
    } catch (error) {
      console.error(error);
    }
  }
  return {};
};

export default decodeToken;
