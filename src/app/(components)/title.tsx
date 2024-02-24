import Link from 'next/link';

export function Title() {
  return (
    <div className="flex  pt-4 justify-between pb-4 ps-4 pe-4 bg-slate-100 border-solid border border-stone-200">
      <img src={'/logo.png'} className="w-32 h-10" alt="logo" />
      <div className="flex align-middle items-center gap-4 text-base text-neutral-500">
        <Link className="cursor-pointer" href="/">
          Home
        </Link>
        <Link className="cursor-pointer" href="/tutorial">
          Tutorial
        </Link>
        <Link className="cursor-pointer" href="/contact">
          Contact
        </Link>
        <Link className="cursor-pointer" href="www.github.com">
          <img src={'/github.svg'} className="w-5 h-5"></img>
        </Link>
      </div>
    </div>
  );
}
