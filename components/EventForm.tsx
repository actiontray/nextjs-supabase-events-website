import { EventDataQuery } from "@/types/database";
import { useForm } from "react-hook-form";
import { EventFormRow } from "./EventFormRow";

export interface EventFormData {
  name: string;
  slug: string;
  description: string;
  duration: number;
  repeats?: "never" | "interval" | "selection";
  "repeats-interval-type"?:
    | "minutes"
    | "hours"
    | "days"
    | "weeks"
    | "months"
    | "years";
  "repeats-interval-value"?: number;
  "repeats-selection-format"?: "time" | "day" | "week" | "month" | "year";
  "repeats-selection-value"?: string;
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
    watch,
  } = useForm<EventFormData>({
    defaultValues: {
      name: event?.name,
      slug: event?.slug,
      description: event?.description || undefined,
      duration: event?.duration || undefined,
      repeats: "never",
      "repeats-interval-type": "days",
      "repeats-selection-format": "day",
    },
  });

  const repeats = watch("repeats");

  return (
    <form id={formId} onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white dark:bg-zinc-800 my-10">
        <table className="w-full">
          <EventFormRow
            name="name"
            label="Name"
            type="text"
            register={register}
            disabled={disabled}
            error={!!errors.name}
            required
          />
          <EventFormRow
            name="slug"
            label="Slug"
            type="text"
            register={register}
            disabled={disabled}
            error={!!errors.slug}
            required
          />
          <EventFormRow
            name="description"
            label="Description"
            type="text"
            register={register}
            disabled={disabled}
            error={!!errors.description}
          />
          <EventFormRow
            name="duration"
            label="Duration (min)"
            type="number"
            register={register}
            disabled={disabled}
            error={!!errors.duration}
          />
          <EventFormRow
            name="repeats"
            label="Repeats"
            type="radio"
            options={[
              {
                value: "never",
                label: "Never",
              },
              {
                value: "interval",
                label: "Interval",
              },
              {
                value: "selection",
                label: "Selection",
              },
            ]}
            register={register}
            disabled={disabled}
            error={!!errors.repeats}
          />
          {repeats === "interval" && (
            <>
              <EventFormRow
                name="repeats-interval-type"
                label="Repeats interval type"
                type="radio"
                options={[
                  {
                    value: "minutes",
                    label: "Minutes",
                  },
                  {
                    value: "hours",
                    label: "Hours",
                  },
                  {
                    value: "days",
                    label: "Days",
                  },
                  {
                    value: "weeks",
                    label: "Weeks",
                  },
                  {
                    value: "months",
                    label: "Months",
                  },
                  {
                    value: "years",
                    label: "Years",
                  },
                ]}
                register={register}
                disabled={disabled}
                error={!!errors["repeats-interval-type"]}
              />
              <EventFormRow
                name="repeats-interval-value"
                label="Repeats interval value"
                type="number"
                register={register}
                disabled={disabled}
                error={!!errors["repeats-interval-value"]}
              />
            </>
          )}
          {repeats === "selection" && (
            <>
              <EventFormRow
                name="repeats-selection-format"
                label="Repeats selection format"
                type="radio"
                options={[
                  {
                    value: "time",
                    label: "Time",
                  },
                  {
                    value: "day",
                    label: "Day",
                  },
                  {
                    value: "week",
                    label: "Week",
                  },
                  {
                    value: "month",
                    label: "Month",
                  },
                  {
                    value: "year",
                    label: "Year",
                  },
                ]}
                register={register}
                disabled={disabled}
                error={!!errors["repeats-selection-format"]}
              />
              <EventFormRow
                name="repeats-selection-value"
                label="Repeats selection value"
                type="text"
                register={register}
                disabled={disabled}
                error={!!errors["repeats-selection-value"]}
              />
            </>
          )}
        </table>
        <h2 className="text-2xl pt-8 pb-4 px-2">Optimal (soft constraints)</h2>
        <table className="w-full">
          <EventFormRow
            name="optimal-possible-timeframes"
            label="Possible timeframes"
            type="text"
            register={register}
            disabled={disabled}
            error={!!errors["optimal-possible-timeframes"]}
          />
          <EventFormRow
            name="optimal-excluded-timeframes"
            label="Excluded timeframes"
            type="text"
            register={register}
            disabled={disabled}
            error={!!errors["optimal-excluded-timeframes"]}
          />
          <EventFormRow
            name="optimal-members"
            label="Members"
            type="text"
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
            type="text"
            register={register}
            disabled={disabled}
            error={!!errors["required-possible-timeframes"]}
          />
          <EventFormRow
            name="required-excluded-timeframes"
            label="Excluded timeframes"
            type="text"
            register={register}
            disabled={disabled}
            error={!!errors["required-excluded-timeframes"]}
          />
          <EventFormRow
            name="required-members"
            label="Members"
            type="text"
            register={register}
            disabled={disabled}
            error={!!errors["required-members"]}
          />
        </table>
      </div>
    </form>
  );
};
