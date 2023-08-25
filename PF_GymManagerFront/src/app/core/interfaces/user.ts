export interface userDto {
    id: string;
    userName: string
    phoneNumber: string;
    password: string;
    email: string;
}
export interface newUserDto {
    phoneNumber: string;
    password: string;
    email: string;
}



export interface loginDto {
    userName: string;
    password: string
}
export interface JWT {
    accessToken: string;
}

