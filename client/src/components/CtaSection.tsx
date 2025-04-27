import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto bg-gray-50 shadow">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="mb-6">
              Join thousands of investors who trust NiveshPath for their financial planning.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link href="/signup">
                <Button className="bg-primary hover:bg-primary/90">
                  Create Free Account
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" className="text-primary border-primary hover:bg-gray-50">
                  Sign In
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CtaSection;
