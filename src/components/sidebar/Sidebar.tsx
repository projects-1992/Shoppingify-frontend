import React from 'react'
import { useRecoilValue, RecoilState, RecoilValue } from 'recoil'
import {
    sidebarState,
    ADD_SHOPPING_LIST,
    ADD_NEW_ITEM,
    SHOW_SHOPPING_LIST,
    SHOW_ITEM,
} from '../../global-state/atoms'
// Libs
import ShoppingList from '../shopping-list/ShoppingList'
import AddItemSidebar from './AddItemSidebar'
import ShowItemSidebar from './ShowItemSidebar'

/**
 * Sidebar of the app, displays shopping list
 */
function Sidebar() {
    const sidebarType = useRecoilValue(sidebarState)

    const selectSidebar = () => {
        switch (sidebarType) {
            case ADD_SHOPPING_LIST:
                return <ShoppingList />
            case ADD_NEW_ITEM:
                return <AddItemSidebar />
            case SHOW_ITEM:
                return <ShowItemSidebar />
            default:
                return <ShoppingList />
        }
    }

    return (
        <div
            className={`w-1/3 ${
                sidebarType === ADD_SHOPPING_LIST ||
                sidebarType === SHOW_SHOPPING_LIST
                    ? 'bg-primary-light'
                    : 'bg-white'
            } p-12`}
        >
            {console.log('sidebarType', sidebarType)}
            {/* <ShoppingList /> */}
            {selectSidebar()}
        </div>
    )
}

export default Sidebar
