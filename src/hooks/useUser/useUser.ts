import { useCallback } from "react";
import axios from "axios";
import { UserCredentials } from "../../store/types";
import { wrongCredentialsModal } from "../../components/Modal/modals";
import { useAppDispatch } from "../../store";
import {
  hideLoaderActionCreator,
  showFeedbackActionCreator,
} from "../../store/ui/uiSlice";

export const apiurl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const dispatch = useAppDispatch();
  const getUserToken = useCallback(
    async (userCrendentials: UserCredentials) => {
      try {
        const {
          data: { token },
        } = await axios.post<{ token: string }>(
          `${apiurl}/user/login`,
          userCrendentials
        );

        return token;
      } catch (error) {
        (error as Error).message = "Wrong Credentials";
        dispatch(
          showFeedbackActionCreator({
            isError: true,
            isOn: true,
            message: wrongCredentialsModal.message,
          })
        );
        dispatch(hideLoaderActionCreator());

        throw error;
      }
    },
    [dispatch]
  );

  return { getUserToken };
};

export default useUser;
