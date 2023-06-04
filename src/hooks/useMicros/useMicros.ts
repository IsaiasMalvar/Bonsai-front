import { useAppDispatch, useAppSelector } from "../../store";
import { useCallback } from "react";
import { MicroStructure, MicrosApiResponse } from "../../store/types";
import axios from "axios";
import {
  hideLoaderActionCreator,
  showLoaderActionCreator,
} from "../../store/ui/uiSlice";

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

      throw new Error("Page could not load properly");
    }
  }, [dispatch, token]);

  return { getMicros };
};

export default useMicros;
