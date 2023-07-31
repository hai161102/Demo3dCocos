
export const URL_SOCKET: string = "ws://localhost:8080";

export class SocketUtils {
    private static _instance: SocketUtils = null;
    public static get instance(): SocketUtils {
        if (SocketUtils._instance == null) SocketUtils._instance = new SocketUtils();
        return SocketUtils._instance;
    }

    private _socket: WebSocket = null;
    public get socket(): WebSocket {
        return this._socket;
    }

    constructor() {
        this._socket = new WebSocket(URL_SOCKET);
    }

    on(tag : string, onResults : Function) {
        this._socket.addEventListener('message', (event) => {
            onResults(event);
        });
    }

    send(message: string, ...data: any): void {
        let jsData: string[] = [];
        data.forEach(d => {
            jsData.push(this.convert(message, d));
        });
        jsData.forEach(element => {
            this._socket.send(element);
        });
    }

    private convert(message: string, data: any): string {
        let property: keyof typeof data;
        for (property in data) {
            if (data.hasOwnProperty(property)) {
            }
        }
        return JSON.stringify(data);
    }
}