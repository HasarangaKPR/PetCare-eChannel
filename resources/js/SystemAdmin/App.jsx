import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SystemAdminLogIn from "./pages/SystemAdminLogIn";
import SystemAdminDaycareCenterAdmins from "./pages/SystemAdminDaycareCenterAdmins";
import SystemAdminResetPassword from "./pages/SystemAdminResetPassword";
import SystemAdminDashboard from "./pages/SystemAdminDashboard";
import SystemAdminEmailVerification from "./pages/SystemAdminEmailVerification";
import SystemAdminProfile from "./pages/SystemAdminProfile";
import SystemAdminForgotPassword from "./pages/SystemAdminForgotPassword";
import SystemAdminDoctors from "./pages/SystemAdminDoctors";
import SystemAdminUser from "./pages/SystemAdminUser";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/systemadmindaycarecenteradmins":
        title = "";
        metaDescription = "";
        break;
      case "/systemadminresetpassword":
        title = "";
        metaDescription = "";
        break;
      case "/systemadmindashboard":
        title = "";
        metaDescription = "";
        break;
      case "/systemadminemail-verification":
        title = "";
        metaDescription = "";
        break;
      case "/systemadminprofile":
        title = "";
        metaDescription = "";
        break;
      case "/systemadminforgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/systemadmindoctors":
        title = "";
        metaDescription = "";
        break;
      case "/systemadminuser":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SystemAdminLogIn />} />
      <Route path="/systemadmindaycarecenteradmins" element={<SystemAdminDaycareCenterAdmins />} />
      <Route
        path="/systemadminresetpassword"
        element={<SystemAdminResetPassword />}
      />
      <Route path="/systemadmindashboard" element={<SystemAdminDashboard />} />
      <Route
        path="/systemadminemail-verification"
        element={<SystemAdminEmailVerification />}
      />
      <Route path="/systemadminprofile" element={<SystemAdminProfile />} />
      <Route
        path="/systemadminforgot-password"
        element={<SystemAdminForgotPassword />}
      />
      <Route path="/systemadmindoctors" element={<SystemAdminDoctors />} />
      <Route path="/systemadminuser" element={<SystemAdminUser />} />
    </Routes>
  );
}
export default App;
