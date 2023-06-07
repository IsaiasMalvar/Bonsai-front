import { useAppDispatch, useAppSelector } from "../../store";
import { useCallback } from "react";
import { MicroStructure, MicrosApiResponse } from "../../store/types";
import axios from "axios";
import {
  hideLoaderActionCreator,
  showFeedbackActionCreator,
  showLoaderActionCreator,
} from "../../store/ui/uiSlice";
import {
  deletedModal,
  loadingErrorModal,
  notDeletedModal,
} from "../../components/Modal/modals";

const apiUrl = import.meta.env.VITE_API_URL;

const useMicros = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.userStore.token);

  const getMicros = useCallback(async (): Promise<
    MicroStructure[] | undefined
  > => {
    try {
      dispatch(showLoaderActionCreator());
      const {
        data: { microstories },
      } = await axios.get<MicrosApiResponse>(`${apiUrl}/micros`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(hideLoaderActionCreator());

      return microstories;
    } catch (error) {
      dispatch(hideLoaderActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: true,
          isOn: true,
          message: loadingErrorModal.message,
        })
      );

      throw new Error(loadingErrorModal.message);
    }
  }, [dispatch, token]);

  const deleteMicro = async (microId: string) => {
    try {
      dispatch(showLoaderActionCreator());
      await axios.delete(`${apiUrl}/micros/${microId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(hideLoaderActionCreator());
      dispatch(
        showFeedbackActionCreator({
          message: deletedModal.message,
          isError: false,
          image: deletedModal.image,
          isOn: true,
        })
      );
    } catch (error) {
      dispatch(hideLoaderActionCreator());
      dispatch(
        showFeedbackActionCreator({
          message: notDeletedModal.message,
          isError: true,
          image: notDeletedModal.image,
          isOn: true,
        })
      );
    }
  };

  return { getMicros, deleteMicro };
};

export default useMicros;
