"use client";
import { Logout } from "@/actions/logout";
import { useRouter } from "next/navigation";
interface LogoutButtonProps {
  children: React.ReactNode;
  // mode?: "modal" | "redirect";
  // asChild?: boolean;
}

const LogoutButton = ({
  children,
}: // mode = "redirect",
// asChild,
LogoutButtonProps) => {
  // const router = useRouter();
  const onClick = () => {
    Logout();
  };

  // if (mode === "modal") {
  //   return <span>TODO: Implement modal</span>;
  // }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LogoutButton;
