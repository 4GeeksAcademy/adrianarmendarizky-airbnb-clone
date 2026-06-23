type HomeHeroProps = {
  title: string;
  description: string;
};

export function HomeHero({ title, description }: HomeHeroProps) {
  return (
    <section className="w-full rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-4">
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Reusable UI
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}