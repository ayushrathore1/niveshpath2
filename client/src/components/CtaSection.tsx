import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

const CtaSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative">
          {/* Background decoration */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl blur-lg"></div>
          
          {/* Card with premium gradient border */}
          <div className="relative p-0.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl">
            <div className="bg-white rounded-2xl p-10 text-center">
              <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Ready to Start Your Journey?
              </h2>
              <p className="mb-8 text-gray-600 text-lg max-w-2xl mx-auto">
                Join thousands of investors who trust NiveshPath for their financial planning and achieve your financial goals faster.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-5">
                <Link href="/signup">
                  <div className="gradient-primary px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 font-medium cursor-pointer">
                    Create Free Account
                  </div>
                </Link>
                <Link href="/login">
                  <div className="px-8 py-3 rounded-lg border-2 border-transparent bg-white shadow-md hover:shadow-lg relative font-medium text-indigo-600 transition-all cursor-pointer">
                    <span className="relative z-10">Sign In</span>
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10 hover:opacity-20 transition-opacity"></span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
