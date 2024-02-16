import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const TextareaReview = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md bg-zinc-700 px-3 py-2 text-white text-opacity-60 text-sm shadow-sm placeholder:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        placeholder="Seu texto de avaliação"
        ref={ref}
        {...props}
        maxLength={300}
      />
    )
  }
)
TextareaReview.displayName = "Textarea"

export { TextareaReview }
