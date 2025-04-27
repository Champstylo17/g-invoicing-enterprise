// apps/web/src/components/ui/Form.tsx
import React, { PropsWithChildren } from "react";

export default function Form({ children, ...props }: PropsWithChildren<React.FormHTMLAttributes<HTMLFormElement>>) {
  return (
    <form className="space-y-4" {...props}>
      {children}
    </form>
  );
}
