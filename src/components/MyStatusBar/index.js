import React from 'react'
import { View, StatusBar, SafeAreaView } from 'react-native'
import { styles } from './styles'

export default function MyStatusBar ({ backgroundColor, ...props }) {
    return (
        <View style={[styles.statusBar, { backgroundColor }]}>
            <SafeAreaView>
                <StatusBar translucent backgroundColor={backgroundColor} {...props} />
            </SafeAreaView>
        </View>
    )
}
