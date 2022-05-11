const Modals = ({ open, children }) => {
  if (!open) {
    return null;
  } else {
    return <div>{children}</div>;
  }
};

export default Modals;
