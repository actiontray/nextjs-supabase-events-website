interface ContentContainerProps {
  children: React.ReactNode;
}

export const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
}) => {
  return <div className="container mx-auto px-4">{children}</div>;
};
