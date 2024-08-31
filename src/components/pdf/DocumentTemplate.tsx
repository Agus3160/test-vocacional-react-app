import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Results } from "../../pages/vocational-test/data";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: "#fff",
    margin: 12,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  personalDetails: {
    flexDirection:"row",
    justifyContent:"space-between",
    width:"100%",
    margin: 12,
    fontSize: 12,
  },
});

type Props = {
  nombre: string;
  apellido: string;
  resultado: Results;
};

// Create Document Component
const DocumentTemplate = ({ nombre, apellido, resultado }: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.title}>RESULTADO TEST VOCACIONAL RIASEC</Text>
      </View>
      <View style={styles.personalDetails}>
        <Text>Fecha: {new Date().toLocaleDateString()}</Text>
        <Text>Nombre: {nombre}</Text>
        <Text>Apellido: {apellido}</Text>
      </View>
      <View >
        <Text style={styles.subtitle}>{resultado.title}</Text>
        <Text >{resultado.description}</Text>
        <Text>
          Carreras Relacionadas:
          {resultado.carrerasRelacionadas.map((career, index) => (
            <Text key={index}>- {career}</Text>
          ))}
        </Text>
      </View>
    </Page>
  </Document>
);

export default DocumentTemplate;
