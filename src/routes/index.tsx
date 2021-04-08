import React from 'react';
import {NavigationContainer, NavigationContainerRef} from '@react-navigation/native';
import { connect } from 'react-redux';
import StackNavigator from './stackNavigator'
import { enableScreens } from 'react-native-screens';

export const navigationRef = React.createRef<NavigationContainerRef>() 
//as React.MutableRefObject<>

enableScreens();

export const Routes = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )

}

const mapStateToProps = (state: any) => state

  
export default connect(mapStateToProps, {})(Routes);