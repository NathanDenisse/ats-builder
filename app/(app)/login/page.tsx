export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md p-8 rounded-xl border border-gray-800 bg-gray-900">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Connexion
        </h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              placeholder="vous@entreprise.com"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
