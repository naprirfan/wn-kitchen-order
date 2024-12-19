import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { usePlacedOrder } from "../home/PlacedOrderContext";
import { PlacedOrderCard } from "./PlacedOrderCard";

export const OrderQueue = () => {
    const {placedOrder} = usePlacedOrder();

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <h1 className="text-bold text-3xl mb-3">Order Queue</h1>
            <div className="mb-3">
                <Carousel responsive={responsive}>
                    {Object.keys(placedOrder).map(key => <PlacedOrderCard key={key} order={placedOrder[key]} />)}
                </Carousel>
            </div>
        </>
    );
};
