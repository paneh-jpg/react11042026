import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submit:", { email, password });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white px-4 ">
      <div className="w-full max-w-[360px] bg-white p-8 rounded-lg shadow-md ">
        <h1 className="text-xl font-semibold mb-6">Đăng nhập</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b border-gray-300 py-2 focus:border-black-500 outline-none transition-colors"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full border-b border-gray-300 py-2 focus:border-black-500 outline-none transition-colors"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="mt-4 bg-black text-white py-2 rounded-sm hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            TIẾP TỤC
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
