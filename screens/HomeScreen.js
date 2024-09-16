import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

const logoSM =
  "https://scontent.flim3-2.fna.fbcdn.net/v/t39.30808-6/363405299_250435244602842_3821231174811993873_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF9u-CDj8mO0HsvGXqdM9FKAEphsEH7z08ASmGwQfvPT9s0Vs2OufAtLqINXDG9Gy_8BBKw2cjqbWgILCqOPEzp&_nc_ohc=ctiu6BdUUPUQ7kNvgGK4OCz&_nc_ht=scontent.flim3-2.fna&cb_e2o_trans=q&oh=00_AYC1o3C8ALi5eRE1g1BDi7uOKMHus6RyYvYA9OL6XrItHQ&oe=66DD037E";

export default function HomeScreen({ navigation }) {
  const handleAdminPress = () => {
    //Verificar Usuario
    Alert.prompt(
      "Admin login",
      "Please enter the admin password",
      (password) => {
        if (password === "your_password") {
          Alert.alert("Access Granted");
          navigation.navigate("Admin");
          //Naevgar a una pantalla de administración
        } else {
          Alert.alert("Access Denied");
        }
      },
      "secure-text",
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.adminButton} onPress={handleAdminPress}>
        <Text style={styles.buttonText}>Admin</Text>
      </TouchableOpacity>

      <Image source={{ uri: logoSM }} style={styles.image} />
      <Text style={styles.texto}>Bienvenido</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Verificar")}
      >
        <Text style={styles.buttonText}>Verificar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Paraderos")}
      >
        <Text style={styles.buttonText}>Paraderos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    padding: 10,
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  adminButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#006400", // verde oscuro
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  button: {
    backgroundColor: "#006400", //verde oscuro
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    width: 150,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
