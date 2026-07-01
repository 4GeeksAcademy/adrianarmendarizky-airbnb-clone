import Image from "next/image";

interface SleepingArrangementsProps {
  photoUrl: string;
}

export const SleepingArrangements = ({ photoUrl }: SleepingArrangementsProps) => {
  return (
    <section className="space-y-3 border-b border-slate-200 py-5">
      <h2 className="text-xl font-semibold text-slate-900">Where you&apos;ll sleep</h2>
      <article className="max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <Image src={photoUrl} alt="Bedroom" width={900} height={600} className="h-44 w-full object-cover" />
        <div className="p-4">
          <p className="font-medium text-slate-900">Bedroom</p>
          <p className="text-sm text-slate-600">1 queen bed</p>
        </div>
      </article>
    </section>
  );
};
