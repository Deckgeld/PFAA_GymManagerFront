export interface login{
    userName: string;
    password: string
}

export interface ResponseModelLogin<T> {
    hasError: boolean;
    message: string,
    model: T;
    requestId: string;
}