interface DetailModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  content: string[];
}

export const DetailModal = ({ title, isOpen, onClose, content }: DetailModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40 bg-slate-900/40 px-4 py-10">
      <div className="mx-auto max-w-lg rounded-2xl bg-white p-5 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <button type="button" onClick={onClose} className="rounded-full border border-slate-300 px-2 py-1 text-xs">✕</button>
        </div>
        <div className="space-y-3 text-sm text-slate-600">
          {content.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
