
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-purple-50 p-4">
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <div className="text-9xl font-bold gradient-text">404</div>
          <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-2">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
        </div>
        <Button className="bg-zenbuzz-purple hover:bg-zenbuzz-darkPurple flex items-center gap-2">
          <Home size={18} />
          <span>Back to Home</span>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
