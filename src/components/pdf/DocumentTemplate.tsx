import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import {RIASECResults} from "../../lib/definitions";

const styles = StyleSheet.create({
  page: {
    padding: 32,
    backgroundColor: "#fff",
  },
  paragraph: {
    marginVertical: 10,
    lineHeight: 1.5,
    fontSize: 12,
    flexWrap: "wrap",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    flexWrap: "wrap",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,    
    flexWrap: "wrap",
  },
  personalDetails: {
    fontSize: 12,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  description: {
    width: "100%",
    marginVertical: 10,
    flexWrap: "wrap",
  },
  dateAndTime: {
    marginTop: 20,
    fontSize: 12,
    textAlign: "right",
  },
});

type Props = {
  nombre: string;
  apellido: string;
  resultado: RIASECResults;
};

// Create Document Component
const DocumentTemplate = ({ nombre, apellido, resultado }: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.title}>RESULTADO TEST VOCACIONAL RIASEC</Text>
      </View>
      <View style={styles.personalDetails}>
        <Text>{nombre} {apellido}</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>{resultado.title}</Text>
        <Text style={styles.paragraph}>{resultado.description}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.subtitle}>¿Qué es RIASEC?</Text>
        <Text style={styles.paragraph}>
          El modelo RIASEC, desarrollado por el psicólogo John Holland, clasifica las carreras y ocupaciones en seis tipos principales: Realista, Investigador, Artístico, Social, Emprendedor y Convencional. Cada tipo representa un conjunto de intereses y habilidades que ayudan a identificar las carreras que podrían ser más satisfactorias para una persona.
        </Text>
      </View>
      <View style={styles.dateAndTime}>
        <Text>Fecha y hora: {new Date().toLocaleString()}</Text>
      </View>
    </Page>
  </Document>
);

export default DocumentTemplate;
