import { cookies } from "next/headers";
import Feed from "./(pages)/(home)/_components/feed";
import ContentWrapper from "./components/ContentWrapper";
import LayoutWrapper from "./components/layoutWrapper";
import LandingPage from "./components/LandingPage";

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return <LandingPage />;
  }

  return (
    <LayoutWrapper>
      <ContentWrapper>
        <Feed />
      </ContentWrapper>
    </LayoutWrapper>
  );
}
