import "./Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">

        {/* Left Side – Brand */}
        <div className="signup-left">
          <h1>Riwayat</h1>
          <p>Where tradition meets elegance</p>
        </div>

        {/* Right Side – Form */}
        <div className="signup-right">
          <h2>Create Your Account</h2>

          <form>
            <input type="text" placeholder="Full Name"  required/>
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Address" required />
            <input type="text" placeholder="Phone Number"  required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />

            <button>Create Account</button>
          </form>

          <p className="login-text">
            Already have an account? <span onClick={() => window.location.href = '/login'}>Login</span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Signup;
