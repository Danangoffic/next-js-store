import Image from "next/image";

interface TableRowProps {
    title: string,
    type: "Desktop" | "Mobile",
    item: string,
    price: number,
    status: "success" | "pending" | "failed",
    image: string
}
export default function TableRow(props: TableRowProps) {
    const { title, type, item, price, status, image } = props;
    return (
        <tr className="align-middle">
            <th scope="row">
                <Image className="float-start me-3 mb-lg-0 mb-3" src={`/img/${image}`}
                    width="80" height="60" alt="thumbnail game" loading="lazy" />
                <div className="game-title-header">
                    <p className="game-title fw-medium text-start color-palette-1 m-0" title="title game">{title}</p>
                    <p className="text-xs fw-normal text-start color-palette-2 m-0" title="type game">{type}</p>
                </div>
            </th>
            <td>
                <p className="fw-medium color-palette-1 m-0" title="Item purchased">{item}</p>
            </td>
            <td>
                <p className="fw-medium text-start color-palette-1 m-0" title="Price">Rp {new Intl.NumberFormat("de-DE").format(price)}</p>
            </td>
            <td>
                <div>
                    <span className={`float-start icon-status ${status}`} title="icon status"></span>
                    <p className="fw-medium text-start color-palette-1 m-0 position-relative text-capitalize" title="Status Label">{status}</p>
                </div>
            </td>
        </tr>
    )
}
