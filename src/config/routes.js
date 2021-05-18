import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import { Login, Home, Settings } from "../screens";

function Routes() {
  const Stack = createStackNavigator();
  const Tabs = createBottomTabNavigator();

  function TabsStack() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen
          name="HomeScreen"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Icon name="home-outline" color={color} size={focused ? size : 20} />
            ),
            tabBarLabel: "Home", 
          }}
        />
        <Tabs.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Icon name="settings-outline" color={color} size={focused ? size : 20} />
            ),
          }}
        />
      </Tabs.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Home"
        component={TabsStack}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
