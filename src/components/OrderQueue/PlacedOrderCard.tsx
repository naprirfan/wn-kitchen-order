import { IOrderItemPayload, ITableOrder } from "../../types";
import { AcceptOrderButton } from "./AcceptOrderButton";

export const PlacedOrderCard = ({order}: {order: ITableOrder}) => {
    if (!order || !order.table || !order.itemList?.length) {
        return null;
    }

    const formatItemDisplay = (item: IOrderItemPayload) => {
        return `${item.name}${item.notes ? ` (${item.notes}) `: ''}: ${item.quantity}`
    }
    
    return (
        <div className="bg-turquoise p-3 m-1">
            <div className="grid grid-cols-2">
                <h1 className="mb-3 text-2xl">Meja {order.table}</h1>
                <AcceptOrderButton tableNumber={order.table} />
            </div>
            <div>
                {order.itemList.map(item => (
                    <div key={item.uid} className="text-xl py-1">
                        {formatItemDisplay(item)}
                    </div>
                ))}
            </div>
        </div>
    )
}