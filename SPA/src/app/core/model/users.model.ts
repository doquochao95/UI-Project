import { Role } from "./role.model";

export interface Users {
  staffName: string;
    cardNumber: number;
    department: string;
    lineId: number;
    rfidcode: string;
    deviceId: number;
    userName: string;
    userPassword: string;
    userLayer: string;
    is_Admin: boolean;

  role: Role;
  remember_Me: string;
}

export interface UserForLogged {
  token: string;
  user: Users;
  refreshToken: string;
}

