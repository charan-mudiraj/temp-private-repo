export default function SectionTemplate({ children, ...props }) {
  return (
    <div
      className="bg-[#363C43] px-3 pt-4 rounded-[19px] flex"
      style={{
        boxShadow: "5.67px 5.67px 3.78px 0px #00000066",
      }}
    >
      <div className="flex flex-col">
        <img
          src="help.svg"
          className="mt-1 h-6 w-6 hover:brightness-50 hover:invert cursor-pointer transition duration-300 ease-in-out"
        />
        <img
          src="bars.svg"
          className="mt-[85px] w-6 hover:brightness-80 hover:invert cursor-pointer transition duration-300 ease-in-out"
        />
      </div>

      <div {...props}>{children}</div>
    </div>
  );
}
