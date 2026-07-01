const footerColumns = [
  {
    title: "Support",
    links: ["Help Center", "AirCover", "Cancellation options", "Safety information"],
  },
  {
    title: "Hosting",
    links: ["Airbnb your home", "AirCover for Hosts", "Hosting resources", "Community forum"],
  },
  {
    title: "Airbnb",
    links: ["Newsroom", "New features", "Careers", "Investors"],
  },
];

export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          {footerColumns.map((column) => (
            <section key={column.title} className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-900">{column.title}</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {column.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4 text-sm text-slate-600">
          <p>English (US) · $ USD</p>
          <p>Facebook · X · Instagram</p>
          <p>© 2026 Airbnb Clone · Privacy · Terms · Your Privacy Choices</p>
        </div>
      </div>
    </footer>
  );
};
