import { View, Text, Image, StatusBar, Pressable } from "react-native";
import React, { useState } from "react";
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import DropDownMenu from "./DropDownMenu";
import AnimatedDropDownMenu from "./AnimatedDropDownMenu";

const CustomDrawer = (props) => {
    const [screen, setScreen] = useState("Home");
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <View style={{ flex: 1, paddingVertical: StatusBar.currentHeight }}>
            <View
                style={{
                    borderBottomWidth: 1,
                    borderColor: "#ccc",
                    flexDirection: "row",
                    flex: 0.15,
                    alignItems: "center",
                }}
            >
                <Pressable
                    onPress={() => props.navigation.navigate("Profile")}
                    style={{
                        height: 50,
                        width: 50,
                        borderRadius: 25,
                        marginLeft: "10%",
                        marginRight: 10,
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
                <View>
                    <Text style={{ fontWeight: "bold" }}>Shahadat Robin</Text>
                    <Text style={{ fontSize: 12, color: "#858080" }}>
                        Grower
                    </Text>
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                {/* <DrawerItemList {...props} /> */}
                <DrawerItem
                    label={"Home"}
                    onPress={() => {
                        props.navigation.navigate("Home");
                        setScreen("Home");
                    }}
                    activeTintColor="white"
                    activeBackgroundColor="#4CAF50"
                    focused={"Home" === screen}
                />

                <View style={{ marginHorizontal: 8 }}>
                    <TouchableOpacity
                        onPress={() => setToggleMenu(!toggleMenu)}
                        activeOpacity={0.7}
                        style={{
                            // marginHorizontal: 16,
                            padding: 8,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            borderRadius: 4,
                        }}
                    >
                        <Text>Toggle Menu </Text>
                        {toggleMenu ? (
                            <Ionicons
                                name="chevron-down"
                                size={22}
                                color="black"
                            />
                        ) : (
                            <Ionicons
                                name="chevron-forward"
                                size={22}
                                color="black"
                            />
                        )}
                    </TouchableOpacity>

                    {toggleMenu && (
                        <View style={{ marginLeft: "4%" }}>
                            <DrawerItem
                                label={"SubMenu1"}
                                onPress={() => {
                                    props.navigation.navigate("SubMenu1");
                                    setScreen("SubMenu1");
                                }}
                                activeTintColor="white"
                                activeBackgroundColor="#4CAF50"
                                focused={"SubMenu1" === screen}
                            />
                            <DrawerItem
                                label={"SubMenu2"}
                                onPress={() => {
                                    props.navigation.navigate("SubMenu2");
                                    setScreen("SubMenu2");
                                }}
                                activeTintColor="white"
                                activeBackgroundColor="#4CAF50"
                                focused={"SubMenu2" === screen}
                            />
                        </View>
                    )}
                </View>
                <AnimatedDropDownMenu label={"Main Menu"}>
                    <DrawerItem
                        label={"SubMenu1"}
                        onPress={() => {
                            props.navigation.navigate("SubMenu1");
                            setScreen("SubMenu1");
                        }}
                        activeTintColor="white"
                        activeBackgroundColor="#4CAF50"
                        focused={"SubMenu1" === screen}
                    />
                    <DrawerItem
                        label={"SubMenu2"}
                        onPress={() => {
                            props.navigation.navigate("SubMenu2");
                            setScreen("SubMenu2");
                        }}
                        activeTintColor="white"
                        activeBackgroundColor="#4CAF50"
                        focused={"SubMenu2" === screen}
                    />
                </AnimatedDropDownMenu>
                <DrawerItem
                    label={"Inventory"}
                    onPress={() => {
                        props.navigation.navigate("Inventory");
                        setScreen("Inventory");
                    }}
                    activeTintColor="white"
                    activeBackgroundColor="#4CAF50"
                    focused={"Inventory" === screen}
                />
            </DrawerContentScrollView>
        </View>
    );
};

export default CustomDrawer;
