import React from 'react'
import { IcoLocation } from '../../assets/icons'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'

export default function Location ({ location }) {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} resizeMode='contain' source={IcoLocation} />
            <Text>{location}</Text>
        </View>
    )
}
