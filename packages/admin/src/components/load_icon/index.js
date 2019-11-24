import React from 'react'
import { Icon } from 'react-icons-kit'
import useLoading from '@data/loading'
import SpinIcon from './spin'

const LoadIcon = ({ name, icon, loadIcon, size }) => {
    if (!icon) return null
    if (!name) return <Icon icon={icon} size={size} />

    const LoadIcon = loadIcon || SpinIcon

    const [loading] = useLoading(name)
    return loading ? <LoadIcon size={size} /> : <Icon icon={icon} size={size} />
}

export default LoadIcon
