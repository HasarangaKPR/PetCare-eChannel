import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SystemAdminForgotPassword.css";

const SystemAdminForgotPassword = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/systemadminemail-verification");
  }, [navigate]);

  return (
    <div className="systemadminforgot-password">
      <section className="frame-section">
        <form className="form-contener3">
          <h2 className="forgot-password1">Forgot Password</h2>
          <div className="form3">
            <div className="email-feild3">
              <div className="email3">Email</div>
              <div className="enter-your-email-frame">
                <input
                  className="enter-your-email2"
                  placeholder="Enter Your Email"
                  type="email"
                />
              </div>
            </div>
          </div>
          <button className="button4" onClick={onButtonClick}>
            <div className="send-verification-code">Send Verification Code</div>
          </button>
        </form>
        <img className="image-6-icon3" alt="" src="/image-6@2x.png" />
      </section>
    </div>
  );
};

export default SystemAdminForgotPassword;
