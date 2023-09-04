import { Member } from "./member";

export interface City {
    id: number;
    name: string;
    members: Member[];
}

export interface CityDto {
    name: string;
}

