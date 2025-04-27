import { useLanguage } from "@/contexts/LanguageContext";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();
  
  return (
    <div className="flex items-center gap-2">
      <Switch
        id="language-toggle"
        checked={language === "hindi"}
        onCheckedChange={toggleLanguage}
        className="data-[state=checked]:bg-indigo-600"
      />
      <Label 
        htmlFor="language-toggle" 
        className="font-medium cursor-pointer"
      >
        {t("हिंदी", "Hindi")}
      </Label>
    </div>
  );
}