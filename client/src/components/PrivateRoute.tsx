import { useLocation, Redirect } from "wouter";
import { useAuth } from "@/contexts/AuthContext";
import { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { currentUser } = useAuth();
  const [, setLocation] = useLocation();

  if (!currentUser) {
    setLocation("/login");
    return null;
  }

  return <>{children}</>;
}