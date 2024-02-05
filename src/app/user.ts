import { Book } from "./book";

export interface User {
    id: number,
    userName: string,
    password: string,
    pic: string,
    favGenre: string,
    nowRead: Book,
    logIn: boolean,
}
