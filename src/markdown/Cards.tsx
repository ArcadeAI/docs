import { faDocker } from "@fortawesome/free-brands-svg-icons";
import {
  faBolt,
  faCheckCircle,
  faCloud,
  faCode,
  faCodeBranch,
  faList,
  faPeopleGroup,
  faPlug,
  faPuzzlePiece,
  faRocket,
  faScaleBalanced,
  faServer,
  faTerminal,
  faToolbox,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  footer?: React.ReactNode;
  color?: string;
  title: string;
  icon: string;
  arrow?: boolean;
  href: string;
};

const allowedIcons = {
  "wand-magic-sparkles": faWandMagicSparkles,
  "scale-balanced": faScaleBalanced,
  bolt: faBolt,
  "puzzle-piece": faPuzzlePiece,
  plug: faPlug,
  "people-group": faPeopleGroup,
  docker: faDocker,
  cloud: faCloud,
  terminal: faTerminal,
  rocket: faRocket,
  code: faCode,
  list: faList,
  "check-circle": faCheckCircle,
  server: faServer,
  git: faCodeBranch,
  tool: faToolbox,
};

export const Card = ({ title, children, footer, icon, color, href }: Props) => {
  const borderColorVariations = {
    grey: "hover:_bg-slate-50 _border-gray-200 hover:_border-gray-300 dark:hover:_border-neutral-700",
    accent:
      "hover:_border-[var(--brand-accent)] dark:hover:_border-[var(--brand-accent)] _border-[var(--brand-accent)] dark:_border-[var(--brand-accent)]",
  };

  const iconStyle = color ? { color } : { color: "var(--brand-accent)" };

  const cardContent = (
    <>
      {icon && (
        <div className="h-6 w-6" style={iconStyle}>
          <FontAwesomeIcon className="h-6 w-6" icon={allowedIcons[icon]} />
        </div>
      )}
      {title && <div className="mb-2 mt-2 text-xl font-bold">{title}</div>}
      <div>{children}</div>
      {footer && <div className="mt-4">{footer}</div>}
    </>
  );

  const wrapperClasses: string =
    "block _border dark:_border-neutral-800 _rounded-lg _text-current _no-underline dark:_shadow-none hover:_shadow-gray-100 dark:hover:_shadow-none _shadow-gray-100 active:_shadow-sm active:_shadow-gray-200 _transition-all _duration-200 _bg-transparent _shadow-sm hover:_shadow-md dark:hover:_bg-neutral-900 p-4"; // Reduced padding from p-5 to p-4

  return href ? (
    <Link
      className={`${wrapperClasses} ${borderColorVariations["accent"]} hover:_bg-[var(--brand-accent-hover)] cursor-pointer`}
      href={href}
      passHref
    >
      {cardContent}
    </Link>
  ) : (
    <div className={`${wrapperClasses} ${borderColorVariations["grey"]}`}>
      {cardContent}
    </div>
  );
};

export const Cards = ({ children, columns = 1 }) => {
  const columnVariants = {
    1: "grid-cols-1",
    2: "sm:grid-cols-2 gap-4",
    3: "sm:grid-cols-2 lg:grid-cols-3 gap-4",
  };

  return (
    <div className={`grid ${columnVariants[columns]} mt-8 gap-6`}>
      {children}
    </div>
  );
};
