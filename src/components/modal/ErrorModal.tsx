import { useNavigate } from "react-router-dom";
import Modal from "../ui/Modal";

type Props = {
  returnLocation: string;
  returnText: string;
  error: string;
};

export default function ErrorModal({ returnLocation, error, returnText }: Props) {

  const navigate = useNavigate();

  return (
    <Modal
      title="Error!"
      className="max-w-[300px] min-h-[200px] p-6 mx-4 sm:mx-0 gap-6 flex flex-col"
      icon="error"
    >
      <div className="flex text-gray-800 dark:text-gray-300 flex-col gap-6 items-center">
        <p>
          {error}
        </p>
        <button
          className="bg-blue-500 shadow hover:bg-blue-700 hover:scale-105 duration-100 dark:bg-blue-800 dark:hover:bg-blue-700 text-gray-100 dark:text-gray-300 text-sm font-bold p-2 rounded"
          onClick={() => navigate(returnLocation)}
        >
          {returnText}
        </button>
      </div>
    </Modal>
  );
}
