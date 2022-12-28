interface EventDetailsRowProps {
  name: string;
  value: string | null | undefined;
}

export const EventDetailsRow: React.FC<EventDetailsRowProps> = ({
  name,
  value,
}) => {
  return (
    <tr>
      <td className="text-right text-lg py-4 px-2 border border-slate-700">
        {name}
      </td>
      <td className="text-left text-lg py-4 px-2 border border-slate-700">
        {value}
      </td>
    </tr>
  );
};
