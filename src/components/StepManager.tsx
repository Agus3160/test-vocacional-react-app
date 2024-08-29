
import { useAppContext } from '../context/AppContext'

type Props = {}

export default function StepManager({}: Props) {

  const { step } = useAppContext();

  switch (step) {

    case 0:
      return <div>hola</div>

    default:
      return <div>No page</div>

  }
}