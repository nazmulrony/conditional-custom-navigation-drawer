import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const PrimaryButton = ({ style, onPress, children }) => {
    return (
        <View style={styles.root}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <View style={[styles.buttonContainer, style]}>
                    <Text style={styles.buttonText}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        // borderWidth: 1,
        // width: "100%",
    },
    buttonContainer: {
        backgroundColor: "#4CAF50",
        padding: 10,
        borderRadius: 4,
    },
    pressed: {
        opacity: 0.75,
    },
    buttonText: {
        fontSize: 12,
        textAlign: "center",
        color: "white",
    },
});
