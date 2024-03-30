import Header from "@/components/Header";
import Login from "@/components/Login";
import { getServerSession } from "next-auth";

export default function Home() {
  const session = getServerSession();
  if (!session) {
    return <Login />
  }
  return (
    <>
      <Header />
      <main>
        {/* sidebar */}
        {/* feed */}
        {/* widgets */}
      </main>
    </>
  );
}
