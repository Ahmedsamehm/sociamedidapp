import Feed from "./(pages)/(home)/_components/feed";
import ContentWrapper from "./components/ContentWrapper";
import LayoutWrapper from "./components/layoutWrapper";

export default function Home() {
  return (
    <LayoutWrapper>
      <ContentWrapper>
        <Feed />
      </ContentWrapper>
    </LayoutWrapper>
  );
}
