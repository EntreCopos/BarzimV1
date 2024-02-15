'use client'

import { useRef, useEffect, Fragment } from 'react'
import { Tab } from '@headlessui/react'
import { Caveat } from 'next/font/google'
import styles from './stepper-lista.module.css'

const caveat = Caveat({
    subsets: ['latin'],
    variable: '--font-caveat',
    display: 'swap'
})

interface Tab {
    title: string
    tag: string
    excerpt: string
    link: string
}

export default function UnconventionalTabs({ tabs }: { tabs: Tab[] }) {

    const tabsRef = useRef<HTMLDivElement>(null)

    const heightFix = () => {
        if (tabsRef.current && tabsRef.current.parentElement) tabsRef.current.parentElement.style.height = `${tabsRef.current.clientHeight}px`
    }

    useEffect(() => {
        heightFix()
    }, [])

    return (
        <Tab.Group>
            {({ selectedIndex }) => (
                <div className={`${caveat.variable}`}>
                    {/* Buttons */}
                    <div className="flex justify-center">
                        <Tab.List className={`max-[480px]:max-w-[180px] inline-flex flex-wrap justify-center mb-8 min-[480px]:mb-12`}>
                            {tabs.map((tab, index) => (
                                <Tab key={index} as={Fragment}>
                                    <button
                                        className={`flex-1 text-sm font-medium h-8 px-4 rounded-none whitespace-nowrap focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out ${selectedIndex === index
                                                ? styles.selectedTab
                                                : `${styles.notSelectedTab} hover:${styles.notSelectedTab}`
                                            }`}>
                                        {tab.title}
                                    </button>
                                </Tab>
                            ))}
                        </Tab.List>
                    </div>
                </div>
            )}
        </Tab.Group>
    );
}