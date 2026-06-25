import Image from "next/image";

interface HostInfoRowProps {
  name: string;
  yearsHosting: number;
  avatarUrl: string;
}

export const HostInfoRow = ({ name, yearsHosting, avatarUrl }: HostInfoRowProps) => {
  return (
    <section className="flex items-center gap-3 border-b border-slate-200 py-5">
      <Image
        src={avatarUrl}
        alt={name}
        width={48}
        height={48}
        className="h-12 w-12 rounded-full object-cover"
      />
      <div>
        <p className="font-medium text-slate-900">Hosted by {name}</p>
        <p className="text-sm text-slate-600">Hosting for {yearsHosting} years</p>
      </div>
    </section>
  );
};
