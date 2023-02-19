import React from 'react'
import LatestTransaction from './LatestTransaction'

export default function TransactionsContent() {
    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
                <div className="mb-30">
                    <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
                    <h3 className="text-5xl fw-medium color-palette-1">Rp 4.518.000.500</h3>
                </div>
                <div className="row mt-30 mb-20">
                    <div className="col-lg-12 col-12 main-content">
                        <div id="list_status_title">
                            <a data-filter="*" href="#" className="btn btn-status rounded-pill text-sm btn-active me-3">All
                                Trx</a>
                            <a data-filter="success" href="#"
                                className="btn btn-status rounded-pill text-sm me-3">Success</a>
                            <a data-filter="pending" href="#"
                                className="btn btn-status rounded-pill text-sm me-3">Pending</a>
                            <a data-filter="failed" href="#" className="btn btn-status rounded-pill text-sm me-3">Failed</a>
                        </div>
                    </div>
                </div>
                <LatestTransaction />

            </div>
        </main>
    )
}
