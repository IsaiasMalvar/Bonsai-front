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
  modifiedModal,
  notCreatedModal,
  notDeletedModal,
  notLoadedModal,
  notModifiedModal,
} from "../../modals/modals";

const apiUrl = import.meta.env.VITE_API_URL;

const useMicros = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.userStore.token);

  interface params {
    skip: number;
    limit: number;
    filter?: string;
    filterValue?: string;
  }

  const getMicros = useCallback(
    async ({
      skip,
      limit,
      filter,
      filterValue,
    }: params): Promise<{
      microstories: MicroStructure[];
      totalMicrostories: number;
    }> => {
      let url = `${apiUrl}/micros?limit=${limit}&skip=${skip}`;

      if (filter) {
        url += `&filter=${filter}&filterValue=${filterValue}`;
      }

      try {
        dispatch(showLoaderActionCreator());
        const { data } = await axios.get<{
          microstories: MicroStructure[];
          totalMicrostories: number;
        }>(`${url}`, {
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

  const modifyMicro = async (Micro: MicroStructure) => {
    try {
      const { data } = await axios.put<{ micro: MicroStructure }>(
        `${apiUrl}/micros/modifyMicrostory`,
        Micro,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(
        showFeedbackActionCreator({
          isError: false,
          message: modifiedModal.message,
          isOn: true,
          image: modifiedModal.image,
        })
      );

      return data.micro;
    } catch (error) {
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: notModifiedModal.message,
          isOn: true,
          image: notModifiedModal.image,
        })
      );
    }
  };

  return {
    getMicros,
    deleteMicro,
    createMicro,
    getMicro,
    modifyMicro,
  };
};

export default useMicros;
