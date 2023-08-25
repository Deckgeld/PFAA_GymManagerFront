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

export interface ResponseErrorModel {
    errors: any;
    type: string;
    title: string;
    status: number;
    traceId: string;
}
