export const InputTaker = () => {
  return (
    <section>
      <div className="px-6 py-5 rounded-3xl bg-gradient-to-br from-black/[0.03] to-black/[0.01] dark:bg-gradient-to-br dark:from-white/[0.08] dark:to-white/[0.02]">
        <input
          className="outline-none w-[780px]"
          placeholder="Enter your query"
        />
        <button className="text-white cursor-pointer">Submit</button>
      </div>
    </section>
  );
};
