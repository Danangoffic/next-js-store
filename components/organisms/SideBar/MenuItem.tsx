import cx from 'classnames';
import Image from 'next/image'
import Link from 'next/link';

interface MenuItemProps {
    icon: string,
    active?: boolean,
    href: string,
    title: string
}
export default function MenuItem(props: Partial<MenuItemProps>) {
    const { icon = "", title, href = "/member", active = false } = props;
    const classnames = cx({
        'item': true,
        'mb-30': true,
        'active': active
    });
    return (
        <div className={classnames}>
            <Image className='icon me-3' src={`/icon/${icon}.svg`} width={25} height={25} alt={icon} />
            <p className="item-title m-0">
                <Link href={href} className="text-lg text-decoration-none">{title}</Link>
            </p>
        </div>
    )
}
