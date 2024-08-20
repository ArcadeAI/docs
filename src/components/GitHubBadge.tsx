import IconGithub from "./icons/github";

export const GithubMenuBadge = () => (
  <a
    href="https://github.com/ArcadeAI/arcade-ai"
    className="group h-8 flex shrink-0 flex-row items-center rounded border border-primary/10 overflow-hidden transition-opacity"
    target="_blank"
    rel="nofollow noreferrer"
    title="GitHub Repository"
  >
    <div className="py-1 px-1 block bg-primary/10">
      <IconGithub className="group-hover:opacity-80 opacity-100 h-6 w-6" />
    </div>
  </a>
);
