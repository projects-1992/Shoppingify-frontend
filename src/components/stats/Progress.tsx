import { motion } from 'framer-motion'
import React from 'react'

interface ProgressProps {
    value: number
    colorClass: string
}

const Progress = ({ value, colorClass }: ProgressProps) => {
    return (
        <div className="relative w-full h-2 rounded-12 bg-gray-progress">
            <motion.div
                style={{ width: `0` }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 1 }}
                className={`absolute left-0 top-0 bottom-0 rounded-12 ${colorClass}`}
            ></motion.div>
        </div>
    )
}

export default Progress
