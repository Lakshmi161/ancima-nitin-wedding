export default function OrnamentDivider() {
  return (
    <div className="flex justify-center my-10">
      <img
        src="/Divider.png"
        alt="Decorative Divider"
        className="
          w-[260px]
          sm:w-[300px]
          md:w-[360px]
          lg:w-[420px]
          h-auto
          object-contain
          select-none
          pointer-events-none
        "
      />
    </div>
  );
}