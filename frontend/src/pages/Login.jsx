import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  return (
    <div style={{
      background: "#0F172A",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      fontFamily: "'Georgia', serif"
    }}>

      {/* Card */}
      <div style={{
        background: "#0B1F3B",
        border: "1px solid #1E3A8A",
        borderRadius: "16px",
        padding: "48px 40px",
        width: "100%",
        maxWidth: "440px",
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)"
      }}>

        {/* Top accent line */}
        <div style={{
          height: "3px",
          background: "linear-gradient(90deg, #1E3A8A, #00D4FF, #1E3A8A)",
          borderRadius: "2px",
          marginBottom: "36px"
        }} />

        {/* Header */}
        <div style={{ marginBottom: "36px", textAlign: "center" }}>
          <h1 style={{
            fontSize: "28px",
            fontWeight: "800",
            color: "#E2E8F0",
            margin: "0 0 8px"
          }}>Welcome Back</h1>
          <p style={{ color: "#94A3B8", fontSize: "14px", margin: 0 }}>
            Sign in to your Student Developer Platform account
          </p>
        </div>

        {/* Success message */}
        {submitted && (
          <div style={{
            background: "rgba(0, 212, 255, 0.1)",
            border: "1px solid rgba(0, 212, 255, 0.3)",
            borderRadius: "8px",
            padding: "12px 16px",
            marginBottom: "24px",
            color: "#00D4FF",
            fontSize: "14px",
            textAlign: "center"
          }}>
            ✅ Login successful!
          </div>
        )}

        {/* Email Field */}
        <div style={{ marginBottom: "24px" }}>
          <label style={{
            display: "block",
            color: "#E2E8F0",
            fontSize: "14px",
            fontWeight: "600",
            marginBottom: "8px"
          }}>Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
              setErrors(prev => ({ ...prev, email: "" }));
              setSubmitted(false);
            }}
            style={{
              width: "100%",
              background: "#0F172A",
              border: errors.email ? "1px solid #f87171" : "1px solid #1E3A8A",
              borderRadius: "8px",
              padding: "12px 16px",
              color: "#E2E8F0",
              fontSize: "15px",
              outline: "none",
              boxSizing: "border-box",
              fontFamily: "inherit",
              transition: "border-color 0.2s"
            }}
            onFocus={e => {
              if (!errors.email) e.target.style.borderColor = "#00D4FF";
            }}
            onBlur={e => {
              if (!errors.email) e.target.style.borderColor = "#1E3A8A";
            }}
          />
          {errors.email && (
            <p style={{ color: "#f87171", fontSize: "13px", margin: "6px 0 0", display: "flex", alignItems: "center", gap: "4px" }}>
              ⚠️ {errors.email}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <label style={{ color: "#E2E8F0", fontSize: "14px", fontWeight: "600" }}>Password</label>
            <a href="#" style={{ color: "#00D4FF", fontSize: "13px", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
              Forgot password?
            </a>
          </div>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
                setErrors(prev => ({ ...prev, password: "" }));
                setSubmitted(false);
              }}
              style={{
                width: "100%",
                background: "#0F172A",
                border: errors.password ? "1px solid #f87171" : "1px solid #1E3A8A",
                borderRadius: "8px",
                padding: "12px 48px 12px 16px",
                color: "#E2E8F0",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box",
                fontFamily: "inherit",
                transition: "border-color 0.2s"
              }}
              onFocus={e => {
                if (!errors.password) e.target.style.borderColor = "#00D4FF";
              }}
              onBlur={e => {
                if (!errors.password) e.target.style.borderColor = "#1E3A8A";
              }}
            />
            {/* Show/Hide toggle */}
            <button
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute", right: "14px", top: "50%",
                transform: "translateY(-50%)",
                background: "none", border: "none",
                color: "#94A3B8", cursor: "pointer", fontSize: "16px", padding: 0
              }}>
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          {errors.password && (
            <p style={{ color: "#f87171", fontSize: "13px", margin: "6px 0 0", display: "flex", alignItems: "center", gap: "4px" }}>
              ⚠️ {errors.password}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            background: "#00D4FF",
            color: "#0B1F3B",
            border: "none",
            borderRadius: "8px",
            padding: "14px",
            fontSize: "16px",
            fontWeight: "700",
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "opacity 0.2s, transform 0.1s",
            marginBottom: "24px"
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          onMouseDown={e => e.currentTarget.style.transform = "scale(0.98)"}
          onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
        >
          Sign In
        </button>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <div style={{ flex: 1, height: "1px", background: "#1E3A8A" }} />
          <span style={{ color: "#94A3B8", fontSize: "13px" }}>or</span>
          <div style={{ flex: 1, height: "1px", background: "#1E3A8A" }} />
        </div>

        {/* Register Link */}
        <p style={{ textAlign: "center", color: "#94A3B8", fontSize: "14px", margin: 0 }}>
          Don't have an account?{" "}
          <a href="/register" style={{ color: "#00D4FF", textDecoration: "none", fontWeight: "600" }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
            Register here
          </a>
        </p>

      </div>
    </div>
  );
};

export default Login;