interface EmptyStateProps {
  title: string;
  message: string;
  action?: React.ReactNode;
  illustration?: React.ReactNode;
}

export const EmptyState = ({
  title,
  message,
  action,
  illustration,
}: EmptyStateProps) => (
  <div className='py-8 text-center'>
    {illustration && <div className='mb-4'>{illustration}</div>}

    <h3 className='mb-2 text-lg font-medium text-gray-900'>{title}</h3>

    <p className='mb-4 text-gray-500'>{message}</p>
    {action}
  </div>
);
