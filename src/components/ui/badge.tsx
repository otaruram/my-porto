import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-none border-2 px-3 py-1 text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-foreground bg-primary text-primary-foreground hover:translate-x-[1px] hover:translate-y-[1px]",
        secondary:
          "border-foreground bg-secondary text-secondary-foreground hover:translate-x-[1px] hover:translate-y-[1px]",
        destructive:
          "border-foreground bg-destructive text-destructive-foreground hover:translate-x-[1px] hover:translate-y-[1px]",
        outline: "text-foreground border-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
