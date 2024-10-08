import { LoaderCircle } from 'lucide-react'
import { memo } from 'react'

function LoadingPage() {
  return (
    <div className='bg-gray-200 dark:bg-gray-900 flex text-gray-800 dark:text-gray-300 items-center justify-center h-dvh w-full'>
      <LoaderCircle className='animate-spin' />
    </div>
  )
}

export default memo(LoadingPage)