import { Pressable, Image } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MarketPlace from "../screens/MarketPlace";
import Inventory from "../screens/Inventory";
import Auction from "../screens/Auction";
import AddProduct from "../screens/AddProduct";
import CustomDrawer from "./CustomDrawer";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import SubMenu1 from "../screens/SubMenu1";
import SubMenu2 from "../screens/SubMenu2";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const user = {
        name: "Shahadat Robin",
        email: "robin@corexlab.com",
        role: "grower",
    };
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={({ navigation }) => ({
                headerLeft: () => (
                    <Pressable
                        onPress={() => navigation.openDrawer()}
                        style={{
                            marginLeft: 16,
                            height: 40,
                            width: 40,
                            borderRadius: 20,
                            borderWidth: 2,
                            borderColor: "#4CAF50",
                            overflow: "hidden",
                        }}
                    >
                        <Image
                            source={require("../assets/images/person.webp")}
                            style={{
                                height: "100%",
                                width: "100%",
                            }}
                        />
                    </Pressable>
                ),
                sceneContainerStyle: { backgroundColor: "white" },
                headerStyle: { elevation: 0 },
                drawerActiveBackgroundColor: "#4CAF50",
                drawerActiveTintColor: "white",
            })}
        >
            {user.role === "grower" && (
                <>
                    <Drawer.Screen
                        name="MarketPlace"
                        component={MarketPlace}
                        options={{ title: "Market Place" }}
                    />
                    <Drawer.Screen name="Inventory" component={Inventory} />
                </>
            )}
            {user.role === "processor" && (
                <>
                    <Drawer.Screen name="Auction" component={Auction} />
                    <Drawer.Screen
                        name="AddProduct"
                        component={AddProduct}
                        options={{ title: "Add Product" }}
                    />
                </>
            )}
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="SubMenu1" component={SubMenu1} />
            <Drawer.Screen name="SubMenu2" component={SubMenu2} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
