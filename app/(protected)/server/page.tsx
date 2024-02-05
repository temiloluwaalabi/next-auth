import UserInfo from "@/components/UserInfo";
import { currentUser } from "@/lib/auth";

const Server = async () => {
  const user = await currentUser();
  return <UserInfo label="Server Component" user={user} />;
};

export default Server;
