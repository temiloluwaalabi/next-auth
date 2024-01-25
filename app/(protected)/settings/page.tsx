import { auth } from "@/auth";
const SettingsPage = async () => {
  const session = await auth();
  return (
    <>
      <div>This page is protected</div>
      <div>{JSON.stringify(session)}</div>
    </>
  );
};

export default SettingsPage;
