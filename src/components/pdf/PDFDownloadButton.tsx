import { PDFDownloadLink } from "@react-pdf/renderer";
import { FileDown, LoaderCircle } from "lucide-react";

type Props = {
  document: JSX.Element;
  filename: string;
};

export default function PDFDownloadButton({ document, filename }: Props) {
  return (
    <PDFDownloadLink document={document} fileName={filename}>
      {({ loading }) =>
        loading ? (
          <button className="hover:scale-105 bg-green-500 hover:bg-green-600 dark:bg-green-800 dark:hover:bg-green-700 dark:text-green-300 text-green-100 p-2 flex gap-1 rounded">
            <p className="hidden sm:block">Descargar PDF</p>
            <LoaderCircle className="animate-spin" />
          </button>
        ) : (
          <button
            title="Descargar PDF"
            className="hover:scale-105 bg-green-500 hover:bg-green-600 dark:bg-green-800 dark:hover:bg-green-700 dark:text-green-300 text-green-100 p-2 flex gap-1 rounded"
          >
            <p className="hidden sm:block">Descargar PDF</p>
            <FileDown />
          </button>
        )
      }
    </PDFDownloadLink>
  );
}
