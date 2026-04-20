import type { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  ctaButton: {
    text: string;
    href: string;
  };
  children?: ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  imageUrl,
  imageAlt,
  description,
  ctaButton,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 hover:bg-slate-200 z-10 cursor-pointer"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-hidden rounded-t-2xl">
          <img src={imageUrl} alt={imageAlt} className="h-64 w-full object-cover" />
        </div>

        <div className="p-6">
          <h3 className="mb-2 text-2xl font-semibold text-slate-950">{title}</h3>
          <p className="mb-6 text-slate-600">{description}</p>
          {children}
          <a
            href={ctaButton.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-yellow-300 cursor-pointer"
          >
            {ctaButton.text}
          </a>
        </div>
      </div>
    </div>
  );
}
