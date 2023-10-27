import { Outlet, useNavigation } from "react-router-dom";
import { Header, NavBar, Loading } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <nav>
        <span className="text-4xl text-primary">
          <Header />
          <NavBar />
        </span>
      </nav>
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};
export default HomeLayout;
