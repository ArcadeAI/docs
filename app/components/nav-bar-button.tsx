'use client';
import { Button } from '@arcadeai/design-system';
import { usePathname } from 'next/navigation';
import type { ComponentProps } from 'react';

type ButtonVariant = ComponentProps<typeof Button>['variant'];

interface NavBarButtonProps {
  text: string;
  hideOnPath?: string[];
  variant?: ButtonVariant;
}

export const NavBarButton = ({
  text,
  variant = 'default',
  hideOnPath = [],
}: NavBarButtonProps) => {
  const pathname = usePathname();
  if (hideOnPath.includes(pathname)) {
    return null;
  }
  return <Button variant={variant}>{text}</Button>;
};

export default NavBarButton;
