import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { ResultType } from "../../lib/definitions";

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
  resultado: ResultType;
};

// Create Document Component
const DocumentTemplate = ({ nombre, apellido, resultado }: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.title}>RESULTADO TEST VOCACIONAL</Text>
      </View>
      <View style={styles.personalDetails}>
        <Text>
          {nombre} {apellido}
        </Text>
      </View>
      <View>
        <Text style={styles.subtitle}>{resultado.titulo}</Text>
        <Text style={styles.paragraph}>{resultado.description}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.subtitle}>¿De qué se trata este test?</Text>
        <Text style={styles.paragraph}>
          Este test es una herramienta de orientación vocacional diseñada para
          ayudar a los estudiantes a identificar sus intereses y preferencias
          profesionales. Consiste en una serie de actividades que los
          participantes deben evaluar marcando si les interesan o no. Al
          finalizar, los resultados permiten determinar las áreas de mayor
          interés, facilitando la búsqueda de carreras alineadas con sus
          inclinaciones. Test elaborado por las psicólogas Malca de Goldenberg y
          Magali Merchán
        </Text>
      </View>
      <View style={styles.dateAndTime}>
        <Text>Fecha y hora: {new Date().toLocaleString()}</Text>
      </View>
    </Page>
  </Document>
);

export default DocumentTemplate;
