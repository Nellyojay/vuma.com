import { Link } from 'react-router';
import { Check } from 'lucide-react';
import { APP_NAME } from '../constants/company-name';

export default function WelcomeScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primaryDark text-white">
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent border border-gray-700 mx-auto">
            <Check className="text-black" size={36} />
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold">
            Thank you for joining {APP_NAME}!
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Thanks for confirming your email. Your account is now active — you can
            continue to login to the app.
          </p>

          <p className="text-xs text-gray-500 mt-6">
            Need help? Visit our <Link to="/about" className="text-primary underline">support page</Link>.
          </p>
        </div>

      </div>
    </div>
  );
}