import { CheckIcon, ChevronRightIcon } from 'lucide-react'

import { AnimatedSubscribeButton } from '@/components/magicui/animated-subscribe-button'

export function AnimatedSubscribeButtonDemo() {
  return (
    <AnimatedSubscribeButton
      buttonColor="#17B121"
      buttonTextColor="#ffffff"
      subscribeStatus={false}
      initialText={
        <span className="group inline-flex items-center">
          Quero o Grupo{' '}
          <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      }
      changeText={
        <span className="group inline-flex items-center">
          <CheckIcon className="mr-2 h-4 w-4" />
          Subscribed{' '}
        </span>
      }
    />
  )
}
