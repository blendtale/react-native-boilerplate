import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import {Loading} from '@src/components/sections'
import { connect } from 'react-redux';
import { IState } from '@src/types/redux';
import { Dimensions } from "react-native";
import {
    Home
} from '@src/screens'
import {StackParam} from '@src/types/routes'

//TODO: Change any from here
interface Props {
    reviews: any;
}

interface UniversalRouteProps {
    state: any;
    [key: string]: any;
  }
  


//TODO Change any from here
const ReviewStack = createStackNavigator<StackParam>()


const ReviewScreen = ({ state }: UniversalRouteProps) => {
    // const { loading, data, error } = state;
    let loading, error = false
    if (loading) {
        return <Loading />;
      } else if (error) {
        return (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
            }}
          >
           <Text> Sorry, Something went wrong </Text>
          </View>
        );
    } else {
        return (  
        <ReviewStack.Navigator initialRouteName="home" screenOptions={{
          headerShown: false
        }}>
            <ReviewStack.Screen name="home" component={Home}/>
        </ReviewStack.Navigator>
        )
    }
}


export const Routes = ({reviews}: Props) => {
    return (
        <NavigationContainer>
            <ReviewScreen state={reviews}/>
        </NavigationContainer>
    )

}

const mapStateToProps = (state: any) => state

  
export default connect(mapStateToProps, {})(Routes);