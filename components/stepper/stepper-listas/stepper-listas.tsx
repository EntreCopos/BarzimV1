'use client'

import { useRef, useEffect, Fragment } from 'react'
import { Tab } from '@headlessui/react'
import styles from './stepper-lista.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Tab {
  title: string
  link: string
}

export default function UnconventionalTabs({ tabs }: { tabs: Tab[] }) {
  const tabsRef = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabsRef.current && tabsRef.current.parentElement)
      tabsRef.current.parentElement.style.height = `${tabsRef.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  const fullCurrPath = usePathname()

  const currPath = fullCurrPath.split('/view_')[0]

  return (
    <Tab.Group>
      {({ selectedIndex }) => (
          <Tab.List
            className={`mb-8 pt-4 inline-flex w-full flex-wrap justify-center`}
          >
            {tabs.map((tab, index) => (
              <Tab key={index} as={Fragment}>
                <Link style={{display: 'contents'}} href={currPath + tab.link}>
                <div
                  className={`text-center ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 h-8 flex-1 whitespace-nowrap rounded-none px-4 text-sm font-medium transition-colors duration-150 ease-in-out focus-visible:outline-none ${
                    selectedIndex === index
                      ? styles.selectedTab
                      : `${styles.notSelectedTab} hover:${styles.notSelectedTab}`
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
