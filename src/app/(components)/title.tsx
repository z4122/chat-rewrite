import Image from 'next/image';
import { Language } from './language';

export function Title() {
  return (
    <div className="flex justify-between border border-solid border-stone-200 bg-slate-100 pb-4 pe-4 ps-4 pt-4">
      <Image
        alt={'logo'}
        src={'/logo.png'}
        className="h-10 w-32"
        width={128}
        height={40}
      />
      <div className="flex items-center gap-4 align-middle text-base text-neutral-500">
        {/* <Link className="cursor-pointer" href="/">
          Home
        </Link>
        <Link className="cursor-pointer" href="/tutorial">
          Tutorial
        </Link>
        <Link className="cursor-pointer" href="/contact">
          Contact
        </Link> */}
        <Language />
        <a
          className="cursor-pointer"
          href="https://github.com/z4122/chat-rewrite"
        >
          <Image
            alt={'github'}
            src={'/github.svg'}
            className="h-5 w-5"
            width={20}
            height={20}
          ></Image>
        </a>
      </div>
    </div>
  );
}
