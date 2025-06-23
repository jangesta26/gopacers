import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import React from 'react'
import { IconType } from 'react-icons'

type Notification = {
  icon: IconType
  title: string
  description: string
  time: string
  tag: string
  tagColor: string
  bgColor: string
}

const ShowNotification = ({ notifications }: { notifications: Notification[] }) => {
  return (
    <div
      className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50 animate-fade-in transition-all"
      role="menu"
      aria-label="Notifications"
    >
      <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-sm">Notifications</h3>
          <span className="text-xs text-blue-600 cursor-pointer hover:text-blue-800">
            Mark all as read
          </span>
        </div>
      </div>

      <div className="max-h-[320px] overflow-y-auto divide-y divide-gray-100 dark:divide-gray-700">
        {notifications.map((n, i) => {
          const Icon = n.icon
          return (
            <div
              key={i}
              className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
              role="menuitem"
            >
              <div className="flex items-start gap-3">
                <div className={`${n.bgColor} rounded-full p-2`}>
                  <Icon className="text-sm" />
                </div>
                <div>
                  <p className="text-sm font-medium">{n.title}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    {n.description}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-gray-500">{n.time}</span>
                    <Badge className={`${n.tagColor} text-xs`}>
                      {n.tag}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="px-4 py-2 border-t border-gray-100 dark:border-gray-700">
        <Button variant="outline" className="w-full text-sm rounded-button">
          View All Notifications
        </Button>
      </div>
    </div>
  )
}

export default ShowNotification
