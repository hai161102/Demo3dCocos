import { Socket, io } from "socket.io-client";

export const URL_SOCKET: string = "http://localhost:8080";
export const TAG = {
    USER_IN : "user_in",
    GET_USERS : 'get_users',
}

export class SocketUtils {
    private static _instance: SocketUtils = null;
    public static get instance(): SocketUtils {
        if (SocketUtils._instance == null) SocketUtils._instance = new SocketUtils();
        return SocketUtils._instance;
    }

    private _socket: Socket = null;
    public get socket(): Socket {
        return this._socket;
    }


    constructor() {
        this._socket = io(URL_SOCKET);
        this._socket.connect();
    }
}

