'use client'

import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Tab {
  title: string
  link: string
}

export default function UnconventionalTabs({ tabs }: { tabs: Tab[] }) {
  const fullCurrPath = usePathname()
  const currPath = fullCurrPath.split('/view_')[0]

  return (
    <Tab.Group>
      {({ selectedIndex }) => (
        <Tab.List className="mb-8 inline-flex w-full flex-wrap justify-center pt-4">
          {tabs.map((tab, index) => (
            <Tab key={index} as={Fragment}>
              <Link style={{ display: 'contents' }} href={currPath + tab.link}>
                <div
                  className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 h-8 flex-1 whitespace-nowrap rounded-none px-4 text-center text-sm font-medium transition-colors duration-150 ease-in-out focus-visible:outline-none ${
                    selectedIndex === index
                      ? 'border-b-2 border-yellow-barzim text-yellow-barzim'
                      : 'border-b-2 border-tabs-background text-tabs-background hover:text-slate-barzim'
                  }`}
                >
                  {tab.title}
                </div>
              </Link>
            </Tab>
          ))}
        </Tab.List>
      )}
    </Tab.Group>
  )
}
