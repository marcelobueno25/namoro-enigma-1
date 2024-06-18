import NotMobile from "./pages/NotMobile";
import Router from "./routes";
import "./styles/global.scss";

const App = () => {
  const isMobile = window.matchMedia(
    "only screen and (max-width: 760px)"
  ).matches;

  if (isMobile) {
    return <NotMobile />;
  } else {
    return <Router />;
  }
};

export default App;
