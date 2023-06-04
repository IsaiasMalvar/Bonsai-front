import { useAppSelector } from "../../store";
import { useCallback } from "react";
import { MicroStructure, MicrosApiResponse } from "../../store/types";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const useMicros = () => {
  const token = useAppSelector((state) => state.userStore.token);

  const getMicros = useCallback(async (): Promise<MicroStructure[]> => {
    const {
      data: { microstories },
    } = await axios.get<MicrosApiResponse>(`${apiUrl}/micros`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return microstories;
  }, [token]);

  return { getMicros };
};

export default useMicros;
