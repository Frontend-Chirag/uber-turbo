import { cn } from "../../lib/utils";

type SkeletonProps = React.ComponentProps<"div">;

function Skeleton({ className, ...props }: SkeletonProps): React.JSX.Element {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "relative overflow-hidden rounded-md bg-accent/60",
        className
      )}
      {...props}
    >
      {/* shimmer layer */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </div>
  );
}

export { Skeleton };
