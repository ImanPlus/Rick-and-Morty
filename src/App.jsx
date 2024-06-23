import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <main className=" min-h-96 my-10">
        {navigation.state === "loadnig" && <p>Loading...</p>}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
