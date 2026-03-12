"use client";

import * as React from "react";
import OTPInput from "react-otp-input";
import { MinusIcon } from "lucide-react";

import { cn } from "./utils";

function InputOTP({
  className,
  containerClassName,
  ...props
}: Omit<React.ComponentProps<typeof OTPInput>, "containerClassName" | "className"> & {
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div
      data-slot="input-otp"
      className={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName,
        className,
      )}
    >
      <OTPInput
        {...props}
        inputStyle={{ width: "2rem", height: "2rem", textAlign: "center", fontSize: "1rem" }}
      />
    </div>
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  // Placeholder slot implementation for custom OTP rendering.
  return (
    <div
      data-slot="input-otp-slot"
      className={cn(
        "border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm bg-input-background",
        className,
      )}
      {...props}
    />
  );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
