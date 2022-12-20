import { EventDataQuery } from "@/types/database";
import { useForm } from "react-hook-form";

interface EventFormProps {
  event?: EventDataQuery;
  onSubmit: () => void;
}

export const EventForm: React.FC<EventFormProps> = ({ event, onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="bg-white dark:bg-zinc-800 my-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-2 px-2">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="py-2 px-2">
          <label htmlFor="description">Description</label>
          <input type="text" id="description" />
        </div>
        <div className="py-2 px-2">
          <label htmlFor="repeats">Repeats</label>
          <input type="text" id="repeats" />
        </div>
        <h2 className="text-2xl pt-8 pb-4 px-2">Optimal (soft constraints)</h2>
        <div className="py-2 px-2">
          <label htmlFor="optimal-possible-timeframes">
            Possible timeframes
          </label>
          <input type="text" id="optimal-possible-timeframes" />
        </div>
        <div className="py-2 px-2">
          <label htmlFor="optimal-excluded-timeframes">
            Excluded timeframes
          </label>
          <input type="text" id="optimal-excluded-timeframes" />
        </div>
        <div className="py-2 px-2">
          <label htmlFor="optimal-members">Members</label>
          <input type="text" id="optimal-members" />
        </div>
        <h2 className="text-2xl pt-8 pb-4 px-2">Required (hard constraints)</h2>
        <div className="py-2 px-2">
          <label htmlFor="required-possible-timeframes">
            Possible timeframes
          </label>
          <input type="text" id="required-possible-timeframes" />
        </div>
        <div className="py-2 px-2">
          <label htmlFor="required-excluded-timeframes">
            Excluded timeframes
          </label>
          <input type="text" id="required-excluded-timeframes" />
        </div>
        <div className="py-2 px-2">
          <label htmlFor="required-members">Members</label>
          <input type="text" id="required-members" />
        </div>
        <div className="flex justify-end py-6 px-6">
          <button type="submit">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save event
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};
