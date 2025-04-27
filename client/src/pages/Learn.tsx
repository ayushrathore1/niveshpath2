import { Button } from "@/components/ui/button";
import LearnResourceCard from "@/components/LearnResourceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLearnResources } from "@/data/learnResources";

const Learn = () => {
  const { language, t } = useLanguage();
  const { resources } = useLearnResources();

  // Filter resources by category
  const basicResources = resources.filter(resource => 
    resource.categoryEn === "Basics" || resource.categoryHi === "बुनियादी बातें"
  );
  
  const stockMarketResources = resources.filter(resource => 
    resource.categoryEn === "Stock Market" || resource.categoryHi === "शेयर बाजार"
  );
  
  const mutualFundResources = resources.filter(resource => 
    resource.categoryEn === "Mutual Funds" || resource.categoryHi === "म्यूचुअल फंड"
  );
  
  const taxPlanningResources = resources.filter(resource => 
    resource.categoryEn === "Tax Planning" || resource.categoryHi === "कर नियोजन"
  );

  return (
    <div>
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {t("Financial Education", "वित्तीय शिक्षा")}
            </h1>
            <p className="text-lg mb-4">
              {t(
                "Expand your financial knowledge with our curated resources",
                "हमारे क्यूरेटेड संसाधनों के साथ अपने वित्तीय ज्ञान का विस्तार करें"
              )}
            </p>
            <p className="text-gray-600">
              {t(
                "Whether you're just starting out or looking to deepen your investment knowledge, we have resources to help you on your financial journey.",
                "चाहे आप अभी शुरुआत कर रहे हों या अपने निवेश ज्ञान को गहरा करना चाहते हों, हमारे पास आपकी वित्तीय यात्रा में आपकी मदद करने के लिए संसाधन हैं।"
              )}
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">{t("All Resources", "सभी संसाधन")}</TabsTrigger>
                <TabsTrigger value="basics">{t("Investment Basics", "निवेश की बुनियादी बातें")}</TabsTrigger>
                <TabsTrigger value="stocks">{t("Stock Market", "शेयर बाजार")}</TabsTrigger>
                <TabsTrigger value="mutual-funds">{t("Mutual Funds", "म्यूचुअल फंड")}</TabsTrigger>
                <TabsTrigger value="tax-planning">{t("Tax Planning", "कर नियोजन")}</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resources.map((resource) => (
                  <LearnResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="basics">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {basicResources.map((resource) => (
                  <LearnResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="stocks">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stockMarketResources.map((resource) => (
                  <LearnResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="mutual-funds">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mutualFundResources.map((resource) => (
                  <LearnResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tax-planning">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {taxPlanningResources.map((resource) => (
                  <LearnResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90">
              {t("Browse All Resources", "सभी संसाधन ब्राउज़ करें")}
            </Button>
          </div>
        </div>
      </section>
      
      {/* Learning Paths Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {t("Learning Paths", "लर्निंग पाथ")}
          </h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">
            {t(
              "Follow our structured learning paths to systematically build your financial knowledge",
              "अपने वित्तीय ज्ञान को व्यवस्थित रूप से बनाने के लिए हमारे संरचित लर्निंग पाथ का अनुसरण करें"
            )}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4 text-3xl">⭐</div>
              <h3 className="text-xl font-semibold mb-2">
                {t("Beginner Path", "प्रारंभिक मार्ग")}
              </h3>
              <p className="text-gray-600 mb-4">
                {t(
                  "Start your investment journey with fundamental concepts and basic strategies.",
                  "मौलिक अवधारणाओं और बुनियादी रणनीतियों के साथ अपनी निवेश यात्रा शुरू करें।"
                )}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t("Personal Finance Fundamentals", "व्यक्तिगत वित्त की मूल बातें")}</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t("Understanding Risk & Return", "जोखिम और रिटर्न को समझना")}</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t("Getting Started with Mutual Funds", "म्यूचुअल फंड के साथ शुरुआत करना")}</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                {t("Start Learning", "सीखना शुरू करें")}
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4 text-3xl">📈</div>
              <h3 className="text-xl font-semibold mb-2">
                {t("Intermediate Path", "मध्यवर्ती मार्ग")}
              </h3>
              <p className="text-gray-600 mb-4">
                {t(
                  "Deepen your knowledge with advanced concepts and diversification strategies.",
                  "उन्नत अवधारणाओं और विविधीकरण रणनीतियों के साथ अपने ज्ञान को गहरा करें।"
                )}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t("Portfolio Construction", "पोर्टफोलियो निर्माण")}</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t("Stock Valuation Methods", "स्टॉक मूल्यांकन विधियां")}</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t("Tax-Efficient Investing", "कर-कुशल निवेश")}</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                {t("Start Learning", "सीखना शुरू करें")}
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4 text-3xl">🏆</div>
              <h3 className="text-xl font-semibold mb-2">
                {t("Advanced Path", "उन्नत मार्ग")}
              </h3>
              <p className="text-gray-600 mb-4">
                {t(
                  "Master complex strategies and optimize your portfolio for long-term growth.",
                  "जटिल रणनीतियों में महारत हासिल करें और दीर्घकालिक विकास के लिए अपने पोर्टफोलियो को अनुकूलित करें।"
                )}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t("Advanced Asset Allocation", "उन्नत संपत्ति आवंटन")}</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t("Alternative Investment Strategies", "वैकल्पिक निवेश रणनीतियां")}</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t("Wealth Preservation Techniques", "धन संरक्षण तकनीकें")}</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                {t("Start Learning", "सीखना शुरू करें")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;
