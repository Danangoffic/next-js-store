import Image from "next/image";
import Link from "next/link";
import CheckoutConfirmation from "../components/organisms/CheckoutConfirmation";
import CheckoutDetail from "../components/organisms/CheckoutDetail";
import CheckoutItem from "../components/organisms/CheckoutDetail/CheckoutItem";

export default function Checkout() {
    const purchase = {
        gameID: "masayoshizero",
        orderID: "GG001",
        item: "250 Diamonds",
        price: 42280500
    }
    const payment = {
        accountName: "Masayoshi Angga Zero",
        paymentType: "Worldwide Transfer",
        bankName: "Mandiri",
        bankAccountName: "PT Store GG Indonesia",
        accountNumber: "1800-9090-2021"
    }
    return (
        <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
            <div className="container-fluid">
                <div className="logo text-md-center text-start pb-50">
                    <Link className="" href="/">
                        <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
                    </Link>
                </div>
                <div className="title-text pt-md-50 pt-0">
                    <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
                    <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
                </div>
                <CheckoutItem thumbnail="/img/Thumbnail-3.png" title="Mobile Legends" desc="The New Battle 2021" categoryGame="Mobile" />
                <hr />
                <CheckoutDetail purchaseDetail={purchase} paymentDetail={payment} />
                <CheckoutConfirmation />
            </div>
        </section>
    )
}