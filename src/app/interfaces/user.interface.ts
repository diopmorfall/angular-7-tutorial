export interface IUser{
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    //? hasField?: boolean; if we don't know if it'll be defined, we can set it as an optional one
}
//* An interface that represents the structure of the response; always define one to format it