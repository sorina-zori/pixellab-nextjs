const buttonClasses =
  "flex justify-center items-center border-l border-zinc-200 w-20 h-20 transition-colors hover:bg-neutral-900";

export const GridControls = () => {
  return (
    <ul className="flex border border-l-0 border-zinc-200">
      <li>
        <button type="button" title="One per row" className={buttonClasses}>
          1
        </button>
      </li>

      <li>
        <button type="button" title="Two per row" className={buttonClasses}>
          2
        </button>
      </li>

      <li>
        <button type="button" title="Two per row" className={buttonClasses}>
          4
        </button>
      </li>
    </ul>
  );
};
