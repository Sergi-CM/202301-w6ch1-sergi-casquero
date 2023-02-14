import CardList from "../CardList/CardList";
import Header from "../Header/Header";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <CardList />
      </main>
    </>
  );
};

export default Layout;
