import { useAppDispatch, useAppSelector } from "../../store";
import { useCallback } from "react";
import { MicroStructure } from "../../store/types";
import axios from "axios";
import {
  hideLoaderActionCreator,
  showFeedbackActionCreator,
  showLoaderActionCreator,
} from "../../store/ui/uiSlice";
import {
  createdModal,
  deletedModal,
  loadingErrorModal,
  notCreatedModal,
  notDeletedModal,
  notLoadedModal,
} from "../../modals/modals";

const apiUrl = import.meta.env.VITE_API_URL;

const useMicros = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.userStore.token);

  const getMicros = useCallback(
    async (
      skip: number,
      limit: number
    ): Promise<{
      microstories: MicroStructure[];
      totalMicrostories: number;
    }> => {
      try {
        dispatch(showLoaderActionCreator());
        const { data } = await axios.get<{
          microstories: MicroStructure[];
          totalMicrostories: number;
        }>(`${apiUrl}/micros?limit=${limit}&skip=${skip}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        dispatch(hideLoaderActionCreator());

        return {
          microstories: data.microstories,
          totalMicrostories: data.totalMicrostories,
        };
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
    },
    [dispatch, token]
  );

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

  const createMicro = async (newMicro: Partial<MicroStructure>) => {
    try {
      const { data } = await axios.post<{ micro: MicroStructure }>(
        `${apiUrl}/micros/create`,
        newMicro,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(
        showFeedbackActionCreator({
          isError: false,
          message: createdModal.message,
          isOn: true,
          image: createdModal.image,
        })
      );

      return data.micro;
    } catch (error) {
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: notCreatedModal.message,
          isOn: true,
          image: notCreatedModal.image,
        })
      );
    }
  };

  const getMicro = useCallback(
    async (microId: string): Promise<MicroStructure | undefined> => {
      try {
        dispatch(showLoaderActionCreator());
        const {
          data: { microById },
        } = await axios.get<{
          microById: MicroStructure;
        }>(`${apiUrl}/micros/${microId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(hideLoaderActionCreator());

        return microById;
      } catch (error) {
        dispatch(hideLoaderActionCreator());
        dispatch(
          showFeedbackActionCreator({
            message: notLoadedModal.message,
            isError: true,
            image: notLoadedModal.image,
            isOn: true,
          })
        );
      }
    },
    [dispatch, token]
  );

  return { getMicros, deleteMicro, createMicro, getMicro };
};

export default useMicros;
