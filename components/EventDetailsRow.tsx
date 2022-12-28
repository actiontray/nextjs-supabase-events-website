interface EventDetailsRowProps {
  name: string;
  value: string | null | undefined;
}

export const EventDetailsRow: React.FC<EventDetailsRowProps> = ({
  name,
  value,
}) => {
  return (
    <tr className="flex max-md:flex-wrap">
      <td className="text-zinc-400 text-right max-md:text-left text-lg py-4 px-2 border border-zinc-200 dark:border-zinc-700 w-40 max-md:w-full">
        {name}
      </td>
      <td className="text-left text-lg py-4 px-2 border border-zinc-200 dark:border-zinc-700 flex-auto max-md:w-full">
        {value}
      </td>
    </tr>
  );
};
