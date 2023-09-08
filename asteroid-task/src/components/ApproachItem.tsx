import React from 'react';
import { type ApproachData } from '../utils/types'

type Props = {
    item: ApproachData
}

const ApproachItem = ({ item }: Props) => {

    return (
        <tr className='text-xs text-center md:text-base'>
            <td className='border py-1'>
                {item.orbiting_body}
            </td>
            <td className='border py-1'>
                {Math.round(+item.relative_velocity.kilometers_per_hour)}
            </td>
            <td className='border py-1'>
                {Math.round(+item.miss_distance.kilometers)}
            </td>
            <td className='border py-1'>
                {item.close_approach_date}
            </td>
        </tr>

    )
}

export default ApproachItem