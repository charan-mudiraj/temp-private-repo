export default function Hr() {
  return (
    <div
      className="h-1 rounded-full mx-16"
      style={{
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.33)",
        background:
          "linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
      }}
    ></div>
  );
}
