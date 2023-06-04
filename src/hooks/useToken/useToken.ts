import jwt_decode from "jwt-decode";
import { UserDataStructure } from "../../store/types";
import { useCallback } from "react";

const useToken = () => {
  const getTokenData = useCallback((token: string): UserDataStructure => {
    const decodedToken: { sub: string; name: string } = jwt_decode(token);
    const userLoggedData = {
      id: decodedToken.sub,
      username: decodedToken.name,
    };
    return userLoggedData;
  }, []);
  return { getTokenData };
};

export default useToken;
