import { usePlacedOrder } from "../home/PlacedOrderContext";

export const OrderQueue = () => {
    const {placedOrder} = usePlacedOrder();

    return (
        <div>
            <h1>Order Queue</h1>
            {JSON.stringify(placedOrder)}
        </div>
    );
};
