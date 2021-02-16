import React from 'react'
import {View, Text } from "react-native";
import { NavigationStackProp } from 'react-navigation-stack';

interface Props  {
    navigation: NavigationStackProp
}

const HomeScreen = ({ navigation }:Props) => {

    return (
        <View>
            <Text> Home Screen</Text>
        </View>
    )
}

export default HomeScreen

