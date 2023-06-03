import { useCallback } from "react";
import axios from "axios";
import { UserCredentials } from "../../store/types";

export const apiurl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const getUserToken = useCallback(
    async (userCrendentials: UserCredentials) => {
      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiurl}/user/login`,
        userCrendentials
      );

      return token;
    },
    []
  );

  return { getUserToken };
};

export default useUser;
