interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
  return <main className="flex-1">{children}</main>;
};
export default Main;
