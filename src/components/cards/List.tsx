import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { MdChevronRight, MdDateRange } from 'react-icons/md'

/**
 * Move the interfaces to their own folder
 */
type ListProps = {
    list: List
}

type List = {
    id?: number
    name?: string
    status?: string
    user_id?: number
    created_at?: string
}

/**
 * TODO: Check if we have other icons with the same size to extract that in a class
 * or extends tailwind width/height properties
 * Icon style
 */
const iconStyle = {
    height: '20px',
    width: '20px',
}

/**
 * Displays list info, used on history page
 */
const List: React.FC<ListProps> = ({
    list: { id, name, status, created_at },
}) => {
    /**
     * Format the date
     */
    const formattedDate = (date: string): string => {
        return format(new Date(date), 'iii d.M.yyyy ')
    }

    /**
     * Set status color
     */
    const statusColor = (status: string): string => {
        switch (status) {
            case 'active':
                return 'primary'
            case 'completed':
                return 'secondary'
            case 'canceled':
                return 'danger'
            default:
                return 'active'
        }
    }

    return (
        <Link to={`/history/${id}`}>
            <div className="flex flex-col md:flex-row w-full p-4 shadow rounded-lg justify-between md:items-center mb-8 bg-white hover:bg-gray-extra-light transition-colors duration-300">
                {/* List name */}
                <div className="font-bold mb-2 md:mb-0">{name}</div>

                <div className="flex flex-row items-center md:w-1/2 justify-between md:justify-around">
                    {/* Icon + Date */}
                    <div className="flex items-center">
                        <MdDateRange
                            style={iconStyle}
                            className="text-gray-light mr-2"
                        />
                        <div className=" text-gray-light text-sm font-medium">
                            {formattedDate(created_at!)}
                        </div>
                    </div>
                    {/* Status */}
                    <div className="flex items-center justify-between">
                        <div
                            className={`border md:mx-2 lg:mx-4 rounded-lg border-${statusColor(
                                status!
                            )} px-2 text-${statusColor(status!)}`}
                        >
                            {status}
                        </div>
                        <MdChevronRight className="hidden md:block text-primary" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default List
