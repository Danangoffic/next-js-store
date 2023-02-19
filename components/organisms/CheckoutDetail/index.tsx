import React from 'react'
import CheckoutPaymentDetail from './CheckoutPaymentDetail'
import CheckoutPurchaseDetail from './CheckoutPurchaseDetail'
interface CheckoutPurchaseDetailProps {
    gameID: string,
    orderID: string,
    item: string,
    price: number,
}
interface CheckoutPaymentDetailProps {
    accountName: string,
    paymentType: string,
    bankName: string,
    bankAccountName: string,
    accountNumber: string
}
interface CheckoutDetailProps {
    purchaseDetail: CheckoutPurchaseDetailProps,
    paymentDetail: CheckoutPaymentDetailProps
}
export default function CheckoutDetail(props: CheckoutDetailProps) {
    const { purchaseDetail, paymentDetail } = props;
    return (
        <>
            <CheckoutPurchaseDetail
                gameID={purchaseDetail.gameID}
                orderID={purchaseDetail.orderID}
                item={purchaseDetail.item}
                price={purchaseDetail.price} />
            <CheckoutPaymentDetail
                accountName={paymentDetail.accountName}
                paymentType={paymentDetail.paymentType}
                bankName={paymentDetail.bankName}
                bankAccountName={paymentDetail.bankAccountName}
                accountNumber={paymentDetail.accountNumber} />
        </>
    )
}
