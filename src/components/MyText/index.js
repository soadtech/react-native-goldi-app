import React from 'react'
import { Text } from 'react-native'
import { styles } from './styles'

export default function MyText ({ children, customStyles, size = 16 }) {
    return (
        <Text style={[styles.text, { ...customStyles, fontSize: size }]}>{children}</Text>
    )
}
