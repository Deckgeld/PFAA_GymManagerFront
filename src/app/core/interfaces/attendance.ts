import { Member } from "./member";

export interface Attendances {
    id: number;
    dateIn: string;
    dateOut: number;
    member: Member;
}