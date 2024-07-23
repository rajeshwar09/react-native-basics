import { View } from "react-native";
import { StyleSheet } from "react-native";

// Importing Header, Footer
import LittleLemonHeader from '../components/module1/LittleLemonHeader';
import LittleLemonFooter from '../components/module1/LittleLemonFooter';
import WelcomeScreen from '../components/module1/WelcomeScreen';
import MenuItems from '../components/module2/MenuItems';
import MenuItemsSection from '../components/module2/MenuItemsSection';
import LittleLemonWelcomeText from '../components/module2/LittleLemonWelcomeText';
import LoginScreen from '../components/module2/LoginScreen';
import ImageExample from '../components/module3/ImageExample';
import WelcomeScreen3 from '../components/module3/WelcomeScreen';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        {/* <WelcomeScreen /> */}
        {/* <MenuItems /> */}
        {/* <MenuItemsSection /> */}
        {/* <LittleLemonWelcomeText /> */}
        {/* <LoginScreen /> */}
        {/* <ImageExample /> */}
        <WelcomeScreen3 />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});