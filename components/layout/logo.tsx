import Image from 'next/image';

interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo = ({ size = 32, className, ...props }: LogoProps) => {
  return (
    <Image
      src="/jujus.ai.png"
      alt="Logo"
      width={size}
      height={size}
      className={`bg-background ${className || ''}`}
      {...props}
    />
  );
};
