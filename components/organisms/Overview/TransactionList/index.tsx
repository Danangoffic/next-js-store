import TableRow from "./TableRow";

export default function TransactionList() {
    return (
        <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
            <div className="main-content main-content-table overflow-auto">
                <table className="table table-borderless">
                    <thead>
                        <tr className="color-palette-1">
                            <th className="text-start" scope="col">Game</th>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow title="Mobile Legend: The New Battle 2021" item="200 Gold" price={290000} type="Desktop" status="pending" image="overview-1.png" />
                        <TableRow title="Call of Duty: Modern Warfare" item="50 Gold" price={190000} type="Mobile" status="pending" image="overview-2.png" />
                        <TableRow title="Clash of Clans" item="500 Gold" price={390000} type="Desktop" status="failed" image="overview-3.png" />
                        <TableRow title="Valorant" item="120 Gold" price={490000} type="Desktop" status="success" image="overview-4.png" />
                        <TableRow title="Call of Duty: Modern Warfare" item="150 Gold" price={590000} type="Mobile" status="pending" image="overview-2.png" />
                    </tbody>
                </table>
            </div>
        </div>
    )
}
