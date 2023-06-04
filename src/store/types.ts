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
}

export interface MicrosApiResponse {
  microstories: MicroStructure[];
}
