import { EventDataQuery } from "@/types/database";
import { useForm } from "react-hook-form";
import { EventFormRow } from "./EventFormRow";

interface EventFormData {
  name: string;
  description: string;
  duration: string;
  repeats?: string;
  "optimal-possible-timeframes"?: string;
  "optimal-excluded-timeframes"?: string;
  "optimal-members"?: string;
  "required-possible-timeframes"?: string;
  "required-excluded-timeframes"?: string;
  "required-members"?: string;
}

interface EventFormProps {
  event?: EventDataQuery;
  onSubmit: (data: EventFormData) => void;
}

export const EventForm: React.FC<EventFormProps> = ({ event, onSubmit }) => {
  const { register, handleSubmit } = useForm<EventFormData>({
    defaultValues: {
      name: event?.name,
      description: event?.description || undefined,
    },
  });

  return (
    <div className="bg-white dark:bg-zinc-800 my-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <table className="w-full">
          <EventFormRow name="name" label="Name" register={register} />
          <EventFormRow
            name="description"
            label="Description"
            register={register}
          />
          <EventFormRow name="duration" label="Duration" register={register} />
          <EventFormRow name="repeats" label="Repeats" register={register} />
        </table>
        <h2 className="text-2xl pt-8 pb-4 px-2">Optimal (soft constraints)</h2>
        <table className="w-full">
          <EventFormRow
            name="optimal-possible-timeframes"
            label="Possible timeframes"
            register={register}
          />
          <EventFormRow
            name="optimal-excluded-timeframes"
            label="Excluded timeframes"
            register={register}
          />
          <EventFormRow
            name="optimal-members"
            label="Members"
            register={register}
          />
        </table>
        <h2 className="text-2xl pt-8 pb-4 px-2">Required (hard constraints)</h2>
        <table className="w-full">
          <EventFormRow
            name="required-possible-timeframes"
            label="Possible timeframes"
            register={register}
          />
          <EventFormRow
            name="required-excluded-timeframes"
            label="Excluded timeframes"
            register={register}
          />
          <EventFormRow
            name="required-members"
            label="Members"
            register={register}
          />
        </table>
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
