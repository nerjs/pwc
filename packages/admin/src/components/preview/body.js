import React, { useCallback, useState } from 'react'
import PreviewLoading from './loading'
import AlertError from '../alert/error'
import TitlePreview from './title'
import Tabs from './tabs'
import usePreview from './usePreview'

const BodyPreview = ({ defTab, ...props }) => {
    const { loading, error, item, deleteItem } = usePreview(props)

    if (loading) return <PreviewLoading />
    if (error) return <AlertError txt={error} />

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
