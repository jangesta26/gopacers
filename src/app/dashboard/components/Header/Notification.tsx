'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  FaBell, FaCalendarAlt, FaChevronDown, FaCog,
  FaDumbbell, FaMedal, FaQuestion, FaUser
} from 'react-icons/fa'
import { FaSliders } from 'react-icons/fa6'
import ShowProfile from './ShowProfile'
import ShowNotification from './ShowNotification'

const profileItems = [
  { label: "My Profile", href: "/profile", icon: FaUser },
  { label: "Account Settings", href: "/settings", icon: FaCog },
  { label: "Preferences", href: "/preferences", icon: FaSliders },
  { label: "Help Center", href: "/help", icon: FaQuestion },
];

const Notification = () => {
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notifRef.current && !notifRef.current.contains(event.target as Node)
      ) {
        setShowNotif(false);
      }
      if (
        profileRef.current && !profileRef.current.contains(event.target as Node)
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-4">
      {/* Notification */}
      <div className="relative" ref={notifRef}>
        <div
          onClick={() => setShowNotif((prev) => !prev)}
          className="cursor-pointer relative"
        >
          <FaBell className="text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>

        {showNotif && (
          <ShowNotification
          notifications={[
            {
              icon: FaCalendarAlt,
              title: 'Race Day Reminder',
              description: 'Your Summer Marathon 2025 starts in 13 days. Prepare your gear.',
              time: '2 hours ago',
              tag: 'Race Update',
              tagColor: 'bg-blue-100 text-blue-700',
              bgColor: 'bg-blue-100',
            },
            {
              icon: FaDumbbell,
              title: 'Training Milestone',
              description: "You've completed Week 6 of your 10K training plan.",
              time: '5 hours ago',
              tag: 'Training',
              tagColor: 'bg-green-100 text-green-700',
              bgColor: 'bg-green-100',
            },
            {
              icon: FaMedal,
              title: 'New Challenge Available',
              description: 'Join the Summer Distance Challenge. Run 100km in June.',
              time: '1 day ago',
              tag: 'Challenge',
              tagColor: 'bg-purple-100 text-purple-700',
              bgColor: 'bg-purple-100',
            },
          ]}
          />
        )}
      </div>

      {/* Profile Dropdown */}
      <div className="relative" ref={profileRef}>
        <div
          onClick={() => setShowProfile((prev) => !prev)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520athletic%2520male%2520runner%2520in%2520his%252030s%252C%2520natural%2520lighting%252C%2520neutral%2520background%252C%2520confident%2520smile%252C%2520casual%2520athletic%2520wear%252C%2520summer%2520outdoor%2520setting&width=100&height=100&seq=30&orientation=squarish" alt="Avatar" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium hidden md:inline">Alex Johnson</span>
          <FaChevronDown
            className={`text-xs text-gray-500 transition-transform duration-300 ${
                showProfile ? 'rotate-180' : 'rotate-0'
            }`}
            />
        </div>

        {showProfile && (
          <ShowProfile
          fullName="Alex Johnson"
          email="alex.johnson@example.com"
          items={profileItems}
          logoutHref="/auth/login"
          />
        )}
      </div>
    </div>
  )
}

export default Notification
