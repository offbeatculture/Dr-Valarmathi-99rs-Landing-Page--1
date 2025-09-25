import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex justify-center gap-4 mt-6">
  <a href="/fb1" className="px-4 py-2 rounded-md bg-[#175B53] text-white hover:bg-[#134741]">
    Go to FB1
  </a>
  <a href="/fb2" className="px-4 py-2 rounded-md bg-[#175B53] text-white hover:bg-[#134741]">
    Go to FB2
  </a>
</div>
    </div>
  );
};

export default NotFound;
