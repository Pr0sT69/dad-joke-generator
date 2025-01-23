import React from 'react';
import { cn } from '@/lib/utils';

interface ReactionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  count: number;
}

export const ReactionButton: React.FC<ReactionButtonProps> = ({
  icon,
  label,
  onClick,
  count
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 p-3 rounded-lg transition-all",
        "hover:scale-110 active:scale-95"
      )}
    >
      <div className="text-3xl">{icon}</div>
      <span className="text-sm font-bold">{count}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </button>
  );
};