export interface UserDataStructure {
  username: string;
  id: string;
}
export interface UserTokenStructure extends UserDataStructure {
  token: string;
}

export interface UserStateStructure extends UserTokenStructure {
  isLogged?: boolean;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface MicroStructure {
  id: string;
  title: string;
  dateOfCreation: string;
  genre: string;
  isPublic: boolean;
  image: string;
  story: string;
  author: string;
}

export interface MicroStateStructure {
  microstories: MicroStructure[];
  totalMicrostories: number;
}

export interface MicrosApiResponse {
  microstories: MicroStructure[];
  totalMicrostories: number;
}

export interface Modal {
  isOn?: boolean;
  isError: boolean;
  message: string;
  image?: string;
}

export interface UiStateStructure {
  isLoading?: boolean;
  modals: Modal;
}

export interface MicroIdStructure {
  microId: string;
}

export interface ButtonStructure {
  text?: string;
  className?: string;
  alt?: string;
  actionOnClick?: () => void;
  icon?: string;
  width?: string;
  height?: string;
  arialLabel?: string;
}
