import Image from "next/image";

interface HostDetailsSectionProps {
  name: string;
  coHostAvatar: string;
}

export const HostDetailsSection = ({ name, coHostAvatar }: HostDetailsSectionProps) => {
  return (
    <section className="space-y-3 border-b border-slate-200 py-5">
      <p className="text-sm text-slate-700">{name} is a Superhost with a strong response track record.</p>
      <div className="grid grid-cols-2 gap-3 rounded-2xl border border-slate-200 bg-white p-4">
        <div className="flex items-center gap-2">
          <Image src={coHostAvatar} alt="Co-host" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
          <p className="text-sm text-slate-700">Co-host Ana</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src={coHostAvatar} alt="Co-host" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
          <p className="text-sm text-slate-700">Co-host Ben</p>
        </div>
      </div>
      <p className="text-sm text-slate-600">Response rate: 100% · Response time: within an hour</p>
      <button type="button" className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800">Message host</button>
      <p className="text-xs text-slate-500">To protect your payment, never transfer money outside the platform.</p>
    </section>
  );
};
