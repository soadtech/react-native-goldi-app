import React from 'react'
import { View, Text } from 'react-native'
import Location from '../../components/Location'
import MyStatusBar from '../../components/MyStatusBar'
import { colors, fonts } from '../../utils/theme'

export default function Home () {
    return (
        <View style={{ flex: 1 }}>
            <MyStatusBar backgroundColor={colors.white} barStyle="dark-content" />
            <View style={{ paddingHorizontal: 20, backgroundColor: colors.white, flex: 1 }}>
                <View>
                    <Text>Explore</Text>
                    <Location location='Barranquilla, Col' />
                </View>
            </View>
        </View>
    )
}
