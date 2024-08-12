import { useAtom } from "jotai";
import { showSidebarStatus } from "@/app/configs/constants";

const useToggleSidebar = () => {
  const [showSidebar,setShowSidebar] = useAtom(showSidebarStatus)
  return { showSidebar,setShowSidebar }
}

export default useToggleSidebar;
