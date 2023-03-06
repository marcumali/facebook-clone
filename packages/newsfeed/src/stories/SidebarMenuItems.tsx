import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

interface Props{
  className: string;
}

const SidebarMenuItems:React.FC<Props> = ({ className }) => {

  const MenuList = [
    {
      id: 1,
      label: 'Newsfeed',
      icon: 'mdi:home',
      link: '/newsfeed',
    },
    {
      id: 2,
      label: 'Friends',
      icon: 'mdi:users',
      link: '/my-profile',
    },
    {
      id: 3,
      label: 'Messages',
      icon: 'mdi:message',
      link: '/messenger',
    },
    {
      id: 4,
      label: 'Read The Bible',
      icon: 'mdi:book',
      link: '/read-the-bible',
    },
    {
      id: 5,
      label: 'Ask God',
      icon: 'simple-icons:askubuntu',
      link: '/ask-god',
    },
    {
      id: 6,
      label: 'Devotionals',
      icon: 'material-symbols:shield-with-heart',
      link: '/devotionals',
    },
    {
      id: 7,
      label: 'Christian Magazine',
      icon: 'mdi:book-cross',
      link: '/christian-magazine',
    },
    {
      id: 8,
      label: 'Christian News',
      icon: 'fluent:news-24-filled',
      link: '/christian-news',
    },
    {
      id: 9,
      label: 'Christian Events',
      icon: 'material-symbols:calendar-month',
      link: '/christian-events',
    },
    {
      id: 10,
      label: 'Christian Radio',
      icon: 'mdi:radio-tower',
      link: '/christian-radio',
    },
    {
      id: 11,
      label: 'Prayer Request',
      icon: 'fa6-solid:hands-praying',
      link: '/prayer-request',
    },
    {
      id: 12,
      label: 'Christian Television',
      icon: 'ph:television-simple-fill',
      link: '/christian-television',
    },
    {
      id: 13,
      label: 'Top Videos',
      icon: 'material-symbols:play-circle-rounded',
      link: '/top-videos',
    },
  ];

  return(
    <div className={className}>
      {MenuList.map(item => (
        <Link href={item.link} key={item.id}>
          <div className="d-flex align-items-center mb-2">
            <div className="bg-white w-30px h-30px rounded-circle d-flex align-items-center justify-content-center me-2">
              <Icon icon={item.icon} className="fs-18px text-primary"/>
            </div>
            <div>{item.label}</div>
          </div>
        </Link>
      ))}
    </div>
  )
};

export default SidebarMenuItems;