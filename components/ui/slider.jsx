"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import * as TooltipPrimitive from "@radix-ui/react-tooltip";


import { cn } from "@/lib/utils"

const Slider = React.forwardRef(({ className, ...props }, ref) => {

  const [tooltipValue, setTooltipValue] = React.useState(0);
  const tooltipTriggerRef = React.createRef();

  return (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}>
    <SliderPrimitive.Track
      className="relative h-[1px] opacity-[.6] w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
  </SliderPrimitive.Root>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
