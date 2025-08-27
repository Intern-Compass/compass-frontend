import Image from "next/image";

import { SidebarHeader } from "@/components/ui/sidebar";

export const Header = () => {
  return (
    <SidebarHeader className="mb-6 ml-3">
      <Image
        src="/assets/images/logo.svg"
        alt="MTN logo"
        width={91}
        height={45}
        priority
        className="w-[91px] h-[45px]"
      />
    </SidebarHeader>
  );
};
