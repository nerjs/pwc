import React from 'react'
import HeaderBlock from './header'
import HeaderTab from './tab'
import { home } from 'react-icons-kit/icomoon/home'
import { mapMarker } from 'react-icons-kit/fa/mapMarker'
import { listAlt } from 'react-icons-kit/fa/listAlt'
import { ic_note_add } from 'react-icons-kit/md/ic_note_add'
import MarginBlock from './margin'

const Header = () => {
    return (
        <>
            <MarginBlock height={32} />
            <HeaderBlock>
                <HeaderTab title="home" link="/" icon={home} loadName="home route" />
                <HeaderTab title="map" link="/map" icon={mapMarker} loadName="map route" />
                <HeaderTab title="add" link="/add" icon={ic_note_add} loadName="add route" />
                <HeaderTab title="list" link="/list" icon={listAlt} loadName="list route" />
            </HeaderBlock>
        </>
    )
}

export default Header
