import { SidebarTrigger } from "./ui/sidebar";

export default function Header() {
  return (
    <header className="sticky top-0 flex w-full bg-white drop-shadow-1">
      <div className="flex flex-grow items-center gap-3 pr-4 py-4 shadow-2 md:pr-6 2xl:pr-11">
        <SidebarTrigger />
        <div>Header</div>
      </div>
    </header>
  );
}
