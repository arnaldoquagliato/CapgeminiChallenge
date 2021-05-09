import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ParteUm from "../pages/ParteUm";
import ParteDois from "../pages/ParteDois";
import Welcome from "../pages/Welcome";


const stackRoutes = createStackNavigator();

const AppRoutes = () => (
    <stackRoutes.Navigator headerMode="none" initialRouteName="Welcome">

        <stackRoutes.Screen name="Welcome" component={Welcome}/>
        <stackRoutes.Screen name="ParteUm" component={ParteUm}/>
        <stackRoutes.Screen name="ParteDois" component={ParteDois}/>

    </stackRoutes.Navigator>
)

export default AppRoutes;