import Image from "next/image";

interface DetailItemProps {
    thumbnail: string,
    title: string,
    desc: string,
    categoryGame: string,
    status: 'pending' | 'success' | 'failed'
}
export default function DetailItem(props: DetailItemProps) {
    const { thumbnail, title, categoryGame, status } = props;
    return (
        <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
            <div className="pe-4">
                <div className="cropped">
                    <Image src={thumbnail} width={200} height={130} className="img-fluid" alt="" />
                </div>
            </div>
            <div>
                <p className="fw-bold text-xl color-palette-1 mb-10">{title}</p>
                <p className="color-palette-2 m-0">Category: {categoryGame}</p>
            </div>
            <div>
                <p className={`fw-medium text-center label ${status} m-0 rounded-pill text-capitalize`}>${status}</p>
            </div>
        </div>
    )
}
