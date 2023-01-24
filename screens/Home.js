import { View, Text, Animated, Button } from "react-native";
import React, { useRef } from "react";

const Home = () => {
    const slideAnim = useRef(new Animated.Value(0)).current;
    // const  = slideAnim.
    const animatedWidth = slideAnim.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"],
    });

    const slideIn = () => {
        Animated.timing(slideAnim, {
            toValue: 100,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    };
    const slideOut = () => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    };
    return (
        <View>
            <Animated.View
                style={{
                    height: 100,
                    width: 100,
                    // transform: [{ translateX: slideAnim }],
                    backgroundColor: "#42c277",
                }}
            ></Animated.View>

            <Button title="click" onPress={slideIn} />
            <Button title="click" onPress={slideOut} />
            <Text>Home</Text>
        </View>
    );
};

export default Home;
