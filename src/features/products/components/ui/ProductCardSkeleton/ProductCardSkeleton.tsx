import { cn } from '@/utils/utils';

interface ProductCardSkeletonProps {
  variant?: 'main' | 'secondary';
  className?: string;
}

export const ProductCardSkeleton = ({
  variant = 'main',
  className,
}: ProductCardSkeletonProps) => {
  const bgColor = variant === 'main' ? 'bg-gray-200' : 'bg-gray-700';

  return (
    <div
      className={cn(
        className,
        'max-w-[200px] animate-pulse space-y-4 max-2xs:max-w-full',
      )}
    >
      <div className={cn('h-[202px] w-full rounded-[20px]', bgColor)} />
      <div className={cn('h-6 w-3/4 rounded-md', bgColor)} />
      <div className={cn('flex items-center justify-between gap-x-1')}>
        <div className={cn('h-4 w-[140px] rounded-md', bgColor)} />
        <div className={cn('mr-3 h-4 w-6 rounded-md opacity-60', bgColor)} />
      </div>
      <div className={cn('h-6 w-1/3 rounded-md', bgColor)} />
    </div>
  );
};
