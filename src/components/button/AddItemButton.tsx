import React, { useCallback } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { singleCategoryState } from '../../global-state/categoriesState'
import { currentItemState } from '../../global-state/currentItemState'
import { ADD_NEW_ITEM, sidebarState } from '../../global-state/sidebarState'
import useSidebarShow from '../../hooks/useSidebarShow'
import Button from './Button'

const AddItemButton = ({ category_id }: any) => {
    const singleCategory = useRecoilValue(singleCategoryState(category_id))
    const setCurrentItem = useSetRecoilState(currentItemState)
    const setSidebarType = useSetRecoilState(sidebarState)

    // Hooks
    const sidebarShow = useSidebarShow()

    const addAnItem = useCallback((category: string) => {
        setCurrentItem({
            name: '',
            note: '',
            image: '',
            categoryName: category,
        })
        setSidebarType(ADD_NEW_ITEM)
        sidebarShow()
    }, [])
    return (
        <Button
            modifier=""
            onClick={() => addAnItem(singleCategory.name)}
            className="text-gray"
        >
            Add an item
        </Button>
    )
}

export default AddItemButton
