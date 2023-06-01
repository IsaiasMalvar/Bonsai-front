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
