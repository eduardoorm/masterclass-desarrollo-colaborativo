import { Server } from 'socket.io';
import cookie from "cookie"; 

export default function(httServer) {
    const io = new Server(httServer);

    io.on('connection', socket => {
        const rawCookie = socket.handshake.headers.cookie || "";
        const parsedCookies = cookie.parse(rawCookie);
        const username = parsedCookies.username || "Invitado";

        socket.on('message', message => {
            io.emit('message', {user:username, message});
        });
    });
}