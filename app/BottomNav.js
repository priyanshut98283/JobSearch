import "react-native-gesture-handler";
import HomeScreen from "./home";
import { StyleSheet, View, useColorScheme } from "react-native";
import * as React from "react";
import Icon from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "../components/screens/About";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../components/screens/Profile";
import Settings from "../components/screens/Settings";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ContactScreen from "../components/screens/Contact";
import Trending from "../components/screens/Trending";
import SoftwaredeveloperJobs from "../components/home/software-developer/software";
import FrontendJobs from "../components/home/frontend-developer/frontend";
import Backend from "../components/home/backend-developer/backend";
import Cybersecurity from "../components/home/cybersecurity/cyber";
import Fullstack from "../components/home/fullstack/fullstack";
import DataScientist from "../components/home/datascientist/datascientist";
import Mobile from "../components/home/mobile/mobile";
import Devops from "../components/home/devops/devops";
import UI from "../components/home/ui/ui";

const darkTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "seagreen",
    accent: "#FAFAFA",
    bgColor: "black",
  },
};

const lightTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "orange",
    accent: "#1A1A1A",
    bgColor: "slateblue",
  },
};

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#5c95ff", height: 100 },
        headerShadowVisible: false,
        headerShown: true,
        headerTintColor: "black",
        headerTitleStyle: {
          fontSize: 30,
        },
        // headerRight: () => (
        //   <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
        // ),
        headerTitle: "JobSearch",
        drawerIcon: ({ focused, size, color }) => (
          <Icon
            name={focused ? "menu" : "menu-outline"} // Replace with the correct icon name
            size={33}
            color={"purple"}
          />
        ),
        // drawerStyle: {
        //     width: 200,
        //   },
      }}
    >
      <Drawer.Screen name="Home" component={MyStack} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
    </Drawer.Navigator>
  );
}

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Bottom">
      <Stack.Screen
        name="Bottom"
        component={BottomNav}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="fullstack"
        component={Fullstack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ui"
        component={UI}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="datascientist"
        component={DataScientist}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="mobile"
        component={Mobile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="devops"
        component={Devops}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="frontend"
        component={FrontendJobs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="backend"
        component={Backend}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="cyber"
        component={Cybersecurity}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="software"
        component={SoftwaredeveloperJobs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "dodgerblue",
        tabBarStyle: { height: 65 },
        tabBarLabelStyle: {
          fontSize: 19,
          margin: 1,
          padding: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <View>
              <FontAwesome name="home" size={36} color="#f4a261" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon
                style={[{ color: "#ffbe0b" }]}
                size={36}
                name={"information-circle"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Trending"
        component={Trending}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon
                style={[{ color: "#06d6a0" }]}
                size={36}
                name={"trending-up"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{ color: "#aeb8fe" }]} size={36} name={"people"} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon
                style={[{ color: "#ff70a6" }]}
                size={36}
                name={"settings"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default function App() {
  const scheme = useColorScheme();
  return (
    <PaperProvider theme={scheme == "dark" ? darkTheme : lightTheme}>
      {/* <NavigationContainer> */}
      <MyDrawer />
      {/* </NavigationContainer> */}
    </PaperProvider>
  );
}
{
  /* <Icon name="train" size={30} color="#900" /> */
}

const styles = StyleSheet.create({});
