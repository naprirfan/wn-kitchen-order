import { OrderQueue } from "../OrderQueue/OrderQueue";
import { PlacedOrderContextProvider } from "./PlacedOrderContext";

export const Home = () => (
    <PlacedOrderContextProvider>
        <div>
            <OrderQueue />
        </div>
    </PlacedOrderContextProvider>
)