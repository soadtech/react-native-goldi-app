import React from 'react'
import { IcoLocation } from '../../assets/icons'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import MyText from '../MyText'

export default function Location ({ location }) {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} resizeMode='contain' source={IcoLocation} />
            <MyText>{location}</MyText>
        </View>
    )
}
