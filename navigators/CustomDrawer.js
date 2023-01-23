import { View, Text, Image, StatusBar, Pressable } from "react-native";
import React from "react";
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props, role) => {
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
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    );
};

export default CustomDrawer;
