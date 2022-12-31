interface SubmitProps {
  text?: string;
  formId?: string;
}

interface BottomActionsProps {
  submit?: SubmitProps;
}

export const BottomActions: React.FC<BottomActionsProps> = ({ submit }) => {
  return (
    <div className="shadow-on-scroll">
      <div>
        <div className="bg-white dark:bg-zinc-800  flex justify-end py-6 px-6">
          {submit && (
            <button type="submit" form={submit.formId}>
              <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {submit.text || "Submit"}
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
