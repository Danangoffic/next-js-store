interface MenuTopUpProps {
    id: string,
    value: number,
    price: number
}
export default function MenuTopUp(props: MenuTopUpProps) {
    const { id, value, price } = props;
    return (
        <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
            htmlFor={id}>
            <input className="d-none" type="radio" id={id} name="topup" value={value} />
            <div className="detail-card" >
                <div className="d-flex justify-content-between">
                    <p className="text-3xl color-palette-1 m-0"><span className="fw-medium">{value}</span>
                        Gold
                    </p>
                    <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                        <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <p className="text-lg color-palette-1 m-0">Rp {new Intl.NumberFormat("de-DE").format(price)}</p>
            </div>
        </label>
    )
}
