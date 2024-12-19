import { usePlacedOrder } from "../home/PlacedOrderContext";

export const OrderList = () => {
    const {placedOrder} = usePlacedOrder();

    return (
        <div>
            <h1>Dishes List</h1>
            {JSON.stringify(placedOrder)}
        </div>
    );
}