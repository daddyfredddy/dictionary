import { useContext} from "react";
import Navigation from "./Components/Navigation";
import FormSearch from "./Components/FormSearch";
import UserCard from "./Components/UserCard";
import { ThemeContext } from "./Components/ContextTheme";

export const App = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div
      className={
        darkTheme
          ? "bg-kalas8 h-screen lg:w-8/12 lg:mx-auto lg:m-auto xl:m-auto xl:mx-auto"
          : "bg-kalas1 h-screen lg:w-8/12  lg:mx-auto lg:m-auto xl:bg-kalas1"
      }
    >
      <div>
        <Navigation />
      </div>
      <div>
        <FormSearch />
      </div>
      <div>
        <UserCard />
      </div>
    </div>
  );
};

export default App;
