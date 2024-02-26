import Link from 'next/link';

export function Title() {
  return (
    <div className="flex justify-between border border-solid border-stone-200 bg-slate-100 pb-4 pe-4 ps-4 pt-4">
      <img src={'/logo.png'} className="h-10 w-32" alt="logo" />
      <div className="flex items-center gap-4 align-middle text-base text-neutral-500">
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
          <img src={'/github.svg'} className="h-5 w-5"></img>
        </Link>
      </div>
    </div>
  );
}
