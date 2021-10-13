import React from 'react'
import { View, Text } from 'react-native'
import Location from '../../components/Location'
import MyStatusBar from '../../components/MyStatusBar'
import MyText from '../../components/MyText'
import NavFilterPet from '../../components/NavFilterPet'
import { colors, fonts } from '../../utils/theme'

export default function Home () {
    return (
        <View style={{ flex: 1 }}>
            <MyStatusBar backgroundColor={colors.white} barStyle="dark-content" />
            <View style={{ paddingHorizontal: 20, backgroundColor: colors.white, flex: 1 }}>
                <View>
                    <MyText>Explore</MyText>
                    <Location location='Barranquilla, Col' />
                </View>

                <NavFilterPet />
            </View>
        </View>
    )
}
