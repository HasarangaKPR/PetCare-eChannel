import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SystemAdminProfile.css";

const SystemAdminProfile = () => {
  const navigate = useNavigate();

  const onLogoutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDashboardContainerClick = useCallback(() => {
    navigate("/systemadmindashboard");
  }, [navigate]);

  const onDashboardContainerClick1 = useCallback(() => {
    navigate("/systemadmindoctors");
  }, [navigate]);

  const onDashboardContainerClick2 = useCallback(() => {
    navigate("/systemadmindaycarecenteradmins");
  }, [navigate]);

  const onDashboardContainerClick3 = useCallback(() => {
    navigate("/systemadminuser");
  }, [navigate]);

  return (
    <div className="systemadminprofile">
      <div className="navbar2">
        <img className="logo-icon2" alt="" src="/logo@2x.png" />
        <div className="logout2" onClick={onLogoutTextClick}>
          Logout
        </div>
      </div>
      <div className="sidelist-parent">
        <div className="sidelist2">
          <div className="dashboard8" onClick={onDashboardContainerClick}>
            <img
              className="magedashboard-icon2"
              alt=""
              src="/magedashboard.svg"
            />
            <div className="dashboard9">Dashboard</div>
          </div>
          <div className="dashboard10">
            <img
              className="iconoirprofile-circle2"
              alt=""
              src="/iconoirprofilecircle1.svg"
            />
            <div className="dashboard9">Profile</div>
          </div>
          <div className="dashboard8" onClick={onDashboardContainerClick1}>
            <img
              className="iconoirprofile-circle2"
              alt=""
              src="/materialsymbolsadminpanelsettingsoutline.svg"
            />
            <div className="dashboard9">Doctors</div>
          </div>
          <div className="dashboard8" onClick={onDashboardContainerClick2}>
            <img
              className="iconoirprofile-circle2"
              alt=""
              src="/materialsymbolsadminpanelsettingsoutline.svg"
            />
            <div className="dashboard9">Daycare Center admins</div>
          </div>
          <div className="dashboard8" onClick={onDashboardContainerClick3}>
            <img
              className="iconoirprofile-circle2"
              alt=""
              src="/iconamoonprofilelight.svg"
            />
            <div className="dashboard9">Users</div>
          </div>
        </div>
        <div className="main-content1">
          <div className="top">
            <div className="frame-parent">
              <div className="profile-information-parent">
                <div className="profile-information">Profile Information</div>
                <div className="update-your-accounts">
                  Update your account’s profile information and email address
                </div>
              </div>
              <div className="frame-group">
                <div className="full-name-parent">
                  <div className="full-name">Full Name</div>
                  <div className="enter-your-full-name-wrapper">
                    <input
                      className="enter-your-full"
                      placeholder="Enter Your Full Name"
                      type="text"
                    />
                  </div>
                </div>
                <div className="full-name-parent">
                  <div className="full-name">Email</div>
                  <div className="enter-your-full-name-wrapper">
                    <input
                      className="enter-your-full"
                      placeholder="Enter Your Email"
                      type="email"
                    />
                  </div>
                </div>
              </div>
              <button className="sign-in-wrapper">
                <div className="sign-in">Save</div>
              </button>
            </div>
          </div>
          <div className="bottem">
            <div className="frame-container">
              <div className="profile-information-parent">
                <div className="profile-information">Update password</div>
                <div className="update-your-accounts">{`Ensure your account is using a long, random password to stay secure. `}</div>
              </div>
              <div className="frame-group">
                <div className="full-name-parent">
                  <div className="full-name">Current Password</div>
                  <div className="enter-your-full-name-wrapper">
                    <input
                      className="enter-your-full"
                      placeholder="Enter Your Current Password"
                      type="password"
                    />
                  </div>
                </div>
                <div className="full-name-parent">
                  <div className="full-name">New Password</div>
                  <input
                    className="frame-child"
                    placeholder="Enter Your New Password"
                    type="password"
                  />
                </div>
                <div className="full-name-parent">
                  <div className="full-name">New Password</div>
                  <div className="enter-your-full-name-wrapper">
                    <input
                      className="enter-your-full"
                      placeholder="Enter Your New Password"
                      type="password"
                    />
                  </div>
                </div>
              </div>
              <button className="sign-in-wrapper">
                <div className="sign-in">Save</div>
              </button>
            </div>
          </div>
          <div className="bottem">
            <div className="frame-container">
              <div className="profile-information-parent">
                <div className="profile-information">Delete Account</div>
                <div className="update-your-accounts">
                  Once your account is deleted, all of its resources and data
                  will be permanently deleted. Before deleting account, please
                  download any data or information that you wish to retain.
                </div>
              </div>
              <button className="sign-in-frame">
                <div className="sign-in">Deleted Account</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemAdminProfile;
