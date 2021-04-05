import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { connect } from 'react-redux';





export const Routes = () => {
    return (
        <NavigationContainer>

        </NavigationContainer>
    )

}

const mapStateToProps = (state: any) => state

  
export default connect(mapStateToProps, {})(Routes);