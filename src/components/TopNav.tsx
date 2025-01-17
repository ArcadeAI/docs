import Link from "next/link";
import { useRouter } from "next/router";

import {
  faCloud,
  faCode,
  faCodeBranch,
  faHome,
  faList,
  faMap,
  faPlug,
  faPuzzlePiece,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./TopNav.module.css";

import docsTopNav from "@pages/_topnav.json";

interface TopNavItem {
  title: string;
  url: string;
  icon: string;
}

interface TopNavMap {
  [key: string]: TopNavItem[];
}

const topNavs: TopNavMap = {
  home: docsTopNav,
  guides: docsTopNav,
  integrations: docsTopNav,
};

const TopNavIcon = ({ icon }) => {
  const iconByNames = {
    git: faCodeBranch,
    code: faCode,
    cloud: faCloud,
    map: faMap,
    home: faHome,
    list: faList,
    tool: faToolbox,
    plug: faPlug,
    "puzzle-piece": faPuzzlePiece,
  };

  return (
    <div className={styles.topNavLinkIconContent}>
      <FontAwesomeIcon
        className={styles.topNavLinkIcon}
        icon={iconByNames[icon]}
      />
    </div>
  );
};

const TopNav = ({ path }) => {
  const projectId = Object.keys(topNavs).find((projectId) =>
    path.startsWith(`/${projectId}`),
  );
  if (projectId === undefined) {
    return null;
  }

  const topNavLinks = topNavs[projectId];

  return (
    <div className="nx-mx-2 hidden md:block">
      {topNavLinks.map((navLink) => (
        <Link
          href={navLink.url}
          key={navLink.url}
          className={styles.topNavLink}
        >
          <TopNavIcon icon={navLink.icon} />
          {navLink.title}
        </Link>
      ))}
    </div>
  );
};

export const titleRenderer = ({ type, title, route }) => {
  const { asPath } = useRouter();

  if (type === "separator" && title === "TopNav") {
    return <TopNav path={asPath} />;
  }

  return title;
};
