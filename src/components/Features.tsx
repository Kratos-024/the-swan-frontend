import { useState } from "react";
import { Code, BarChart3, Shield, Database, ChevronDown } from "lucide-react";

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState("Development");
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const tabs = [
    { id: "Development", icon: Code, label: "Development" },
    { id: "Analytics", icon: BarChart3, label: "Analytics" },
    { id: "Security", icon: Shield, label: "Security" },
    { id: "Infrastructure", icon: Database, label: "Infrastructure" },
  ];

  const ActiveIcon = tabs.find((tab) => tab.id === activeTab)?.icon || Code;

  return (
    <section className="container mx-auto space-y-8  px-4 py-24 md:px-6 2xl:max-w-[1400px]">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Everything you need to build modern apps
        </h2>
        <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Powerful features to help you build faster and scale better
        </p>
      </div>

      <div className="mb-4 flex w-full justify-center md:hidden">
        <div className="relative">
          <button
            type="button"
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="border-input focus-visible:border-ring focus-visible:ring-ring/50 flex items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] h-9 w-[180px]"
          >
            <div className="flex items-center gap-2">
              <ActiveIcon className="size-4" />
              {activeTab}
            </div>
            <ChevronDown className="size-4 opacity-50" />
          </button>

          {mobileDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-md shadow-lg z-10">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setMobileDropdownOpen(false);
                    }}
                    className="flex items-center cursor-pointer gap-2 w-full px-3 py-2 text-sm hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
                  >
                    <TabIcon className="size-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="hidden justify-center gap-4 overflow-x-auto py-2 md:flex">
        {tabs.map((tab) => {
          const TabIcon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={` inline-flex hover:bg-black/20  cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium 
               outline-none 
                 h-9 px-4 py-2 gap-2 ${
                   isActive
                     ? "bg-white text-black shadow-xs  hover:opacity-90"
                     : "hover:bg-black/20 "
                 }`}
            >
              <TabIcon className="size-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm overflow-hidden p-0">
        <div className="grid gap-0 lg:grid-cols-2">
          <div
            className="flex flex-col justify-center space-y-6
          bg-gradient-to-br from-black/[0.03] to-black/[0.01] dark:bg-gradient-to-br dark:from-white/[0.08] dark:to-white/[0.02] p-6 lg:p-8"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Development</h3>
              <p className=" text-slate-400 ">
                Build with modern tools and frameworks
              </p>
            </div>
            <ul className="grid gap-3">
              <li className="flex items-center gap-3">
                <div className="bg-primary size-2 rounded-full"></div>
                <p className=" bg-white w-2 h-2 rounded-full"></p>
                <span>TypeScript & React Support</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-primary size-2 rounded-full"></div>
                <p className=" bg-white w-2 h-2 rounded-full"></p>
                <span>Component Library</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-primary size-2 rounded-full"></div>
                <p className=" bg-white w-2 h-2 rounded-full"></p>
                <span>API Integration</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-primary size-2 rounded-full"></div>
                <p className=" bg-white w-2 h-2 rounded-full"></p>
                <span>Developer Tools</span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-video lg:aspect-auto">
            <img
              alt="Development"
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
