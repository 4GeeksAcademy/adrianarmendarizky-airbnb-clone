import { HomeHero } from "@/components/home-hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-20 sm:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <HomeHero
          title="Next.js 16 project scaffolded and ready to build"
          description="This workspace uses the App Router, TypeScript, Tailwind CSS, and a dedicated components folder for reusable UI pieces."
        />
        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-950">Included stack</h2>
            <p className="mt-3 text-zinc-600">
              Next.js 16, React 19, TypeScript, Tailwind CSS v4, and the App Router are configured out of the box.
            </p>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-950">Project structure</h2>
            <p className="mt-3 text-zinc-600">
              Add shared buttons, cards, form fields, and layout primitives under <code>/components</code> as the UI grows.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
