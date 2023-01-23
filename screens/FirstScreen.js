import { View, Text } from "react-native";
import React from "react";
import PrimaryButton from "../UI/PrimaryButton";

const FirstScreen = ({ navigation }) => {
    return (
        <View
            style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
        >
            <PrimaryButton
                style={{ width: 180 }}
                onPress={() => navigation.navigate("DrawerNavigator")}
            >
                Click to Proceed
            </PrimaryButton>
        </View>
    );
};

export default FirstScreen;
