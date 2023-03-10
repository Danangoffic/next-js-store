import Image from "next/image";
import Link from "next/link";

interface TransactionListProps {
    title: string,
    type: "Desktop" | "Mobile",
    item: string,
    price: number,
    status: "success" | "pending" | "failed",
    id: number
}
export default function TableRow(props: TransactionListProps) {
    const { id, title, type, item, price, status } = props;
    return (
        <tr data-category="pending" className="align-middle">
            <th scope="row">
                <Image className="float-start me-3 mb-lg-0 mb-3" src="/img/overview-1.png"
                    width="80" height="60" alt="thumbnail" />
                <div className="game-title-header">
                    <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
                    <p className="text-xs fw-normal text-start color-palette-2 m-0">{type}</p>
                </div>
            </th>
            <td>
                <p className="fw-medium color-palette-1 m-0">{item}</p>
            </td>
            <td>
                <p className="fw-medium color-palette-1 m-0">Rp {new Intl.NumberFormat("de-DE").format(price)}</p>
            </td>
            <td>
                <div>
                    <span className={`float-start icon-status ${status}`}></span>
                    <p className="fw-medium text-start color-palette-1 m-0 position-relative text-capitalize">
                        {status}</p>
                </div>
            </td>
            <td>
                <Link href={`/member/transactions/detail?id=${id}`}
                    className="btn btn-status rounded-pill text-sm">Details</Link>
            </td>
        </tr>
    )
}
