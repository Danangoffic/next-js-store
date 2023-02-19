import React from 'react'
import TableRow from './TableRow'

export default function LatestTransaction() {
    return (
        <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
            <div className="main-content main-content-table overflow-auto">
                <table className="table table-borderless">
                    <thead>
                        <tr className="color-palette-1">
                            <th className="" scope="col">Game</th>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody id="list_status_item">
                        <TableRow id={1} title="Mobile Legends: The New Battle 2021" price={290000} status="pending" item='200 Gold' type='Desktop' />
                        <TableRow id={2} title="Call of Duty: Modern" price={740000} status="success" item='550 Gold' type='Desktop' />
                        <TableRow id={3} title="Clash of Clans" price={290000} status="pending" item='200 Gold' type='Desktop' />
                        <TableRow id={4} title="Mobile Legends: The New Battle 2021" price={120000} status="failed" item='100 Gold' type='Mobile' />
                        <TableRow id={5} title="Mobile Legends: The New Battle 2021" price={290000} status="pending" item='200 Gold' type='Desktop' />
                        <TableRow id={6} title="Mobile Legends: The New Battle 2021" price={290000} status="pending" item='200 Gold' type='Desktop' />
                    </tbody>
                </table>
            </div>
        </div>
    )
}
