import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "wouter";

export interface LearnResource {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface LearnResourceCardProps {
  resource: LearnResource;
}

const LearnResourceCard: React.FC<LearnResourceCardProps> = ({ resource }) => {
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
          {resource.category}
        </span>
        <h3 className="text-xl font-semibold mt-2 mb-2">{resource.title}</h3>
        <p className="text-gray-600 mb-4">{resource.description}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Link href={`/learn/${resource.id}`}>
          <a className="text-primary font-medium hover:underline">Read More →</a>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default LearnResourceCard;
