interface CheckoutItemProps {
    thumbnail: string,
    title: string,
    desc: string,
    categoryGame: string
}

export default function CheckoutItem(props: CheckoutItemProps) {
    const { thumbnail, title, desc, categoryGame } = props;
    return (
        <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
            <div className="pe-4">
                <div className="cropped">
                    <img src={thumbnail} className="img-fluid" alt="" />
                </div>
            </div>
            <div>
                <p className="fw-bold text-xl color-palette-1 mb-10">{title}:<br /> {desc}</p>
                <p className="color-palette-2 m-0">Category: {categoryGame}</p>
            </div>
        </div>
    )
}
