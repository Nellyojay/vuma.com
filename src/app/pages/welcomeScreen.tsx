import { Link, useLocation } from 'react-router';
import { Check } from 'lucide-react';
import { useMemo } from 'react';
import { APP_NAME } from '../constants/company-name';

export default function WelcomeScreen() {
  const location = useLocation();
  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);

  const email = params.get('email') || '';
  const confirmed = params.has('token') || params.get('confirmed') === 'true' || params.get('status') === 'confirmed';

  const displayName = useMemo(() => {
    if (!email) return '';
    const local = email.split('@')[0] || email;
    return local.charAt(0).toUpperCase() + local.slice(1);
  }, [email]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-primaryDark text-white">
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        {confirmed ? (
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent border border-gray-700 mx-auto">
              <Check className="text-black" size={36} />
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold">
              {displayName ? `Welcome, ${displayName}!` : 'Email Confirmed'}
            </h1>

            <p className="text-gray-300 max-w-2xl mx-auto">
              Thanks for confirming your email. Your account is now active — you can
              continue to login to the app.
            </p>

            <p className="text-xs text-gray-500 mt-6">
              Need help? Visit our <Link to="/about" className="text-primary underline">support page</Link>.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold">Welcome to {APP_NAME}</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              If you just clicked an email confirmation link, your email should now be
              confirmed. If you experience any issues, please check the link again or
              contact support.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white font-semibold shadow hover:bg-primary/70 hover:text-white transition"
              >
                Continue
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/10 text-sm text-gray-200 hover:bg-white/5 hover:border hover:border-white hover:text-white transition"
              >
                Get Help
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}