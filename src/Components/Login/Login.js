import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { animateScroll as scroll } from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import swal from "sweetalert";
import Cookies from "universal-cookie";

import { setUser } from "../../redux/reducers/userActions";
import { API_URL } from "../../Constants/Api";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post(`${API_URL}/login/`, formData);
      
      const { fullName, email, role, token } = response.data;
      const cookie = new Cookies();

      setLoading(true);

      dispatch(setUser({ fullName, email, role, token }));

      swal({
        title: "Login Berhasil",
        text: "Selamat datang, Anda berhasil masuk!",
        icon: "success",
        button: "OK",
      });

      cookie.set(
        "authData",
        JSON.stringify({ user: { fullName, email, role, token } }),
        {
          path: "/",
        }
      );
      // Navigasi ke halaman utama ("/") setelah login berhasil
      navigate("/");
      setLoading(false);
    } catch (error) {
      swal({
        title: "Login Gagal",
        text: "Maaf, login tidak berhasil. Silakan coba lagi.",
        icon: "error",
        button: "OK",
      });
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login Akun</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Alamat Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Kata Sandi</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {loading ? (
          <></>
        ) : (
          <button type="submit" className="submit-button" disabled={loading}>
            Masuk
          </button>
        )}
      </form>
      {loading ? (
        "Sedang Memuat..."
      ) : (
        <p>
          Belum memiliki akun?{" "}
          <Link
            onClick={() => {
              scroll.scrollToTop({
                duration: 100, // Durasi animasi dalam milidetik
                smooth: "easeInOutQuart", // Efek easing (percepatan/perlambatan)
              });
            }}
            to="/register"
          >
            Daftar di sini
          </Link>
        </p>
      )}
    </div>
  );
};

export default Login;
