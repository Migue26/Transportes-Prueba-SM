import { db } from "./firebaseConfig"; // Asegúrate de ajustar la ruta correcta
import { collection, getDocs } from "firebase/firestore";

const fetchMarkers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "markers"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  } catch (error) {
    console.error("Error al obtener los marcadores: ", error);
  }
};

export default fetchMarkers;
