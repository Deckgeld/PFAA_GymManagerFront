import { Member } from "./member";

export interface MembershipType {
    id: number;
    name: string
    cost: number;
    createdOn: string;
    duration: number;
    members: Member[];
}

export interface MembershipTypeDto {
    name: string
    cost: number;
    createdOn: string;
    duration: number;
}
