import { IOrderItemPayload, ITableOrder } from "../../types";

export const PlacedOrderCard = ({order}: {order: ITableOrder}) => {
    if (!order || !order.table || !order.itemList?.length) {
        return null;
    }

    const formatItemDisplay = (item: IOrderItemPayload) => {
        return `${item.name}${item.notes ? ` (${item.notes}) `: ''}: ${item.quantity}`
    }
    
    return (
        <div className="bg-turquoise p-3 m-1">
            <h1 className="mb-3 text-2xl">Meja {order.table}</h1>
            {order.itemList.map(item => (
                <div key={item.uid}>
                    {formatItemDisplay(item)}
                </div>
            ))}
        </div>
    )
}