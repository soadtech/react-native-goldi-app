import { StyleSheet } from "react-native";
import { colors } from "../../../utils/theme";

export const _styles = (filter) => StyleSheet.create({
    container: {
        alignItems: 'center', marginRight: 20, marginTop: '10%'
    },
    containerIco: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 14,
        backgroundColor: filter.selected ? colors.primary : colors.white,
        borderWidth: filter.selected ? 0 : 0.5
    },
    containerName: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dot: {
        marginRight: 5,
        width: 10,
        height: 10,
        backgroundColor: colors.primary,
        borderRadius: 150
    }
})