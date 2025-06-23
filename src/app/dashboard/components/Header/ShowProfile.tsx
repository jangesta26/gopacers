import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { FaSignOutAlt } from "react-icons/fa";

interface ProfileMenuItem {
  label: string;
  href: string;
  icon: IconType;
  color?: string;
}

interface ShowProfileProps {
  fullName: string;
  email: string;
  items: ProfileMenuItem[];
  logoutHref: string;
}

const ShowProfile = ({
  fullName,
  email,
  items,
  logoutHref,
}: ShowProfileProps) => {
  return (
    <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50 animate-fade-in">
      <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
        <p className="text-sm font-medium">{fullName}</p>
        <p className="text-xs text-gray-500">{email}</p>
      </div>

      {items.map((item, idx) => (
        <Link
          key={idx}
          href={item.href}
          className="flex items-center px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <item.icon
            className={`mr-2 text-gray-400 ${item.color || ""}`}
          />
          {item.label}
        </Link>
      ))}

      <div className="border-t border-gray-100 dark:border-gray-700 mt-2">
        <Link
          href={logoutHref}
          className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <FaSignOutAlt className="mr-2 text-red-600" />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default ShowProfile;
