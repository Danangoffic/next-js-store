import MenuFooterLink from "./MenuFooterLink";

interface CategoryMenuFooterProps {
    title: string,
    listMenu: Array<Partial<ListMenuProps>>
}
interface ListMenuProps {
    href?: string,
    title: string
}
export default function CategoryMenuFooter(props: CategoryMenuFooterProps) {
    const { title, listMenu } = props;
    return (
        <div className="col-md-4 col-6 mb-lg-0 mb-25">
            <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
            <ul className="list-unstyled">
                {listMenu.map((item, index) => {
                    return (<MenuFooterLink href={item.href} title={item.title} key={index} />);
                })}
            </ul>
        </div>
    )
}
