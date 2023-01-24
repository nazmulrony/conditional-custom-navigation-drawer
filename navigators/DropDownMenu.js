import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const DropDownMenu = ({ children, label }) => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <View
            style={{
                marginHorizontal: 8,
                overflow: "hidden",
            }}
        >
            <Pressable
                onPress={() => {
                    setToggleMenu(!toggleMenu);
                }}
                style={{
                    // marginHorizontal: 16,
                    padding: 8,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: 4,
                }}
            >
                <Text>{label} </Text>
                {toggleMenu ? (
                    <Ionicons name="chevron-down" size={22} color="black" />
                ) : (
                    <Ionicons name="chevron-forward" size={22} color="black" />
                )}
            </Pressable>

            {toggleMenu && (
                <View
                    style={{
                        marginLeft: "4%",
                    }}
                >
                    {children}
                </View>
            )}
        </View>
    );
};

export default DropDownMenu;
