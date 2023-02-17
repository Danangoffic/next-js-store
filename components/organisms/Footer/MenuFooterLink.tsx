interface ListMenuProps {
    href?: string,
    title: string
}
export default function MenuFooterLink(props: Partial<ListMenuProps>) {
    const { href = "/", title } = props;
    return (
        <li className="mb-6">
            <a href={href} className="text-lg color-palette-1 text-decoration-none">{title}</a>
        </li>
    )
}
