import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">

        {/* Left Brand Section */}
        <div className="login-left">
          <h1>Riwayat</h1>
          <p>Timeless sarees for modern women</p>
        </div>

        {/* Right Form Section */}
        <div className="login-right">
          <h2>Login</h2>

          <form>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />

            <button>Login</button>
          </form>

          <p className="signup-text">
            Don’t have an account? <span onClick={() => window.location.href = '/signup'}>Sign Up</span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;
