import { ITableOrder } from "../../types";
import { usePlacedOrder } from "../home/PlacedOrderContext";

export const OrderList = () => {
    const {placedOrder} = usePlacedOrder();

    if (!Object.keys(placedOrder)?.length) {
        return null;
    }
    
    const getOrdersGroupByDishes = () => {
        const dishMap: Record<string, any> = {};
        const dishWithNotes: Record<string, any> = {};

        Object.values(placedOrder as Record<string, ITableOrder>).forEach(({ table, itemList }) => {
            itemList.forEach(({ name, quantity, notes }) => {
                if (notes) {
                    return;
                }

                if (!dishMap[name]) {
                    dishMap[name] = { total: 0, tables: new Set() };
                }

                dishMap[name].total += quantity;
                dishMap[name].tables.add(table);
            });
        });

        Object.values(placedOrder as Record<string, ITableOrder>).forEach(({ table, itemList }) => {
            itemList.forEach(({ name, quantity, notes }) => {
                if (!notes) {
                    return;
                }

                const key = `${name} (${notes})`;

                if (!dishWithNotes[key]) {
                    dishWithNotes[key] = { total: 0, tables: new Set() };
                }

                dishWithNotes[key].total += quantity;
                dishWithNotes[key].tables.add(table);
            });
        });



        return (
            <div>
                <ul className="my-3">
                    {Object.keys(dishMap).map(key =>
                    <li className="text-xl" key={key}>{key}: {dishMap[key].total} Porsi. (Meja {Array.from(dishMap[key].tables).join(", ")})</li>)}
                </ul>
                <hr />
                <ul className="my-3">
                    {Object.keys(dishWithNotes).map(key =>
                    <li className="text-xl" key={key}>{key}: {dishWithNotes[key].total} Porsi. (Meja {Array.from(dishWithNotes[key].tables).join(", ")})</li>)}
                </ul>
            </div>
        )
    }

    return (
        <div>
            <h1 className="text-bold text-3xl mb-3">Dish List</h1>
            <div>
                {getOrdersGroupByDishes()}
            </div>
        </div>
    );
}