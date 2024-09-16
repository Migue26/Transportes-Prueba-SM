import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getMarkersData } from "../services/firebaseUtils"; // Importa la función de lectura

export default function VerificarScreen() {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getMarkersData(); // Llama a la función que obtiene los datos
      if (data) {
        setMarkers(Object.values(data)); // Convierte los datos en un array
      }
    }

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {markers.length > 0 ? (
        markers.map((marker, index) => (
          <Text key={index}>
            {`Descripción: ${marker.description}, Color: ${marker.color}`}
          </Text>
        ))
      ) : (
        <Text>No hay marcadores disponibles.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
