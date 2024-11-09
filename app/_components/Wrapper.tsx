import { cn } from '@/app/_lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn('flex min-h-full flex-col', className)}>{children}</div>
  );
};
export default Wrapper;
