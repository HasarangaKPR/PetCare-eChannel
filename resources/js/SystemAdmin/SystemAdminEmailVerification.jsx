import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SystemAdminEmailVerification.css";

const SystemAdminEmailVerification = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/systemadminresetpassword");
  }, [navigate]);

  return (
    <div className="systemadminemail-verification">
      <section className="form-contener-container">
        <form className="form-contener2">
          <h2 className="email-verification">Email Verification</h2>
          <div className="form2">
            <div className="email-feild2">
              <div className="enter-verification-code">
                Enter verification code
              </div>
              <div className="enter-verification-code-wrapper">
                <input
                  className="enter-verification-code1"
                  placeholder="Enter verification code"
                  type="text"
                />
              </div>
            </div>
          </div>
          <button className="button3" onClick={onButtonClick}>
            <div className="next">Next</div>
          </button>
        </form>
        <img className="image-6-icon2" alt="" src="/image-6@2x.png" />
      </section>
    </div>
  );
};

export default SystemAdminEmailVerification;
