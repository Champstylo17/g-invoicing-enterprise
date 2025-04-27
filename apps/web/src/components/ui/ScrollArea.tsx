// apps/web/src/components/ui/ScrollArea.tsx
import React, { PropsWithChildren } from "react";

export default function ScrollArea({ children }: PropsWithChildren<{}>) {
  return (
    <div className="overflow-auto max-h-full custom-scrollbar">
      {children}
    </div>
  );
}
