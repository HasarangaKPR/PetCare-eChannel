import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SystemAdminResetPassword.css";

const SystemAdminResetPassword = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="systemadminresetpassword">
      <section className="form-contener-group">
        <form className="form-contener1">
          <h2 className="reset-password">Reset Password</h2>
          <div className="form1">
            <div className="email-feild1">
              <div className="new-password">New Password</div>
              <div className="enter-your-new-password-wrapper">
                <input
                  className="enter-your-new"
                  placeholder="Enter Your New Password"
                  type="password"
                />
              </div>
            </div>
            <div className="email-feild1">
              <div className="new-password">Comfirm New Password</div>
              <div className="enter-your-new-password-again-wrapper">
                <input
                  className="enter-your-new1"
                  placeholder="Enter Your New Password Again"
                  type="password"
                />
              </div>
            </div>
          </div>
          <button className="button2" onClick={onButtonClick}>
            <div className="reset">Reset</div>
          </button>
        </form>
        <img className="image-6-icon1" alt="" src="/image-6@2x.png" />
      </section>
    </div>
  );
};

export default SystemAdminResetPassword;
