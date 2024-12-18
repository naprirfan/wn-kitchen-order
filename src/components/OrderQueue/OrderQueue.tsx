import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:3000';
const SOCKET_PATH = '/orders';
const EVENT_NEW_ORDER = 'ORDER_PLACED'; // Replace with the actual event name used by the backend

export const OrderQueue = () => {
    const [orders, setOrders] = useState([]); // Initialize an empty array for orders
    const socket = React.useRef<Socket | null>(null);

    useEffect(() => {
        // Initialize Socket.io connection
        console.log('Connecting to WebSocket server...');
        socket.current = io(SOCKET_SERVER_URL + SOCKET_PATH, {
            path: '/socket.io', // Default Socket.io path
        });

        // Log successful connection
        socket.current.on('connect', () => {
            console.log('WebSocket connected:', socket.current?.id);
        });

        // Listen for 'newOrder' events from the server
        socket.current.on(EVENT_NEW_ORDER, (order) => {
            console.log('Received new order:', order); // Log the received order
            setOrders(order); // Append the new order to the list
        });

        // Handle errors
        socket.current.on('connect_error', (error) => {
            console.error('WebSocket connection error:', error);
        });

        // Cleanup on component unmount
        return () => {
            console.log('Disconnecting WebSocket...');
            socket?.current?.disconnect();
        };
    }, []);

    return (
        <div>
            <h1>Order Queue</h1>
            {JSON.stringify(orders)}
        </div>
    );
};
