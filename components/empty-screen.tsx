import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Explain climate change',
    message: `Can you explain climate change in a simple way?`
  },
  {
    heading: 'Teach me about fossil fuels',
    message: 'Write a paper explaining what fossil fuels are in great detail.'
  },
  {
    heading: 'What is veganism?',
    message: `Can you explain Veganism and why it may be important ecologically?`
  },
  {
    heading: 'I just got an Orchid, help me take care of it',
    message: `How often should I water my new Orchid?`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold text-muted-foreground">
          Arboria Environmental AI Assistant
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
        Your green-minded copilot and eco-conscious companion
        </p>
        <p className="leading-normal text-muted-foreground">
          Ask for ecological information, plant care advice, and more:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base text-muted-foreground"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
