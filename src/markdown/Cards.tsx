import { faDocker } from '@fortawesome/free-brands-svg-icons';
import { faBolt, faCloud, faCode, faCodeBranch, faList, faPeopleGroup, faPlug, faPuzzlePiece, faRocket, faScaleBalanced, faTerminal, faToolbox, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    "rocket": faRocket,
    "code": faCode,
    "list": faList,
    "git": faCodeBranch,
    "tool": faToolbox
}

export const Card = ({ title, children, footer, icon, color, href }) => {
    const borderColorVariations = {
        "grey": "hover:nx-bg-slate-50 nx-border-gray-200 hover:nx-border-gray-300 dark:hover:nx-border-neutral-700",
        "accent": "hover:nx-border-[var(--brand-accent)] dark:hover:nx-border-[var(--brand-accent)] nx-border-[var(--brand-accent)] dark:nx-border-[var(--brand-accent)]"
    }

    const iconStyle = color ? { color } : { color: 'var(--brand-accent)' };

    const cardContent = (
        <>
            {icon && (
                <div className="h-6 w-6" style={iconStyle}>
                    <FontAwesomeIcon
                        className="h-6 w-6"
                        icon={allowedIcons[icon]}
                    />
                </div>
            )}
            {title && <div className="font-bold text-xl mb-2 mt-2">{title}</div>}
            <div>{children}</div>
            {footer && <div className="mt-4">{footer}</div>}
        </>
    )

    const wrapperClasses: string = "block nx-border dark:nx-border-neutral-800 nx-rounded-lg nx-text-current nx-no-underline dark:nx-shadow-none hover:nx-shadow-gray-100 dark:hover:nx-shadow-none nx-shadow-gray-100 active:nx-shadow-sm active:nx-shadow-gray-200 nx-transition-all nx-duration-200 nx-bg-transparent nx-shadow-sm hover:nx-shadow-md dark:hover:nx-bg-neutral-900 p-4" // Reduced padding from p-5 to p-4

    return href ? (
        <Link className={`${wrapperClasses} ${borderColorVariations["accent"]} cursor-pointer hover:nx-bg-[var(--brand-accent-hover)]`} href={href} passHref>
            {cardContent}
        </Link>
    ) : (
        <div className={`${wrapperClasses} ${borderColorVariations["grey"]}`}>
            {cardContent}
        </div>
    );
}

export const Cards = ({ children, columns = 1 }) => {
    const columnVariants = {
        1: 'grid-cols-1',
        2: 'sm:grid-cols-2 gap-4',
        3: 'sm:grid-cols-2 lg:grid-cols-3 gap-4',
    };

    return (
        <div className={`grid ${columnVariants[columns]} gap-6 mt-8`}>
            {children}
        </div>
    );
}
