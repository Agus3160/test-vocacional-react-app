import StepManager from '../components/StepManager'
import { AppContextProvider } from '../context/AppContext'

type Props = {}

export default function VocationPage({}: Props) {
  return (
    <AppContextProvider>
      <StepManager />
    </AppContextProvider>
  )
}