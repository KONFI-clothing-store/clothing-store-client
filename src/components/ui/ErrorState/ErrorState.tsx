import { cn } from '@/utils/utils';

import { Button } from '../Button/Button';

interface ErrorStateProps {
  id?: string;
  title: string;
  message: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorState = ({
  id,
  title,
  message,
  onRetry,
  className,
}: ErrorStateProps) => (
  <div className={cn('py-8 text-center', className)} role='alert'>
    <h3 id={id} className='mb-2 text-xl font-semibold text-red-600'>
      {title}
    </h3>

    <p className='mb-4 text-gray-600'>{message}</p>

    {onRetry && <Button onClick={onRetry}>Try Again</Button>}
  </div>
);
