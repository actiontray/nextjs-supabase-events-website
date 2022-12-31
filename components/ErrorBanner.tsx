interface ErrorBannerProps {
  title: string;
  subtitle: string;
}

export const ErrorBanner: React.FC<ErrorBannerProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">{title}</strong>
      <br />
      <span className="block sm:inline">{subtitle}</span>
    </div>
  );
};
