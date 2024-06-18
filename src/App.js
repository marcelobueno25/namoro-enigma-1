import NotMobile from "./pages/NotMobile";
import Router from "./routes";
import "./styles/global.scss";

const useMobileDetect = () => {
  const userAgent = typeof navigator === "undefined" ? "" : navigator.userAgent;
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );

  return isMobile;
};

const App = () => {
  const isMobile = useMobileDetect();
  if (isMobile) {
    return <NotMobile />;
  } else {
    return <Router />;
  }
};

export default App;
