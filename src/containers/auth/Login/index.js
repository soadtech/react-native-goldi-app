import React from 'react'
import { View, Text } from 'react-native'
import MyStatusBar from '../../../components/MyStatusBar'
import { colors } from '../../../utils/theme'

export default function Login () {
    return (
        <View>
            <MyStatusBar backgroundColor={colors.white} barStyle="dark-content" />
            <Text>Login</Text>
        </View>
    )
}
