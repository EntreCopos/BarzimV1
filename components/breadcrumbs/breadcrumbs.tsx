import React from "react"
import { BreadcrumbItem } from "./breadcrumb-item"
import { BreadcrumbSeparator } from "./breadcrumb-separator"

interface BreadcrumbsProps {
    items: string[]
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <BreadcrumbItem label={item} />
                    {index !== items.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
            ))}
        </div>
    )
}