import { useState } from "react";
import {
  SidebarBody,
  SidebarLink,
  Sidebar,
  UserProfileDropdown,
} from "./SideMenu";
import { motion } from "framer-motion";
import { ChatHero } from "./ChatHero";
import { SquarePen } from "lucide-react";

export default function SidebarDemo() {
  const links = [
    {
      label: "New Chat",
      href: "#",
      icon: (
        <SquarePen className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  // Add these handler functions
  const handleProfileClick = () => {
    console.log("Profile clicked");
    // Add your navigation logic here
    // window.location.href = "/profile";
  };

  const handleSettingsClick = () => {
    console.log("Settings clicked");
    // Add your navigation logic here
    // window.location.href = "/settings";
  };

  const handleLogoutClick = () => {
    console.log("Logout clicked");
    // Add your logout logic here
    // localStorage.removeItem("token");
    // window.location.href = "/login";
  };

  return (
    <div
      className="mx-auto flex w-full h-full flex-1 flex-col 
    overflow-hidden rounded-md border border-neutral-200
     bg-gray-100 md:flex-row dark:border-neutral-700
      dark:bg-neutral-800 "
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
            {open && <Chats />}
          </div>

          <div>
            <UserProfileDropdown
              userInitials="JD"
              userName="John Doe"
              onProfileClick={handleProfileClick}
              onSettingsClick={handleSettingsClick}
              onLogoutClick={handleLogoutClick}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <ChatHero />
    </div>
  );
}

// Keep your existing Chats, Logo, and LogoIcon components the same
export const Chats = () => {
  const chatData = [
    { heading: "Friends", message: "Hey, how are you?" },
    { heading: "Family", message: "Dinner at 8?" },
    { heading: "Work", message: "Don't forget the meeting." },
    { heading: "Random", message: "Check this out!" },
  ];

  return (
    <div className="mt-7 ml-4 text-[21px]">
      <h2 className="text-gray-300">Chats</h2>
      <div className="mt-2 pl-2">
        {chatData.map((chat, index) => (
          <div key={index} className="mb-4 cursor-pointer">
            <p className="text-white">{chat.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        Your App
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  );
};
