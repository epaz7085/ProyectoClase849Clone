import { Ionicons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View, Text } from "react-native";

type Props = {
    type: "text" | "email" | "password" | "number";
    placeholder: string;
    value: string;
    onChange: (text: string) => void;
}

export default function CustomInput ({type, placeholder, value, onChange}: Props){

    return(
        <View>
            <TextInput 
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
            />
                
            <TouchableOpacity>
                <Text>Icon Button</Text>
                <Ionicons name={"eye"} size={14} />
            </TouchableOpacity>
        </View>
    );
}