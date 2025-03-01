import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer' ;

const DrawerRoot = () => {
  return (
    <GestureHandlerRootView style = {{flex : 1}}>
        <Drawer>
            <Drawer.Screen name="home" options={{title:"Home"}} />
            <Drawer.Screen name="notification" options={{title:"Notifications"}} />
        </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerRoot;