import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons';

const Tabroot = () => {
  return (
    <Tabs>
        <Tabs.Screen name = "home" options = {{
          title : "Home",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
        }} />
        <Tabs.Screen name = "about" options = {{
          title : "About",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="info-circle" color={color} />
        }} />
        <Tabs.Screen name = "profile" options = {{
          title : "Profile",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-circle-o" color={color} />
        }} />
    </Tabs>
  );
};

export default Tabroot;

