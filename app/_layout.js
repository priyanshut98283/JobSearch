import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";

export const unstable_settings = {
  initialRouteName: "register",
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      initialRouteName="register"
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen
        name="home"
        options={{
          headerStyle: styles.container,
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        options={{
          headerStyle: styles.container,
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        options={{
          headerStyle: styles.container,
        }}
      />
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Layout;
