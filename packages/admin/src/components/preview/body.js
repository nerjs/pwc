import React from 'react'
import PreviewLoading from './loading'
import AlertError from '../alert/error'
import TitlePreview from './title'
import Tabs from './tabs'
import usePreview from './usePreview'

const BodyPreview = ({ defTab, ...props }) => {
    const { loading, error, item, deleteItem } = usePreview(props)

    if (loading) return <PreviewLoading />
    if (error) return <AlertError>{error}</AlertError>

    return (
        <>
            <TitlePreview
                title={item.title}
                id={item.id}
                point={item.point}
                deleteItem={deleteItem}
            />
            <Tabs {...item} defTab={defTab || 'map'} />
        </>
    )
}

export default BodyPreview
