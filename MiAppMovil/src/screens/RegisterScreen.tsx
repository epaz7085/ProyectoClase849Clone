import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import ScreenWrapper from "../components/ScreenWrapper";
import { supabase } from "../services/supabaseClient";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!name.trim() || !phoneNumber.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Error", "Por favor completa todos los campos.");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert("Error", error.message);
      return;
    }

    if (data.user !== null) {
      Alert.alert("Éxito", "Usuario registrado correctamente.");
      navigation.navigate("Login" as never);
    }
  };

  return (
    <ScreenWrapper>
      <CustomInput
        placeholder={"Ingresa tu nombre"}
        value={name}
        onChange={setName}
      />
      <CustomInput
        type={"number"}
        placeholder={"Ingresa tu número de teléfono"}
        value={phoneNumber}
        onChange={setPhoneNumber}
      />
      <CustomInput
        type={"email"}
        placeholder={"micorreo@gmail.com"}
        value={email}
        onChange={setEmail}
      />
      <CustomInput
        type={"password"}
        placeholder={"Ingresa tu contraseña"}
        value={password}
        onChange={setPassword}
      />
      <CustomButton
        title={"Registrarse"}
        onPress={handleRegister}
        variant="primary"
      />
    </ScreenWrapper>
  );
}