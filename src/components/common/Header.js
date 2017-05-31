// Import libreries for making a component
import React from 'react'
import { Text, View } from 'react-native'

// Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles
    const { headerText } = props
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        position: 'relative',
        backgroundColor: '#E8E8E8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 24
    }
}

// Make the component available to other parts of the app
export { Header }