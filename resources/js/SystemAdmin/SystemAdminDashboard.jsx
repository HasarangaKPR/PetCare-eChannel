import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SystemAdminDashboard.css";

const SystemAdminDashboard = () => {
  const navigate = useNavigate();

  const onLogoutClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProfileClick = useCallback(() => {
    navigate("/systemadminprofile");
  }, [navigate]);

  const onChannelingCenterAdClick = useCallback(() => {
    navigate("/systemadmindoctors");
  }, [navigate]);

  const onDaycareCenterAdClick = useCallback(() => {
    navigate("/systemadmindaycarecenteradmins");
  }, [navigate]);

  const onNormalUserClick = useCallback(() => {
    navigate("/systemadminuser");
  }, [navigate]);

  return (
    <div className="systemadmindashboard">
      <div className="navbar1">
        <img className="logo-icon1" alt="" src="/logo@2x.png" />
        <Link
          className="logout1"
          to="/"
          onClick={onLogoutClick}
        >
          Logout
        </Link>
      </div>
      <div className="main">
        <div className="sidelist1">
          <button className="dashboard6">
            <img
              className="magedashboard-icon1"
              alt=""
              src="/magedashboard1.svg"
            />
            <div className="dashboard7">Dashboard</div>
          </button>
          <button className="channeling-center-ad" onClick={onProfileClick}>
            <img
              className="magedashboard-icon1"
              alt=""
              src="/iconoirprofilecircle.svg"
            />
            <div className="profile2">Profile</div>
          </button>
          <button
            className="channeling-center-ad"
            onClick={onChannelingCenterAdClick}
          >
            <img
              className="magedashboard-icon1"
              alt=""
              src="/materialsymbolsadminpanelsettingsoutline.svg"
            />
            <div className="profile2">Doctors</div>
          </button>
          <button
            className="channeling-center-ad"
            onClick={onDaycareCenterAdClick}
          >
            <img
              className="magedashboard-icon1"
              alt=""
              src="/materialsymbolsadminpanelsettingsoutline.svg"
            />
            <div className="profile2">Daycare Center admins</div>
          </button>
          <button className="channeling-center-ad" onClick={onNormalUserClick}>
            <img
              className="magedashboard-icon1"
              alt=""
              src="/iconamoonprofilelight.svg"
            />
            <div className="profile2">Users</div>
          </button>
        </div>
        <div className="wellcom-parent">
          <div className="wellcom">
            <div className="welcome">Welcome!</div>
            <div className="all-systems-are">
              All systems are running smoothly!
            </div>
          </div>
          <div className="middle">
            <img className="image-icon" alt="" src="/image@2x.png" />
            <div className="cards">
              <div className="tdyappointments-parent">
                <div className="tdyappointments">
                  <div className="todays-appointments-parent">
                    <div className="todays-appointments">
                      Today's Appointments
                    </div>
                    <div className="div18">4567</div>
                  </div>
                </div>
                <div className="totalappointments">
                  <div className="todays-appointments-parent">
                    <div className="todays-appointments">
                      Total Appointments
                    </div>
                    <div className="div18">4567</div>
                  </div>
                </div>
              </div>
              <div className="tdyappointments-parent">
                <div className="todays-bookings">
                  <div className="todays-appointments-parent">
                    <div className="todays-bookings1">Today's Bookings</div>
                    <div className="div18">567</div>
                  </div>
                </div>
                <div className="total-bookings">
                  <div className="todays-appointments-parent">
                    <div className="todays-bookings1">Total Bookings</div>
                    <div className="div18">1567</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemAdminDashboard;
