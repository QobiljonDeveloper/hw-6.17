import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1F5F9] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-[#0F172A] text-center mb-6">
          Login
        </h1>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#0F172A] mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0F172A] mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300"
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="w-1/2 bg-[#1E293B] text-white py-2 rounded-lg hover:bg-[#334155] transition"
            >
              Back
            </button>

            <button
              type="submit"
              className="w-1/2 bg-[#0EA5E9] text-white py-2 rounded-lg hover:bg-[#22C55E] transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
