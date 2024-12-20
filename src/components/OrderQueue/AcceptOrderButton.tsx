export const AcceptOrderButton = ({tableNumber}: {tableNumber: number}) => {
    const handleClick = () => {
        console.log('accept tableNumber', tableNumber);
    }

    return (
        <button className="p-1 underline" type="button" onClick={handleClick}>
            Accept
        </button>
    )
}