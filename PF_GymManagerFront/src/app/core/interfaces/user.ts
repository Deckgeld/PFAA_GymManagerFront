export interface newUser {
    phoneNumber:	string;
    password:	    string;
    email:	        string;
}

export interface ResponseModelNewUser<T> {
    hasError: boolean;
    message: string,
    model: T;
    requestId: string;
}