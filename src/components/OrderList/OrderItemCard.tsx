export const OrderItemCard = ({dishMap}: {dishMap: Record<string, {total: number; tables: any}>}) => {
    return (
        <ul className="my-3">
            {Object.keys(dishMap).map(key => 
                <li key={key} className="p-3 even:bg-gray odd:bg-light w-[50%] text-xl flex">
                    <span className="flex-grow">{key}: {dishMap[key].total}</span>
                    <span>Meja {Array.from(dishMap[key].tables).join(", ")}</span>
                </li>
            )}
        </ul>
    )
}