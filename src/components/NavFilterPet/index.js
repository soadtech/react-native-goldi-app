import React from 'react'
import { View } from 'react-native'
import { IcoCat, IcoDog } from '../../assets/icons'
import Pet from './Pet'

const FILTER_OPTIONS = [
    {
        id: 1,
        icon: IcoDog,
        name: 'Dogs',
        selected: true
    },
    {
        id: 2,
        icon: IcoCat,
        name: 'Cats',
        selected: false
    }
]
export default function NavFilterPet () {
    return (
        <View style={{ flexDirection: 'row' }}>
            {FILTER_OPTIONS.map(option => {
                return (
                    <Pet key={option.id} filter={option} />
                )
            })}
        </View>
    )
}
