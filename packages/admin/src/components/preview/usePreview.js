import { useState, useCallback, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import getItemGql from './gql/getItem.gql'
import deleteItemGql from './gql/deleteItem.gql'

const getError = (removedId, qe, de, qd, dd, l) => {
    if (removedId) return `Item ID:${removedId} was deleted!`
    if (qe) return qe.message
    if (de) return de.message
    if (!l && !qd) return 'Empty result'
}

export default ({ id, onRemove }) => {
    const [deleteError, setDeleteError] = useState(null)
    const [removedId, setRemovedId] = useState(null)

    const { loading: queryLoading, error: queryError, data: queryData } = useQuery(getItemGql, {
        variables: { id },
    })

    const [deleteItem, { loading: deleteLoading, called, data: deleteData, ...f }] = useMutation(
        deleteItemGql,
        { variables: { id } },
    )

    const handleDeleteItem = useCallback(async () => {
        if (!id) return
        const localId = id
        if (!confirm(`Remove ID:${localId}`)) return
        try {
            await deleteItem()
            if (id === localId) {
                setRemovedId(localId)
                onRemove(id)
            }
        } catch (e) {
            setDeleteError(e)
        }
    }, [deleteItem, id, setDeleteError, setRemovedId])

    useEffect(() => {
        setDeleteError(null)
        setRemovedId(null)
    }, [id, setDeleteError, setRemovedId])

    return {
        loading: queryLoading || deleteLoading,
        error: getError(
            removedId,
            queryError,
            deleteError,
            queryData,
            deleteData,
            queryLoading || deleteLoading,
        ),
        item: queryData && queryData.previewItem,
        deleteItem: handleDeleteItem,
    }
}
