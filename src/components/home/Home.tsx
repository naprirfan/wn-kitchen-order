import { OrderList } from "../OrderList/OrderList";
import { OrderQueue } from "../OrderQueue/OrderQueue";
import { PlacedOrderContextProvider } from "./PlacedOrderContext";

export const Home = () => (
    <PlacedOrderContextProvider>
        <div>
            <OrderQueue />
            <OrderList />
        </div>
    </PlacedOrderContextProvider>
)