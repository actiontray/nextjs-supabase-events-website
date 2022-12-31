import { useRouter } from "next/router";
import BackIcon from "./icons/BackIcon";

interface BackProps {
  text?: string;
  href: string;
}

interface TopActionsProps {
  back?: BackProps;
}

export const TopActions: React.FC<TopActionsProps> = ({ back }) => {
  const router = useRouter();

  const handleBackClick = () => {
    if (back?.href) {
      router.push(back.href);
    }
  };

  return (
    <div className="pt-6">
      {back && (
        <button onClick={handleBackClick}>
          <div className="border border-zinc-400 dark:border-zinc-600 font-bold flex gap-2 py-2 px-4 rounded">
            <BackIcon />
            {back.text}
          </div>
        </button>
      )}
    </div>
  );
};
