import React, { createContext, useContext, useEffect, useState } from "react";
import { Socket, io } from 'socket.io-client';
import { socketKey } from "../../constants";

const SOCKET_SERVER_URL = 'http://localhost:3000';
const SOCKET_PATH = '/orders';

const PlacedOrderContext = createContext<any>({});

const PlacedOrderContextProvider = ({ children }: {children: React.ReactNode}) => {
    const [placedOrder, setPlacedOrder] = useState();
    const socket = React.useRef<Socket | null>(null);

    useEffect(() => {
        console.log('Connecting to WebSocket server...');
        socket.current = io(SOCKET_SERVER_URL + SOCKET_PATH, {
            path: '/socket.io', // Default Socket.io path
        });

        // Log successful connection
        socket.current.on('connect', () => {
            console.log('WebSocket connected:', socket.current?.id);
        });

        socket.current.on(socketKey.ORDER_PLACED, (order) => {
            console.log('Received new order:', order);
            setPlacedOrder(order);
        });

        socket.current.on('connect_error', (error) => {
            console.error('WebSocket connection error:', error);
        });

        return () => {
            console.log('Disconnecting WebSocket...');
            socket?.current?.disconnect();
        };
    }, []);

    return (
        <PlacedOrderContext.Provider value={{ placedOrder }}>
            {children}
        </PlacedOrderContext.Provider>
    )
}

const usePlacedOrder = () => {
    return useContext(PlacedOrderContext);
}

export { PlacedOrderContextProvider, usePlacedOrder };
