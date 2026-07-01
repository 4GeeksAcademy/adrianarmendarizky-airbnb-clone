import Image from "next/image";

interface HostProfileCardProps {
  name: string;
  yearsHosting: number;
  avatarUrl: string;
  reviewCount: number;
  rating: number;
}

export const HostProfileCard = ({
  name,
  yearsHosting,
  avatarUrl,
  reviewCount,
  rating,
}: HostProfileCardProps) => {
  return (
    <section className="space-y-4 border-b border-slate-200 py-5">
      <h2 className="text-xl font-semibold text-slate-900">Meet your host</h2>
      <article className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="flex items-center gap-3">
          <Image src={avatarUrl} alt={name} width={64} height={64} className="h-16 w-16 rounded-full object-cover" />
          <div>
            <p className="font-semibold text-slate-900">{name}</p>
            <p className="text-sm text-slate-600">Superhost</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <div><p className="font-semibold text-slate-900">{reviewCount}</p><p className="text-xs text-slate-600">Reviews</p></div>
          <div><p className="font-semibold text-slate-900">{rating.toFixed(2)}</p><p className="text-xs text-slate-600">Rating</p></div>
          <div><p className="font-semibold text-slate-900">{yearsHosting}</p><p className="text-xs text-slate-600">Years</p></div>
        </div>
      </article>
    </section>
  );
};
