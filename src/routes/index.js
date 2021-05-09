import React from "react"
import { NavigationContainer } from "@react-navigation/native";

import AppRoutes from "./stackRoutes";

const Routes = () => (
    <NavigationContainer>
        <AppRoutes />
    </NavigationContainer>
)

export default Routes;