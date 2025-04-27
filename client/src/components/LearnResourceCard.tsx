import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { LearnResource as ResourceType } from "@/data/learnResources";

interface LearnResourceCardProps {
  resource: ResourceType;
}

const LearnResourceCard: React.FC<LearnResourceCardProps> = ({ resource }) => {
  const { language, t } = useLanguage();
  
  return (
    <Card className="bg-gray-50 overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="w-full h-48 bg-gray-200 overflow-hidden">
        <div
          className="w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${resource.imageUrl})` }}
        ></div>
      </div>
      <CardContent className="p-6">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          {language === "english" ? resource.categoryEn : resource.categoryHi}
        </span>
        <h3 className="text-xl font-semibold mt-2 mb-2">
          {language === "english" ? resource.titleEn : resource.titleHi}
        </h3>
        <p className="text-gray-600 mb-4">
          {language === "english" ? resource.descriptionEn : resource.descriptionHi}
        </p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Link href={`/learn/${resource.id}`}>
          <div className="text-primary font-medium hover:underline cursor-pointer">
            {t("Read More →", "और पढ़ें →")}
          </div>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default LearnResourceCard;
