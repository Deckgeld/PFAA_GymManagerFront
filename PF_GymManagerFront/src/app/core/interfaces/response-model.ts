export interface ResponseModel<Model> {
    hasError: boolean;
    message: string,
    model: Model;
    requestId: string;
}
export interface ResponseArrayModel<Model> {
    hasError: boolean;
    message: string,
    model: Model[];
    requestId: string;
}


export interface Model {
    id: string,
    userName: string,
    phoneNumber: string,
    email: string
}
