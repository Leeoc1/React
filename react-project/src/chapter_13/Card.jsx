function Card(props) {
  const { backgroundColor, children } = props;
  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxShadow: "0px 0px 4px grey",
        backgroundColor: backgroundColor || "white",
      }}
    >
      {children}
    </div>
  );
}

export default Card;
