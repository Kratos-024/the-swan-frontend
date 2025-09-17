import React, {
  useState,
  createContext,
  useContext,
  useRef,
  useEffect,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, Settings, User, LogOut } from "lucide-react";

const classNames = (
  ...classes: (string | undefined | null | boolean)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = (): SidebarContextProps => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar className={props.className} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <motion.div
      className={classNames(
        "h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] shrink-0",
        className
      )}
      animate={{
        width: animate ? (open ? "300px" : "60px") : "300px",
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// FIXED: Corrected MobileSidebar component
export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <div
      className={classNames(
        "h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
      )}
      {...props}
    >
      <div className="flex justify-end z-20 w-full">
        <Menu
          className="text-neutral-800 dark:text-neutral-200 h-6 w-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={classNames(
              "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
              className
            )}
          >
            <div
              className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <X className="h-6 w-6" />
            </div>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
} & React.ComponentProps<"a">) => {
  const { open, animate } = useSidebar();
  return (
    <a
      href={link.href}
      className={classNames(
        "flex items-center justify-start gap-2 group/sidebar py-2 px-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-150",
        className
      )}
      {...props}
    >
      {link.icon}

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </a>
  );
};

// Dropdown Types and Components
interface DropdownItem {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  href?: string;
}

interface SidebarDropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  className?: string;
}

export const SidebarDropdown = ({
  trigger,
  items,
  className,
}: SidebarDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { open, animate } = useSidebar();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown when sidebar closes
  useEffect(() => {
    if (!open && animate) {
      setIsOpen(false);
    }
  }, [open, animate]);

  return (
    <div className={classNames("relative", className)} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={classNames(
          "flex items-center justify-start gap-2 group/sidebar py-2 px-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-150 w-full",
          isOpen ? "bg-neutral-200 dark:bg-neutral-700" : ""
        )}
      >
        {trigger}

        {/* Show chevron only when sidebar is open */}
        <motion.div
          animate={{
            display: animate ? (open ? "flex" : "none") : "flex",
            opacity: animate ? (open ? 1 : 0) : 1,
            rotate: isOpen ? 180 : 0,
          }}
          className="ml-auto"
        >
          <ChevronDown className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
        </motion.div>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-0 right-0 mb-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md shadow-lg z-50 overflow-hidden"
          >
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
                className="flex items-center gap-3 w-full px-3 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-150 first:rounded-t-md last:rounded-b-md"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const UserProfileDropdown = ({
  userInitials = "JD",
  userName = "John Doe",
  className,
  onProfileClick,
  onSettingsClick,
  onLogoutClick,
}: {
  userInitials?: string;
  userName?: string;
  className?: string;
  onProfileClick?: () => void;
  onSettingsClick?: () => void;
  onLogoutClick?: () => void;
}) => {
  const { open, animate } = useSidebar();

  const dropdownItems: DropdownItem[] = [
    {
      label: "Profile",
      icon: <User className="h-4 w-4" />,
      onClick: () => {
        onProfileClick?.();
        console.log("Profile clicked");
      },
    },
    {
      label: "Settings",
      icon: <Settings className="h-4 w-4" />,
      onClick: () => {
        onSettingsClick?.();
        console.log("Settings clicked");
      },
    },
    {
      label: "Logout",
      icon: <LogOut className="h-4 w-4" />,
      onClick: () => {
        onLogoutClick?.();
        console.log("Logout clicked");
      },
    },
  ];

  const trigger = (
    <>
      <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
        {userInitials}
      </div>

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-700 dark:text-neutral-200 text-sm font-medium whitespace-pre inline-block !p-0 !m-0"
      >
        {userName}
      </motion.span>
    </>
  );

  return (
    <SidebarDropdown
      trigger={trigger}
      items={dropdownItems}
      className={className}
    />
  );
};
