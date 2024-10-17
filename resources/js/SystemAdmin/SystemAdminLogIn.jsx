import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SystemAdminLogIn.css";

const SystemAdminLogIn = () => {
  const navigate = useNavigate();

  const onForgotPasswordClick = useCallback(() => {
    navigate("/systemadminforgot-password");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/systemadmindashboard");
  }, [navigate]);

  return (
    <div className="systemadminlogin">
      <section className="form-contener-parent">
        <form className="form-contener">
          <h2 className="log-in">LOG IN</h2>
          <div className="form">
            <div className="email-feild">
              <div className="password">Email</div>
              <div className="enter-your-email-wrapper">
                <input
                  className="enter-your-email"
                  placeholder="Enter Your Email"
                  type="email"
                />
              </div>
            </div>
            <div className="email-feild">
              <div className="password">Password</div>
              <div className="enter-your-email-wrapper">
                <input
                  className="enter-your-password"
                  placeholder="Enter Your Password"
                  type="password"
                />
              </div>
              <button
                className="forgot-password"
                onClick={onForgotPasswordClick}
              >
                Forgot password?
              </button>
            </div>
          </div>
          <button className="button1" onClick={onButtonClick}>
            <div className="log-in1">Log In</div>
          </button>
        </form>
        <img className="image-6-icon" alt="" src="/image-6@2x.png" />
      </section>
    </div>
  );
};

export default SystemAdminLogIn;
