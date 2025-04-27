import FeaturesOverview from "@/components/FeaturesOverview";

const Features = () => {
  return (
    <div>
      <FeaturesOverview />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Powerful Investment Tools</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">Portfolio Analysis</h3>
              <div className="bg-white p-6 rounded-lg shadow">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    <span>Real-time portfolio performance tracking</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    <span>Risk assessment based on your holdings</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    <span>Diversification analysis and recommendations</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    <span>Benchmark comparison with market indices</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Financial Planning</h3>
              <div className="bg-white p-6 rounded-lg shadow">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    <span>Goal-based investment planning</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    <span>Retirement calculator with inflation adjustments</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    <span>Tax optimization strategies</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-primary mr-3"></i>
                    <span>Emergency fund planning and debt management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
