import React from "react";
import { View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { Link } from "expo-router";
const FlechaNav = ({href}) =>{
    return (
        <View style={{ position: "absolute", top: 25, left: 10 }}>
            <Link href={href} asChild>
                <TouchableOpacity style={{ padding: 5 }}>
                    <MaterialCommunityIcons name="less-than" size={24} color="black" />
                </TouchableOpacity>
            </Link>
        </View>
    )
}; 
export default FlechaNav;