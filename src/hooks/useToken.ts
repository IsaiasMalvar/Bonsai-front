import jwt_decode from "jwt-decode";
import { UserDataStructure } from "../store/types";

const useToken = () => {
  const getTokenData = (token: string): UserDataStructure => {
    const decodedToken: { sub: string; name: string } = jwt_decode(token);
    const userLoggedData = {
      id: decodedToken.sub,
      username: decodedToken.name,
    };
    return userLoggedData;
  };
  return { getTokenData };
};

export default useToken;
