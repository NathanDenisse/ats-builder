export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <nav className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a href="/" className="font-bold text-xl text-white">
            riiken<span className="text-blue-500">.</span>
          </a>
          <div className="flex items-center gap-4">
            <a
              href="/offers"
              className="text-sm text-gray-400 hover:text-white transition"
            >
              Offres
            </a>
            <a
              href="/offers/create"
              className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              Créer une offre
            </a>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
