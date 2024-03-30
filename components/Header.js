import Image from "next/image";
import { BellIcon, ChatBubbleOvalLeftEllipsisIcon, ChevronDownIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import { FlagIcon, PlayIcon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import HeaderIcon from "./HeaderIcon";
function Header() {
  return <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
    {/* Header left */}
    <div className="flex items-center">
      <Image src="https://links.papareact.com/5me" width={40} height={40} alt="fb-logo.jpg" />
      <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">

        <MagnifyingGlassIcon className="h-6 text-gray-600" />
        <input className="hidden md:inline-flex ml-2 flex-shrink items-center bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search Facebook" />
      </div>
    </div>
    {/* Header center */}
    <div className="flex justify-center flex-grow">
      <div className="flex space-x-6 md:space-x-2">
        <HeaderIcon active Icon={HomeIcon} />
        <HeaderIcon Icon={FlagIcon} />
        <HeaderIcon Icon={PlayIcon} />
        <HeaderIcon Icon={ShoppingCartIcon} />
        <HeaderIcon Icon={UserGroupIcon} />
      </div>
    </div>
    {/* Header right */}

    <div className="flex items-center sm:space-x-2 justify-end">
      {/* Profile pic */}
      <p className="whitespace-nowrap font-semibold pr-3">Aryan Srivastava</p>
      <ChatBubbleOvalLeftEllipsisIcon className="icon" />
      <BellIcon className="icon" />
      <ChevronDownIcon className="icon" />
    </div>
  </div>;
}

export default Header;
