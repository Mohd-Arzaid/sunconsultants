// import { ChevronRight } from "lucide-react"
import AnimatedGradientText from "./animated-gradient-text"
import { cn } from "@/lib/utils"

export const HighlightText = ({text}) => {
  return (
    <AnimatedGradientText>
    <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
    <span
      className={cn(
        `inline animate-gradient bg-gradient-to-r from-[#c65c10] via-[#431c6c] to-[#c65c10] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
      )}
    >
      {text}
    </span>
    <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
    {/* <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
  </AnimatedGradientText>
  )
}
