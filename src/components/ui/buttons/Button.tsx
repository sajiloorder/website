"use client";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
};

const sizeClasses = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const variantClasses = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary: "bg-gray-200 text-primary hover:bg-gray-300",
};

export default function Button({ size = "md", variant = "primary", className = "", children, ...props }: ButtonProps) {
  const classes = ["rounded transition font-semibold cursor-pointer ", sizeClasses[size], variantClasses[variant], className].filter(Boolean).join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
