import { useEffect, useState } from "react";
import "./reset.css";
import supabase from "../../../supabaseClient";
import ScrollToTop from "../../../constants/scrollToTop";
import { APP_NAME } from "../../constants/company-name";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const errors = ["not found", "Password"];
  const statusClass = success
    ? "success"
    : errors.some((error) => message.includes(error))
      ? "error"
      : "info";

  const validatePassword = (pwd: string) => {
    const invalidChars = /[<>|\\]/.test(pwd);
    const minLen = pwd.length >= 6;
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const hasDigit = /\d/.test(pwd);

    if (invalidChars) {
      return "Password cannot include space characters.";
    }
    if (!minLen) {
      return "Password must be at least 6 characters long.";
    }
    if (!hasUpper) {
      return "Password must include at least one uppercase letter.";
    }
    if (!hasLower) {
      return "Password must include at least one lowercase letter.";
    }
    if (!hasDigit) {
      return "Password must include at least one digit.";
    }
    return "";
  };

  const validateEmail = async () => {
    const { data, error } = await supabase.from("profiles").select("email").eq("email", email);

    if (error) {
      return false;
    }

    const confirm = data.some((profile) => profile.email === email);
    if (!confirm) {
      setMessage("Email not found. Please check and try again.");
    } else {
      setMessage("Email found. You can proceed to reset your password.");
    }
    return confirm;
  }

  const handleReset = async () => {
    if (!email || !password || !confirmPassword) {
      setMessage("Please enter your email and both password fields.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      setMessage(passwordError);
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password: confirmPassword,
    });

    if (error) {
      setMessage(error.message);
      setSuccess(false);
      return;
    } else {
      setMessage("Password updated successfully! You can now sign in with your new password.");
      setSuccess(true);
      setPassword("");
      setConfirmPassword("");
      return;
    }
  };

  useEffect(() => {
    if (email) {
      validateEmail();
    }
  }, [email]);

  if (success) {
    return (
      <div className="reset-page flex justify-center items-center py-16">
        <div className="reset-card success-card">
          <div className="badge success-badge w-full">Success</div>
          <h2>Password Reset Complete</h2>
          <p className="intro">Your password has been updated successfully. You can now sign in with your new password.</p>
          <p className="support-note">If you need help signing in, contact our support team for assistance.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="reset-page min-h-screen flex items-center justify-center bg-black text-white py-16">
      <ScrollToTop />

      <div className="reset-card">
        <div className="hero">
          <div className="badge w-full">{APP_NAME}</div>
          <h2>Reset your password</h2>
          <p className="intro text-gray-500">Securely update your password and get back into your account.</p>
        </div>

        {message && <p className={`status ${statusClass} mb-4`}>{message}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          autoComplete="new-password"
          onChange={(e) => setEmail(e.target.value)}
          maxLength={40}
        />
        <input
          type="password"
          placeholder="New password"
          name="new-password"
          autoComplete="new-password"
          disabled={!email || message.includes("not found")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          maxLength={30}
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="confirm-password"
          autoComplete="new-password"
          disabled={!email || message.includes("not found")}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          maxLength={30}
        />

        <button onClick={handleReset}>Reset Password</button>
        <p className="support-note">Need help? Contact support and we’ll help you regain access to your account.</p>
      </div>
    </div>
  );
}