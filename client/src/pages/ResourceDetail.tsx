import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLearnResources } from "@/data/learnResources";
import { LearnResource } from "@/data/learnResources";

const ResourceDetail = () => {
  const [_, params] = useRoute("/learn/:id");
  const { language, t } = useLanguage();
  const { getResourceById } = useLearnResources();
  const [resource, setResource] = useState<LearnResource | null>(null);
  
  useEffect(() => {
    if (params && params.id) {
      const foundResource = getResourceById(params.id);
      if (foundResource) {
        setResource(foundResource);
      }
    }
  }, [params, getResourceById]);
  
  if (!resource) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">{t("Resource not found", "संसाधन नहीं मिला")}</h1>
        <p className="mb-8">{t("The resource you're looking for doesn't exist or has been moved.", "आप जिस संसाधन की तलाश कर रहे हैं वह मौजूद नहीं है या स्थानांतरित कर दिया गया है।")}</p>
        <a href="/learn">
          <Button className="bg-primary hover:bg-primary/90">
            {t("Back to Resources", "संसाधनों पर वापस जाएं")}
          </Button>
        </a>
      </div>
    );
  }
  
  const content = language === "english" ? resource.contentEn : resource.contentHi;
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center text-sm text-gray-500">
          <a href="/learn" className="hover:text-primary">
            {t("Resources", "संसाधन")}
          </a>
          <span className="mx-2">›</span>
          <span className="text-gray-700">
            {language === "english" ? resource.categoryEn : resource.categoryHi}
          </span>
        </div>
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {language === "english" ? resource.titleEn : resource.titleHi}
          </h1>
          <p className="text-lg text-gray-600">
            {language === "english" ? resource.descriptionEn : resource.descriptionHi}
          </p>
        </div>
        
        {/* Featured Image */}
        <div className="mb-10 rounded-lg overflow-hidden">
          <img 
            src={resource.imageUrl} 
            alt={language === "english" ? resource.titleEn : resource.titleHi}
            className="w-full h-auto"
          />
        </div>
        
        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </article>
        
        {/* Related Resources */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-8">
            {t("Related Resources", "संबंधित संसाधन")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {language === "english" ? "Mutual Funds" : "म्यूचुअल फंड"}
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-2">
                {t("Guide to Mutual Fund Investing", "म्यूचुअल फंड निवेश के लिए मार्गदर्शिका")}
              </h3>
              <p className="text-gray-600 mb-4">
                {t("Everything you need to know about investing in mutual funds.", "म्यूचुअल फंड में निवेश के बारे में आपको जो कुछ भी जानने की आवश्यकता है।")}
              </p>
              <a href="/learn/mutual-funds" className="text-primary font-medium hover:underline">
                {t("Read More →", "और पढ़ें →")}
              </a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {language === "english" ? "Tax Planning" : "कर नियोजन"}
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-2">
                {t("Tax-Saving Investment Options", "कर-बचत निवेश विकल्प")}
              </h3>
              <p className="text-gray-600 mb-4">
                {t("Learn about various tax-saving investment options available under the Income Tax Act.", "आयकर अधिनियम के तहत उपलब्ध विभिन्न कर-बचत निवेश विकल्पों के बारे में जानें।")}
              </p>
              <a href="/learn/tax-planning" className="text-primary font-medium hover:underline">
                {t("Read More →", "और पढ़ें →")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetail;