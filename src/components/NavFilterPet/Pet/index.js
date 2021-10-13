import React from 'react'
import { View, Image } from 'react-native'
import { colors } from '../../../utils/theme'
import MyText from '../../MyText'
import { _styles } from './styles'

export default function Pet ({ filter }) {

    const styles = _styles(filter)
    return (
        <View style={styles.container}>
            <View style={styles.containerIco}>
                <Image style={{ width: 50, height: 50 }} resizeMode='contain' source={filter.icon} />
            </View>
            <View style={styles.containerName}>
                {filter.selected && (<View style={styles.dot}></View>)}
                <MyText>{filter.name}</MyText>
            </View>

        </View>
    )
}
