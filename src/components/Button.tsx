import Link from 'next/link'
import React from 'react'



export const ExternalLink = ({
    children,
    href,
    ...rest
}: {
    children: React.ReactNode
    href: string
    [key: string]: any
}) => {
    return (
        <a href={href} {...rest} target="_blank" className="button">
            {children}
        </a>
    )
}

export const Button = ({
    children,
    href,
    external,
}: {
    children: React.ReactNode
    href?: string
    external?: boolean
}) => {
    if (href && external) {
        return (
            <ExternalLink href={href} target="_blank">
                {children}
            </ExternalLink>
        )
    }

    const buttonContent = <button className="button">{children}</button>
    return href ? <Link href={href}>{buttonContent}</Link> : buttonContent
}