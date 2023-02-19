interface CheckoutPaymentDetailProps {
    accountName: string,
    paymentType: string,
    bankName: string,
    bankAccountName: string,
    accountNumber: string
}
export default function CheckoutPaymentDetail(props: CheckoutPaymentDetailProps) {
    const { accountName, paymentType, bankName, bankAccountName, accountNumber } = props;
    return (
        <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
            <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
            <p className="text-lg color-palette-1 mb-20">Your Account Name <span className="purchase-details">{accountName}</span></p>
            <p className="text-lg color-palette-1 mb-20">Type <span className="payment-details">{paymentType}</span>
            </p>
            <p className="text-lg color-palette-1 mb-20">Bank Name <span className="payment-details">{bankName}</span></p>
            <p className="text-lg color-palette-1 mb-20">Bank Account Name <span className="payment-details">{bankAccountName}</span></p>
            <p className="text-lg color-palette-1 mb-20">Bank Number <span className="payment-details">{accountNumber}</span>
            </p>
        </div>
    )
}
