import Navbar from "./Navbar";
import Head from "./Head";
import Card from "./Card";



function Container() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-black"> {/* Added bg-black here */}
      
      {/* Left Sidebar - remains gray */}
      <div className="w-80 min-h-screen border rounded-md bg-gray-200 z-10"> {/* Added z-10 to keep above content */}
        <Navbar />
      </div>
      
      {/* Right Content Area - now with black background */}
      <div className="flex flex-1 flex-col min-h-full w-full bg-black text-white"> {/* Added bg-black and text-white */}
        
        {/* Head Section */}
        <div className="h-20 border border-gray-700 rounded-md flex items-center justify-between px-4 bg-gray-900"> {/* Darker header */}
          <Head />
        </div>
        
        {/* Rest of your content */}
        <div className="mx-auto w-full">
        <div className="ml-10 mt-10 mr-10 p-10 h-50 border rounded-xl bg-blue-600"> {/* Example content box */}
          {/* Your page content here */}
            <Card/>
            </div>
        </div>
        
      </div>
    </div>
  );
}
export default Container