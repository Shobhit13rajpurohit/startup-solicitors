import { cn } from "@/lib/utils"
import * as React from "react" // Import React

const Skeleton = React.memo(
  function Skeleton({
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement>) {
    return (
      <div
        className={cn("animate-pulse rounded-md bg-muted", className)}
        {...props}
      />
    )
  }
); // Wrap the functional component with React.memo

Skeleton.displayName = "Skeleton"; // Set display name for better debugging

export { Skeleton }