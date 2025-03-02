import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Login = () => {
  const [formData, setFormData] = useState({ matricNumber: "", surname: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { matricNumber, surname } = formData;

    if (!matricNumber || !surname) {
      setError("Matric Number and Surname are required");
      return;
    }

    if (!/^[0-9]+$/.test(matricNumber)) {
      setError("Matric Number must contain only numbers");
      return;
    }

    if (matricNumber.length !== 6) {
      setError("Matric Number must be exactly 6 digits");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify(formData));
      setLoading(false);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="">
        <Header/>
        <div className="flex justify-center items-center py-20 bg-gray-100 bg-cover bg-center bg-no-repeat bgImg" style={{ backgroundImage: "url('/body-bg.png')" }}>
            <div className="backdrop-blur-lg mx-2 bg-white/10 p-6 rounded-lg shadow-lg w-96 border border-white/30 text-white">
                <h2 className="text-2xl font-bold mb-4 text-center">User Login</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-100">Matric Number</label>
                    <input type="text" name="matricNumber" value={formData.matricNumber} onChange={handleChange} className="w-full px-3 py-2 border text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-100">Surname</label>
                    <input type="password" name="surname" value={formData.surname} onChange={handleChange} className="w-full px-3 py-2 border text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                    {error && (
                        <p className="text-red-400 font-semibold text-sm transition-transform transform translate-y-[-10px] opacity-100 animate-slideIn">{error}</p>
                    )}
                <button type="submit" className="w-full bg-yellow-500 font-semibold text-white py-2 rounded-md text-xl uppercase hover:bg-yellow-600 transition" disabled={loading}>
                    {loading ? "Authenticating..." : "Login"}
                </button>
                </form>
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Login;
