import LoginForm from "./LoginForm";
import '../index.css';
export default function AuthTabs({ userType, setUserType, onLogin, loading, error }) {
  return (
    <div className="mui-w-100">
      <div className="mui-d-flex mui-mb-2 mui-card mui-card-content mui-align-center mui-justify-between" style={{ background: 'var(--mui-grey-100)', border: '1px solid var(--mui-grey-200)' }}>
        {["tenant", "owner"].map((type) => (
          <button
            key={type}
            className={`mui-btn mui-btn-text mui-flex-1 mui-py-2 mui-text-lg mui-font-semibold ${
              userType === type
                ? "mui-btn-contained"
                : "mui-text-secondary"
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