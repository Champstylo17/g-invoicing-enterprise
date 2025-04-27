// apps/web/src/components/ui/Modal.tsx
import React, { PropsWithChildren } from "react";

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClose(): void;
}>;

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-md p-6 max-w-lg w-full shadow-lg">
        {children}
        <button onClick={onClose} className="mt-4 text-sm text-gray-500 hover:text-gray-700">
          Close
        </button>
      </div>
    </div>
  );
}
