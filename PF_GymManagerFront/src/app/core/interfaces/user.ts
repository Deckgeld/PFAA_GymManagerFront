export interface User {
    id: string;
    userName: string
    phoneNumber: string;
    email: string;
}

export interface newUserDto {
    phoneNumber: string;
    password: string;
    email: string;
}

export interface editUserDto {
    phoneNumber: string;
    email: string;
}

