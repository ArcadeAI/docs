import Link from 'next/link'; import { Button } from './ui/button';

interface SignUpButtonProps { href: string; text: string; }

export const SignUpButton = ({ href, text }: SignUpButtonProps) => (

  <Link
    href={href}
    target="_blank"
  >
    <Button>
      <span className="text-xs">{text}</span>
    </Button>
  </Link>
);

export default SignUpButton;
