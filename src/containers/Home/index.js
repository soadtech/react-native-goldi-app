import React from 'react'
import { View, Text } from 'react-native'
import MyStatusBar from '../../components/MyStatusBar'

export default function Home () {
    return (
        <View>
            <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
            <Text>Hola</Text>
        </View>
    )
}
