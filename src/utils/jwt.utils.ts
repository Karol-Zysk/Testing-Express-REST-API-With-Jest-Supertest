import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

const privateKey = `${process.env.PRIVATE_KEY}`;
const publicKey = `${process.env.PUBLIC_KEY}`;

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  console.log(privateKey);
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey);

    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    console.error(e);
    return {
      valid: false,
      expired: e.message === "jwt expired",
      decoded: null,
    };
  }
}
