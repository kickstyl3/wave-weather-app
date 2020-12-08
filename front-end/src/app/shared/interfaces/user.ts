import { IBase } from './base';

export interface IUser extends IBase {
    followedCities: string[]
    name: string;
    email: string;
    password: string;
};