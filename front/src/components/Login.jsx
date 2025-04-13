
import { useDispatch } from "react-redux"
import { loginUser } from "../store/auth/thunks";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router";




export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (code, password) => {
    try {
      return dispatch(loginUser(code, password))
    } catch (error) {
      console.log(error)
    }
  }

  const { codigo, password, onInputChange } = useForm({
    codigo: '',
    password: ''
  })


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!codigo || !password) {
      setError("Both fields are required");
      return;
    }
    const result = await handleLogin(codigo, password)

    if (result[1]) {
      localStorage.setItem("jwt", result[2])
      return navigate("/home")
    } else {
      console.log("klk")
    }


  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "350px", borderRadius: "10px" }}>
        <h2 className="text-center mb-4 text-primary">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="codigo" className="form-label">codigo address</label>
            <input
              type="text"
              className="form-control"
              id="codigo"
              name="codigo"
              value={codigo}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={onInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="text-center mt-3">
          <a href="#" className="text-decoration-none">Forgot Password?</a>
        </p>
        <button
          onClick={() => handleSubmit()}
        >
          klk
        </button>
      </div>
    </div>
  );
};

export default Login;
