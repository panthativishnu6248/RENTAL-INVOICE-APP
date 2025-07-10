import LoginForm from "./LoginForm";

export default function AuthTabs({ userType, setUserType, onLogin, loading, error }) {
  return (
    <div className="w-full">
      <div className="flex mb-6 bg-gray-100 rounded-lg shadow-inner overflow-hidden border border-gray-200">
        {["tenant", "owner"].map((type) => (
          <button
            key={type}
            className={`flex-1 py-2 text-lg font-semibold transition-colors duration-200 focus:outline-none ${
              userType === type
                ? "bg-indigo-600 text-white shadow"
                : "text-gray-700 hover:bg-indigo-50"
            }`}
            onClick={() => setUserType(type)}
            type="button"
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
      <LoginForm userType={userType} onLogin={onLogin} loading={loading} error={error} />
    </div>
  );
} 