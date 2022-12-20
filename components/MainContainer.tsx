interface MainContainerProps {
  children: React.ReactNode;
}

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <main className="container mx-auto px-4">{children}</main>;
};
