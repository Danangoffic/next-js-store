import Image from "next/image";

interface TopUpItemProp {
    type: "desktop" | "mobile",
    title: string,
    categoryGame: string,
    thumbnail?: string
}
export default function TopUpItem(props: Partial<TopUpItemProp>) {
    const { type, title, categoryGame, thumbnail = "/" } = props;
    if (type === 'desktop') {
        return (
            <div className="pb-50 d-md-block d-none">
                <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">{title}</h2>
                <p className="text-lg color-palette-2 mb-0">Category: {categoryGame}</p>
            </div>
        )
    } else {
        return (
            <div className="row align-items-center">
                <div className="col-md-12 col-4">
                    <Image src={thumbnail} width={280} height={380} className="img-fluid" alt="Thumbnail" />
                </div>
                <div className="col-md-12 col-8 d-md-none d-block">
                    <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">{title}</h2>
                    <p className="text-sm color-palette-2 text-start mb-0">Category: {categoryGame}</p>
                </div>
            </div>
        )
    }
}
