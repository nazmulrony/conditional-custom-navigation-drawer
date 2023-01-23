import { Pressable, Image } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MarketPlace from "../screens/MarketPlace";
import Inventory from "../screens/Inventory";
import Auction from "../screens/Auction";
import AddProduct from "../screens/AddProduct";
import CustomDrawer from "./CustomDrawer";

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
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
