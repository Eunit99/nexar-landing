import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-tt-norms inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexar-purple disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        primary: "bg-nexar-purple text-white hover:bg-nexar-darkPurple shadow-sm",
        outline: "border-2 border-nexar-purple bg-transparent text-nexar-purple hover:bg-nexar-purple hover:text-white",
        ghost: "bg-transparent text-[#101828] hover:text-nexar-purple",
        link: "text-nexar-purple underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-6 text-sm",
        md: "h-11 px-8 text-base",
        lg: "h-14 px-10 text-lg font-semibold",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
