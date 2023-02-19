import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MenuItem from './MenuItem'

interface SideBarProps {
    targetURI: 'member' | 'transactions' | 'messages' | 'cards' | 'rewards' | 'settings'
}
export default function SideBar(props: SideBarProps) {
    const { targetURI = "member" } = props;
    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <div className="user text-center pb-50 pe-30">
                    <Image src="/img/avatar-1.png" width="90" height="90" alt='avatar' className="img-fluid mb-20" />
                    <h2 className="fw-bold text-xl color-palette-1 m-0">Shayna Anne</h2>
                    <p className="color-palette-2 m-0">shayna@anne.com</p>
                </div>
                <div className="menus">
                    <MenuItem title='Overview' icon='overview' active={targetURI === 'member'} />
                    <MenuItem title='Transactions' icon='transaction' href='/member/transactions' active={targetURI === 'transactions'} />
                    <MenuItem title='Messages' icon='message' active={targetURI === 'messages'} />
                    <MenuItem title='Card' icon='card' active={targetURI === 'cards'} />
                    <MenuItem title='Rewards' icon='reward' active={targetURI === 'rewards'} />
                    <MenuItem title='Settings' icon='setting' href='/member/edit-profile' active={targetURI === 'settings'} />
                    <MenuItem title='Log Out' icon='logout' />


                </div>
                <div className="sidebar-footer pt-73 pe-30">
                    <div className="footer-card">
                        <div className="d-flex justify-content-between mb-20">
                            <Image src="/icon/step3.svg" width={50} height={50} alt="topup" />
                            <p className="fw-medium color-palette-1">Top Up &<br />
                                Be The Winner</p>
                        </div>
                        <Link className="btn btn-get-started w-100 fw-medium text-xs text-center text-white rounded-pill" href="/" role="button">Get Started</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
