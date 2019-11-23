import React, { useRef } from 'react'
import HeaderBlock from './header'
import HeaderTab from './tab'
import { home } from 'react-icons-kit/icomoon/home'
import MarginBlock from './margin'

const Header = () => {
    const headerRef = useRef()
    return (
        <>
            <MarginBlock coreDoc={headerRef} />
            <HeaderBlock ref={headerRef}>
                <HeaderTab title="home" link="/" icon={home} />
                <HeaderTab title="map" link="/map" />
                <HeaderTab title="add" link="/add" />
                <HeaderTab title="list" link="/list" />
            </HeaderBlock>
        </>
    )
}

export default Header
