import { LangProvider } from "./lib/LangContext";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="bg-white text-gray-900"
      style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
    >
      <LangProvider>{children}</LangProvider>
    </div>
  );
}
