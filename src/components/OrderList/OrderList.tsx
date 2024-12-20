import { ITableOrder } from "../../types";
import { usePlacedOrder } from "../home/PlacedOrderContext";
import { OrderItemCard } from "./OrderItemCard";

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
                <h2 className="text-bold text-3xl mb-3">Dish List</h2>
                <OrderItemCard dishMap={dishMap} />
                {Object.keys(dishWithNotes).length && (
                    <>
                        <hr />
                        <h2 className="text-bold text-3xl mb-3 my-3">Dish With Notes</h2>
                    </>
                )}
                <OrderItemCard dishMap={dishWithNotes} />
            </div>
        )
    }

    return (
        <div>
            <div>
                {getOrdersGroupByDishes()}
            </div>
        </div>
    );
}