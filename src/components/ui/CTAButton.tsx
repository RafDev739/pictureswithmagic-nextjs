import Link from 'next/link';
import { siteConfig } from '@/config/site';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({
  variant = 'primary',
  size = 'md',
  href = '/contact',
  children,
  className = '',
  onClick,
}: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-accent text-white hover:bg-accent-dark focus:ring-accent shadow-md hover:shadow-lg hover:-translate-y-0.5',
    secondary: 'bg-white text-accent border-2 border-accent hover:bg-accent hover:text-white focus:ring-accent',
    outline: 'bg-transparent text-neutral-700 border-2 border-neutral-300 hover:border-accent hover:text-accent focus:ring-accent',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const buttonContent = children || siteConfig.cta.primary;

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={combinedClassName}
        type="button"
      >
        {buttonContent}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={combinedClassName}
    >
      {buttonContent}
    </Link>
  );
}
