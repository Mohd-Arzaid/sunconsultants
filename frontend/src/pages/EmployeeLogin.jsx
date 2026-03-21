import { Link } from "react-router-dom";
import { Briefcase, ArrowLeft } from "lucide-react";

const EmployeeLogin = () => {
  return (
    <div className="bg-white min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-6">
          <Briefcase className="w-8 h-8 text-neutral-500" />
        </div>

        <h1 className="text-3xl md:text-4xl font-geist font-semibold text-neutral-800 tracking-tight">
          User Login
        </h1>

        <p className="mt-4 text-base md:text-lg text-neutral-500 font-geist leading-relaxed">
          The user login portal is currently under development. Please check
          back soon or contact your administrator for access.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 text-white font-geist font-medium rounded-lg hover:bg-neutral-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLogin;
