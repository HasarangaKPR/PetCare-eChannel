import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SystemAdminDaycareCenterAdmins.css";

const SystemAdminDaycareCenterAdmins = () => {
  const navigate = useNavigate();

  const onLogoutClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDashboardClick = useCallback(() => {
    navigate("/systemadmindashboard");
  }, [navigate]);

  const onDashboardClick1 = useCallback(() => {
    navigate("/systemadminprofile");
  }, [navigate]);

  const onDashboardClick2 = useCallback(() => {
    navigate("/systemadmindoctors");
  }, [navigate]);

  const onDashboardClick3 = useCallback(() => {
    navigate("/systemadminuser");
  }, [navigate]);

  return (
    <div className="systemadmindaycarecenteradmins">
      <header className="navbar">
        <img className="logo-icon" alt="" src="/logo@2x.png" />
        <button className="logout" onClick={onLogoutClick}>
          Logout
        </button>
      </header>
      <div className="main-content">
        <div className="sidelist">
          <button className="dashboard" onClick={onDashboardClick}>
            <img
              className="magedashboard-icon"
              alt=""
              src="/magedashboard.svg"
            />
            <div className="profile">Dashboard</div>
          </button>
          <button className="dashboard" onClick={onDashboardClick1}>
            <img
              className="iconoirprofile-circle"
              alt=""
              src="/iconoirprofilecircle.svg"
            />
            <div className="profile">Profile</div>
          </button>
          <button className="dashboard" onClick={onDashboardClick2}>
            <img
              className="iconoirprofile-circle"
              alt=""
              src="/materialsymbolsadminpanelsettingsoutline.svg"
            />
            <div className="profile">Doctors</div>
          </button>
          <button className="dashboard4">
            <img
              className="iconoirprofile-circle"
              alt=""
              src="/materialsymbolsadminpanelsettingsoutline1.svg"
            />
            <div className="daycare-center-admins">Daycare Center admins</div>
          </button>
          <button className="dashboard" onClick={onDashboardClick3}>
            <img
              className="iconoirprofile-circle"
              alt=""
              src="/iconamoonprofilelight.svg"
            />
            <div className="profile">Users</div>
          </button>
        </div>
        <div className="table-contaner">
          <div className="heder-text">
            <div className="actions">Daycare Center Admins Table</div>
            <button className="button">
              <img
                className="iconoirprofile-circle"
                alt=""
                src="/mdiuseraddoutline.svg"
              />
              <div className="add-user">Add User</div>
            </button>
          </div>
          <div className="table">
            <div className="coloumn1">
              <div className="header-cell" />
              <div className="item-cell">
                <img
                  className="item-cell-child"
                  alt=""
                  src="/ellipse-12@2x.png"
                />
              </div>
              <div className="item-cell">
                <img
                  className="item-cell-child"
                  alt=""
                  src="/ellipse-121@2x.png"
                />
              </div>
              <div className="item-cell">
                <img
                  className="item-cell-child"
                  alt=""
                  src="/ellipse-122@2x.png"
                />
              </div>
              <div className="item-cell">
                <img
                  className="item-cell-child"
                  alt=""
                  src="/ellipse-123@2x.png"
                />
              </div>
              <div className="item-cell">
                <img
                  className="item-cell-child"
                  alt=""
                  src="/ellipse-124@2x.png"
                />
              </div>
              <div className="item-cell">
                <img
                  className="item-cell-child"
                  alt=""
                  src="/ellipse-125@2x.png"
                />
              </div>
              <div className="item-cell">
                <img
                  className="item-cell-child"
                  alt=""
                  src="/ellipse-126@2x.png"
                />
              </div>
              <div className="item-cell">
                <img
                  className="item-cell-child"
                  alt=""
                  src="/ellipse-127@2x.png"
                />
              </div>
              <div className="item-cell">
                <img
                  className="item-cell-child"
                  alt=""
                  src="/ellipse-128@2x.png"
                />
              </div>
              <div className="item-cell">
                <img
                  className="item-cell-child"
                  alt=""
                  src="/ellipse-129@2x.png"
                />
              </div>
              <div className="item-cell">
                <img
                  className="item-cell-child"
                  alt=""
                  src="/ellipse-1210@2x.png"
                />
              </div>
              <div className="item-cell">
                <img
                  className="item-cell-child"
                  alt=""
                  src="/ellipse-1211@2x.png"
                />
              </div>
              <div className="item-cell">
                <img
                  className="item-cell-child"
                  alt=""
                  src="/ellipse-1212@2x.png"
                />
              </div>
              <div className="item-cell">
                <img
                  className="item-cell-child"
                  alt=""
                  src="/ellipse-1213@2x.png"
                />
              </div>
              <div className="item-cell">
                <img
                  className="item-cell-child"
                  alt=""
                  src="/ellipse-1214@2x.png"
                />
              </div>
              <div className="item-cell">
                <img
                  className="item-cell-child"
                  alt=""
                  src="/ellipse-1215@2x.png"
                />
              </div>
              <div className="item-cell">
                <img
                  className="item-cell-child"
                  alt=""
                  src="/ellipse-1216@2x.png"
                />
              </div>
              <div className="item-cell">
                <img
                  className="item-cell-child"
                  alt=""
                  src="/ellipse-1217@2x.png"
                />
              </div>
            </div>
            <div className="coloumn2">
              <div className="header-cell1">
                <div className="name">Name</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Virginia Gusikowski</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Jay Lakin</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Ruth Schamberger</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Colin Lesch</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Lula Thiel</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Dave Casper</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Brooke Ondricka</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Terry Douglas</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Vera Kihn</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Clinton Schaden</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Marilyn McDermott</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Merle Jakubowski</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Lorraine Stroman</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Clarence Donnelly</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Angie Haley</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Wallace Bruen</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">
                  Gina Aufderhar-Padberg
                </div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Cody Ondricka</div>
              </div>
            </div>
            <div className="coloumn2">
              <div className="header-cell1">
                <div className="name">Email</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Isabel92@hotmail.com</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">
                  Chester.Hagenes@gmail.com
                </div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">
                  Michele_Pfannerstill43@hotmail.com
                </div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">
                  Guadalupe_Jast@yahoo.com
                </div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Pearl36@gmail.com</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Damon5@yahoo.com</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">
                  Kathryn_Bode@gmail.com
                </div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Duane6@yahoo.com</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">
                  Alyssa_Daniel@yahoo.com
                </div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">
                  Ronnie_Little@gmail.com
                </div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Ginger2@hotmail.com</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Brian98@gmail.com</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Kristi69@gmail.com</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">
                  Julius.Yost@hotmail.com
                </div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">Cristina43@yahoo.com</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">
                  Abel.McGlynn@yahoo.com
                </div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">
                  Annie_Hand-Huel@gmail.com
                </div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">
                  Alfred.Casper@gmail.com
                </div>
              </div>
            </div>
            <div className="coloumn2">
              <div className="header-cell3">
                <div className="created-at">Created At</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">8/16/13</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">8/15/17</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">6/21/19</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">4/21/12</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">9/23/16</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">10/6/13</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">8/30/14</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">1/15/12</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">8/21/15</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">5/27/15</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">8/2/19</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">7/27/13</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">4/4/18</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">11/7/16</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">9/18/16</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">5/27/15</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">3/4/16</div>
              </div>
              <div className="item-cell">
                <div className="virginia-gusikowski">5/7/16</div>
              </div>
            </div>
            <div className="coloumn5">
              <div className="header-cell4">
                <div className="actions">Actions</div>
              </div>
              <div className="item-cell">
                <div className="action">
                  <button className="delete-button">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button">
                    <img className="vector-icon1" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell">
                <div className="action">
                  <button className="delete-button">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button">
                    <img className="vector-icon1" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell">
                <div className="action">
                  <button className="delete-button">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button">
                    <img className="vector-icon1" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell">
                <div className="action">
                  <button className="delete-button">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button">
                    <img className="vector-icon1" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell">
                <div className="action">
                  <button className="delete-button">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button">
                    <img className="vector-icon1" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell">
                <div className="action">
                  <button className="delete-button">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button">
                    <img className="vector-icon1" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell">
                <div className="action">
                  <button className="delete-button">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button">
                    <img className="vector-icon1" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell">
                <div className="action">
                  <button className="delete-button">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button">
                    <img className="vector-icon1" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell">
                <div className="action">
                  <button className="delete-button">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button">
                    <img className="vector-icon1" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell">
                <div className="action">
                  <button className="delete-button">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button">
                    <img className="vector-icon1" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell">
                <div className="action">
                  <button className="delete-button">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button">
                    <img className="vector-icon1" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell">
                <div className="action">
                  <button className="delete-button">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button">
                    <img className="vector-icon1" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell">
                <div className="action">
                  <button className="delete-button">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button">
                    <img className="vector-icon1" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell">
                <div className="action">
                  <button className="delete-button">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button">
                    <img className="vector-icon1" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell">
                <div className="action">
                  <button className="delete-button">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button">
                    <img className="vector-icon1" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell">
                <div className="action">
                  <button className="delete-button">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button">
                    <img className="vector-icon1" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell">
                <div className="action">
                  <button className="delete-button">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button">
                    <img className="vector-icon1" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell">
                <div className="action">
                  <button className="delete-button">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button">
                    <img className="vector-icon1" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemAdminDaycareCenterAdmins;
