import CheckoutItem from "../../../components/organisms/CheckoutDetail/CheckoutItem";
import CheckoutPaymentDetail from "../../../components/organisms/CheckoutDetail/CheckoutPaymentDetail";
import CheckoutPurchaseDetail from "../../../components/organisms/CheckoutDetail/CheckoutPurchaseDetail";

export default function TransactionsDetail() {
    return (
        <section className="transactions-detail overflow-auto">


            <main className="main-wrapper">
                <div className="ps-lg-0">
                    <h2 className="text-4xl fw-bold color-palette-1 mb-30">Details #GG001</h2>
                    <div className="details">
                        <div className="main-content main-content-card overflow-auto">
                            <section className="checkout mx-auto">
                                <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                                    <div className="game-checkout d-flex flex-row align-items-center">
                                        <div className="pe-4">
                                            <div className="cropped">
                                                <img src="/img/Thumbnail-3.png" width="200" height="130"
                                                    className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="fw-bold text-xl color-palette-1 mb-10">Mobile Legends:<br /> The New
                                                Battle 2021</p>
                                            <p className="color-palette-2 m-0">Category: Mobile</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="fw-medium text-center label pending m-0 rounded-pill">Pending</p>
                                    </div>
                                </div>
                                <hr />
                                <CheckoutPurchaseDetail
                                    gameID="mushashi"
                                    orderID="123123"
                                    item="200 Gold"
                                    price={500000} />
                                <CheckoutPaymentDetail
                                    accountName="Masayoshi Angga Zero"
                                    paymentType="Worldwide Transfer"
                                    bankName="Mandiri"
                                    bankAccountName="PT Store GG Indonesia"
                                    accountNumber="1800-9090-2021" />

                                <div className="d-md-block d-flex flex-column w-100">
                                    <a className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg" href="#"
                                        role="button">WhatsApp ke Admin</a>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}
