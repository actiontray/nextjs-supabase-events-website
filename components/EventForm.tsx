import { EventDataQuery } from "@/types/database";
import { useForm } from "react-hook-form";
import { EventFormRow } from "./EventFormRow";

export interface EventFormData {
  name: string;
  slug: string;
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
  disabled?: boolean;
  formId?: string;
  onSubmit: (data: EventFormData) => void;
}

export const EventForm: React.FC<EventFormProps> = ({
  event,
  disabled,
  formId,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormData>({
    defaultValues: {
      name: event?.name,
      slug: event?.slug,
      description: event?.description || undefined,
      duration: event?.duration?.toString() || undefined,
    },
  });

  return (
    <form id={formId} onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white dark:bg-zinc-800 my-10">
        <table className="w-full">
          <EventFormRow
            name="name"
            label="Name"
            register={register}
            disabled={disabled}
            error={!!errors.name}
            required
          />
          <EventFormRow
            name="slug"
            label="Slug"
            register={register}
            disabled={disabled}
            error={!!errors.slug}
            required
          />
          <EventFormRow
            name="description"
            label="Description"
            register={register}
            disabled={disabled}
            error={!!errors.description}
          />
          <EventFormRow
            name="duration"
            label="Duration"
            register={register}
            disabled={disabled}
            error={!!errors.duration}
          />
          <EventFormRow
            name="repeats"
            label="Repeats"
            register={register}
            disabled={disabled}
            error={!!errors.repeats}
          />
        </table>
        <h2 className="text-2xl pt-8 pb-4 px-2">Optimal (soft constraints)</h2>
        <table className="w-full">
          <EventFormRow
            name="optimal-possible-timeframes"
            label="Possible timeframes"
            register={register}
            disabled={disabled}
            error={!!errors["optimal-possible-timeframes"]}
          />
          <EventFormRow
            name="optimal-excluded-timeframes"
            label="Excluded timeframes"
            register={register}
            disabled={disabled}
            error={!!errors["optimal-excluded-timeframes"]}
          />
          <EventFormRow
            name="optimal-members"
            label="Members"
            register={register}
            disabled={disabled}
            error={!!errors["optimal-members"]}
          />
        </table>
        <h2 className="text-2xl pt-8 pb-4 px-2">Required (hard constraints)</h2>
        <table className="w-full">
          <EventFormRow
            name="required-possible-timeframes"
            label="Possible timeframes"
            register={register}
            disabled={disabled}
            error={!!errors["required-possible-timeframes"]}
          />
          <EventFormRow
            name="required-excluded-timeframes"
            label="Excluded timeframes"
            register={register}
            disabled={disabled}
            error={!!errors["required-excluded-timeframes"]}
          />
          <EventFormRow
            name="required-members"
            label="Members"
            register={register}
            disabled={disabled}
            error={!!errors["required-members"]}
          />
        </table>
      </div>
    </form>
  );
};
