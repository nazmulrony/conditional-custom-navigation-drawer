import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from "react-native-reanimated";

const AnimatedDropDownMenu = ({ label, children }) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const progress = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: progress.value,
        };
    }, []);

    const dynamicHeight = children.length;
    // console.log(dynamicHeight);

    const slideIn = () => {
        progress.value = withTiming(55 * dynamicHeight, { duration: 300 });
    };
    const slideOut = () => {
        progress.value = withTiming(0, { duration: 300 });
    };
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
                    if (toggleMenu) {
                        slideOut();
                    } else {
                        slideIn();
                    }
                }}
                style={{
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

            {/* {toggleMenu && ( */}
            <Animated.View style={[{ marginLeft: "4%" }, animatedStyle]}>
                {children}
            </Animated.View>
            {/* )} */}
        </View>
    );
};

export default AnimatedDropDownMenu;
