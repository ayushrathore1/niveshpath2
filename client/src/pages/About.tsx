import GradientBar from "@/components/ui/gradient-bar";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About NiveshPath</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="bg-gray-300 rounded-lg w-full h-64 flex items-center justify-center">
                <i className="fas fa-users text-6xl text-gray-400"></i>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="mb-4">
                At NiveshPath, we believe everyone deserves access to high-quality financial guidance. 
                Our platform combines cutting-edge technology with financial expertise to help you make 
                informed decisions about your investments.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 mt-6">Our Approach</h3>
              <p>
                We analyze your financial situation, goals, and risk tolerance to create personalized 
                investment strategies. Our AI-powered tools continuously monitor market conditions to 
                optimize your portfolio and help you stay on track.
              </p>
            </div>
          </div>
          
          <GradientBar />
          
          <div className="mt-6 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-primary text-4xl font-bold mb-2">10,000+</div>
              <p className="text-gray-600">Active Users</p>
            </div>
            
            <div>
              <div className="text-primary text-4xl font-bold mb-2">₹100Cr+</div>
              <p className="text-gray-600">Assets Managed</p>
            </div>
            
            <div>
              <div className="text-primary text-4xl font-bold mb-2">15+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
