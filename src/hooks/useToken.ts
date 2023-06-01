import jwt_decode from "jwt-decode";
import { UserTokenStructure } from "../store/types";

const useToken = () => {
  const getTokenData = (token: string): UserTokenStructure => {
    const decodedToken: { sub: string; name: string } = jwt_decode(token);
    const userLoggedData = {
      id: decodedToken.sub,
      username: decodedToken.name,
      token,
    };
    return userLoggedData;
  };
  return { getTokenData };
};

export default useToken;
