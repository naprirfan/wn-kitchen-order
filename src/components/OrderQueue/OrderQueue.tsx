import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { socketKey } from '../../constants';

const SOCKET_SERVER_URL = 'http://localhost:3000/';
const SOCKET_PATH = '/orders';

export const OrderQueue = () => {
    const [orders, setOrders] = useState([]);
    const socket = React.useRef<Socket | null>(null);

    useEffect(() => {
        // Initialize Socket.io connection
        socket.current = io(SOCKET_SERVER_URL, {
            path: SOCKET_PATH,
        });

        // Listen for 'newOrder' events from the server
        socket.current.on(socketKey.ORDER_PLACED, (order) => {
            setOrders(order);
        });

        // Cleanup on component unmount
        return () => {
            socket?.current?.disconnect();
        };
    }, []);

    return (
        <div>
            {JSON.stringify(orders)}
        </div>
    )
}