interface CheckoutPurchaseDetailProps {
    gameID: string,
    orderID: string,
    item: string,
    price: number,
}
export default function CheckoutPurchaseDetail(props: CheckoutPurchaseDetailProps) {
    const { gameID, orderID, item, price } = props;
    return (
        <div className="purchase pt-md-50 pt-30">
            <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
            <p className="text-lg color-palette-1 mb-20">Your Game ID <span
                className="purchase-details">{gameID}</span></p>
            <p className="text-lg color-palette-1 mb-20">Order ID <span className="purchase-details">#{orderID}</span></p>
            <p className="text-lg color-palette-1 mb-20">Item <span className="purchase-details">{item}</span></p>
            <p className="text-lg color-palette-1 mb-20">Price <span className="purchase-details">Rp {new Intl.NumberFormat("de-DE").format(price)}</span></p>
            <p className="text-lg color-palette-1 mb-20">Tax (10%) <span className="purchase-details">Rp {new Intl.NumberFormat("de-DE").format(getTax(price))}</span>
            </p>
            <p className="text-lg color-palette-1 mb-20">Total <span className="purchase-details color-palette-4">Rp {new Intl.NumberFormat("de-DE").format(getTotal(price))}</span></p>
        </div>
    )
}


function getTax(price: number) {
    return price * 0.1;
}

function getTotal(price: number) {
    return price + getTax(price);
}