import "./divider.scss";

const Divider: React.FC<{ id?: string }> = ({ id = "" }) => {
  return (
    <div className="stripWrapper" id={id}>
      <div className="strip"></div>
    </div>
  );
};

export default Divider;
