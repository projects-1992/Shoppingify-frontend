import React, { useEffect } from 'react'

// Global state
import { useRecoilState } from 'recoil'
import {
    ADD_NEW_ITEM,
    ADD_SHOPPING_LIST,
    SHOW_ITEM,
    SHOW_SHOPPING_LIST,
    sidebarState,
    sidebarHistoryState,
} from '../../global-state/sidebarState'

// Components
import ShoppingList from '../shopping-list/shopping-list__main/ShoppingList'
import AddItemSidebar from '../item-sidebars/AddItemSidebar'
import ShowItemSidebar from '../item-sidebars/ShowItemSidebar'
import AddNewItem from '../add-item/AddNewItemCTA'

/**
 * Sidebar of the app
 */
function Sidebar() {
    const [sidebarType, setSidebarType] = useRecoilState(sidebarState)
    const [sidebarHistory, setSidebarHistory] = useRecoilState(
        sidebarHistoryState
    )

    const selectSidebar = () => {
        switch (sidebarType) {
            case ADD_SHOPPING_LIST:
                return (
                    <>
                        <AddNewItem />
                        <ShoppingList />
                    </>
                )
            case ADD_NEW_ITEM:
                return <AddItemSidebar />
            case SHOW_ITEM:
                return <ShowItemSidebar />
            default:
                return (
                    <>
                        <AddNewItem />
                        <ShoppingList />
                    </>
                )
        }
    }

    useEffect(() => {
        setSidebarHistory((history) => [...history, sidebarType])
        console.log('sidebarHistory', sidebarHistory)
    }, [sidebarType])

    return (
        <div
            className={`w-sidebar relative flex-none overflow-y-auto ${
                sidebarType === ADD_SHOPPING_LIST ||
                sidebarType === SHOW_SHOPPING_LIST
                    ? 'bg-primary-light'
                    : 'bg-white'
            } p-12`}
        >
            {/* <ShoppingList /> */}
            {selectSidebar()}
        </div>
    )
}

export default Sidebar
