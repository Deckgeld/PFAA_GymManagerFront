import { Attendances } from "./attendance";
import { City } from "./city";
import { MembershipType } from "./membership-types";

export interface Member {
    id: number;
    name: string
    lastName: string;
    birthDay: string;
    email: string;
    allowNewsLetter: boolean;
    registeredOn: string;
    membershipEnd: string;

    city:City;
    membershipType: MembershipType;
    attendances: Attendances;
}

export interface MemberDto {
    name: string
    lastName: string;
    birthDay: string;
    email: string;
    allowNewsLetter: boolean;
    registeredOn: string;
    membershipEnd: string;

    cityId: number;
    membershipTypeId: number;
}