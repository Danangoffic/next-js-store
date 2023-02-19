import SideBar from "../../../components/organisms/SideBar";
import TransactionsContent from "../../../components/organisms/TransactionsContent";

export default function Transactions() {
    return (
        <section className="transactions overflow-auto">

            <SideBar targetURI="transactions" />
            <TransactionsContent />
        </section>
    )
}
