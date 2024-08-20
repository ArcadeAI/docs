import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDocker } from '@fortawesome/free-brands-svg-icons'
import { faWandMagicSparkles, faScaleBalanced, faBolt, faPuzzlePiece, faPlug, faPeopleGroup, faCloud, faTerminal } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

type Props = {
    children?: React.ReactNode
    title: string
    icon: React.ReactNode
    arrow?: boolean
    href: string
}

const allowedIcons = {
    "wand-magic-sparkles": faWandMagicSparkles,
    "scale-balanced": faScaleBalanced,
    "bolt": faBolt,
    "puzzle-piece": faPuzzlePiece,
    "plug": faPlug,
    "people-group": faPeopleGroup,
    "docker": faDocker,
    "cloud": faCloud,
    "terminal": faTerminal,
}

export const Card = ({ title, children, footer, icon, color, href}) => {
    const borderColorVariations = {
        "grey": "hover:nx-bg-slate-50 nx-border-gray-200 hover:nx-border-gray-300 dark:hover:nx-border-neutral-700",
        "green": "dark:hover:nx-bg-slate-50 hover:nx-border-primary-500 dark:hover:nx-border-primary-500 dark:nx-border-primary-500 dark:nx-border-primary-500"
    }

    const cardContent = (
        <>
            {icon && <div className={"h-6 w-6 nx-text-primary-800"} style={{color: color ?? ""}}><FontAwesomeIcon
                className={"h-6 w-6 nx-text-primary dark:nx-text-primary-light"} icon={allowedIcons[icon]}/></div>}
            {title && <div className="font-bold text-xl mb-2 mt-2">{title}</div>}
            <div>{children}</div>
            {footer && <div className="mt-4">{footer}</div>}
        </>
    )

    const wrapperClasses: string = "block nx-border dark:nx-border-neutral-800 nx-rounded-lg nx-text-current nx-no-underline dark:nx-shadow-none hover:nx-shadow-gray-100 dark:hover:nx-shadow-none nx-shadow-gray-100 active:nx-shadow-sm active:nx-shadow-gray-200 nx-transition-all nx-duration-200 nx-bg-transparent nx-shadow-sm hover:nx-shadow-md dark:hover:nx-bg-neutral-900 p-5"

    return href ? (
        <Link className={`${wrapperClasses} ${borderColorVariations["green"]} cursor-pointer`} href={href} passHref>
            {cardContent}
        </Link>
    ) : (
        <div className={`${wrapperClasses} ${borderColorVariations["grey"]}`}>
            {cardContent}
        </div>
    );
}

export const Cards = ({children, columns = 1}) => {
    const columnVariants = {
        1: 'md:grid-cols-1',
        2: 'md:grid-cols-2',
        3: 'md:grid-cols-3',
    }

    return (
        <div className={`grid not-prose grid-cols-1 ${columnVariants[columns]} gap-x-2 gap-5 not-prose nx-mt-6`}>
            {...children}
        </div>
    )
}
