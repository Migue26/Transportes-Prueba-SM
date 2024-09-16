import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function ParaderosScreen() {
  const [markers, setMarkers] = useState([]);
  const [selectedColor, setSelectedColor] = useState("#FF0000"); // Color por defecto
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newMarker, setNewMarker] = useState(null);

  const handleLongPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setNewMarker({
      coordinate,
      color: selectedColor,
      description,
    });
    setShowModal(true);
  };

  const addMarker = () => {
    if (newMarker) {
      setMarkers([...markers, newMarker]);
      setNewMarker(null);
      setDescription("");
      setSelectedColor("#FF0000");
      setShowModal(false);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -15.47755,
          longitude: -70.12498,
          latitudeDelta: 0.04,
          longitudeDelta: 0.02,
        }}
        onLongPress={handleLongPress}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            pinColor={marker.color}
            title={marker.description}
          />
        ))}
      </MapView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Personaliza el Marcador</Text>
          <TextInput
            style={styles.input}
            placeholder="Descripción del marcador"
            value={description}
            onChangeText={setDescription}
          />
          <TextInput
            style={styles.input}
            placeholder="Color del marcador (#FF0000)"
            value={selectedColor}
            onChangeText={setSelectedColor}
          />
          <Button title="Agregar Marcador" onPress={addMarker} />
          <Button title="Cancelar" onPress={() => setShowModal(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 18,
    color: "white",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    width: "80%",
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
});
