import { cn } from '@/utils/utils';

interface LoadMoreButtonProps {
  addNewClothes: () => void;
  className?: string;
}

export function LoadMoreButton({
  addNewClothes,
  className,
}: LoadMoreButtonProps) {
  return (
    <button
      onClick={addNewClothes}
      className={cn(
        'mx-auto mt-[36px] block rounded-[62px] border border-gray-200 px-20 py-[13.5px] duration-500 hover:bg-gray-300',
        className,
      )}
    >
      Add more
    </button>
  );
}
