interface LoadingStateProps {
  label: string;
}

export const LoadingState = ({ label }: LoadingStateProps) => {
  return (
    <div className="flex min-h-36 items-center justify-center rounded-2xl border border-slate-200 bg-white">
      <p className="text-sm text-slate-600">{label}...</p>
    </div>
  );
};
