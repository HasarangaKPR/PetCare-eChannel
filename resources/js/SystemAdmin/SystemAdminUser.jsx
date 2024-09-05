import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SystemAdminUser.css";

const SystemAdminUser = () => {
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
    navigate("/systemadmindaycarecenteradmins");
  }, [navigate]);

  return (
    <div className="systemadminuser">
      <header className="navbar4">
        <img className="logo-icon4" alt="" src="/logo@2x.png" />
        <button className="logout4" onClick={onLogoutClick}>
          Logout
        </button>
      </header>
      <div className="main-content3">
        <div className="sidelist4">
          <button className="dashboard20" onClick={onDashboardClick}>
            <img
              className="magedashboard-icon4"
              alt=""
              src="/magedashboard.svg"
            />
            <div className="dashboard21">Dashboard</div>
          </button>
          <button className="dashboard20" onClick={onDashboardClick1}>
            <img
              className="iconoirprofile-circle4"
              alt=""
              src="/iconoirprofilecircle.svg"
            />
            <div className="dashboard21">Profile</div>
          </button>
          <button className="dashboard20" onClick={onDashboardClick2}>
            <img
              className="iconoirprofile-circle4"
              alt=""
              src="/materialsymbolsadminpanelsettingsoutline.svg"
            />
            <div className="dashboard21">Doctors</div>
          </button>
          <button className="dashboard20" onClick={onDashboardClick3}>
            <img
              className="iconoirprofile-circle4"
              alt=""
              src="/materialsymbolsadminpanelsettingsoutline.svg"
            />
            <div className="dashboard21">Daycare Center admins</div>
          </button>
          <button className="dashboard25">
            <img
              className="iconoirprofile-circle4"
              alt=""
              src="/iconamoonprofilelight1.svg"
            />
            <div className="users4">Users</div>
          </button>
        </div>
        <div className="table-contaner2">
          <div className="heder-text2">
            <div className="user-table">User Table</div>
            <button className="button6">
              <img
                className="iconoirprofile-circle4"
                alt=""
                src="/mdiuseraddoutline.svg"
              />
              <div className="add-user2">Add User</div>
            </button>
          </div>
          <div className="table2">
            <div className="coloumn12">
              <div className="header-cell10" />
              <div className="item-cell180">
                <img
                  className="item-cell-child33"
                  alt=""
                  src="/ellipse-12@2x.png"
                />
              </div>
              <div className="item-cell180">
                <img
                  className="item-cell-child33"
                  alt=""
                  src="/ellipse-121@2x.png"
                />
              </div>
              <div className="item-cell180">
                <img
                  className="item-cell-child33"
                  alt=""
                  src="/ellipse-122@2x.png"
                />
              </div>
              <div className="item-cell180">
                <img
                  className="item-cell-child33"
                  alt=""
                  src="/ellipse-123@2x.png"
                />
              </div>
              <div className="item-cell180">
                <img
                  className="item-cell-child33"
                  alt=""
                  src="/ellipse-124@2x.png"
                />
              </div>
              <div className="item-cell180">
                <img
                  className="item-cell-child33"
                  alt=""
                  src="/ellipse-125@2x.png"
                />
              </div>
              <div className="item-cell180">
                <img
                  className="item-cell-child33"
                  alt=""
                  src="/ellipse-126@2x.png"
                />
              </div>
              <div className="item-cell180">
                <img
                  className="item-cell-child33"
                  alt=""
                  src="/ellipse-127@2x.png"
                />
              </div>
              <div className="item-cell180">
                <img
                  className="item-cell-child33"
                  alt=""
                  src="/ellipse-128@2x.png"
                />
              </div>
              <div className="item-cell180">
                <img
                  className="item-cell-child33"
                  alt=""
                  src="/ellipse-129@2x.png"
                />
              </div>
              <div className="item-cell180">
                <img
                  className="item-cell-child33"
                  alt=""
                  src="/ellipse-1210@2x.png"
                />
              </div>
              <div className="item-cell180">
                <img
                  className="item-cell-child33"
                  alt=""
                  src="/ellipse-1211@2x.png"
                />
              </div>
              <div className="item-cell180">
                <img
                  className="item-cell-child33"
                  alt=""
                  src="/ellipse-1212@2x.png"
                />
              </div>
              <div className="item-cell180">
                <img
                  className="item-cell-child33"
                  alt=""
                  src="/ellipse-1213@2x.png"
                />
              </div>
              <div className="item-cell180">
                <img
                  className="item-cell-child33"
                  alt=""
                  src="/ellipse-1214@2x.png"
                />
              </div>
              <div className="item-cell180">
                <img
                  className="item-cell-child33"
                  alt=""
                  src="/ellipse-1215@2x.png"
                />
              </div>
              <div className="item-cell180">
                <img
                  className="item-cell-child33"
                  alt=""
                  src="/ellipse-1216@2x.png"
                />
              </div>
              <div className="item-cell180">
                <img
                  className="item-cell-child33"
                  alt=""
                  src="/ellipse-1217@2x.png"
                />
              </div>
            </div>
            <div className="coloumn22">
              <div className="header-cell11">
                <div className="name2">Name</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Virginia Gusikowski</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Jay Lakin</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Ruth Schamberger</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Colin Lesch</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Lula Thiel</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Dave Casper</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Brooke Ondricka</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Terry Douglas</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Vera Kihn</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Clinton Schaden</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Marilyn McDermott</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Merle Jakubowski</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Lorraine Stroman</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Clarence Donnelly</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Angie Haley</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Wallace Bruen</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">
                  Gina Aufderhar-Padberg
                </div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Cody Ondricka</div>
              </div>
            </div>
            <div className="coloumn22">
              <div className="header-cell11">
                <div className="name2">Email</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Isabel92@hotmail.com</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">
                  Chester.Hagenes@gmail.com
                </div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">
                  Michele_Pfannerstill43@hotmail.com
                </div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">
                  Guadalupe_Jast@yahoo.com
                </div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Pearl36@gmail.com</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Damon5@yahoo.com</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">
                  Kathryn_Bode@gmail.com
                </div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Duane6@yahoo.com</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">
                  Alyssa_Daniel@yahoo.com
                </div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">
                  Ronnie_Little@gmail.com
                </div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Ginger2@hotmail.com</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Brian98@gmail.com</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Kristi69@gmail.com</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">
                  Julius.Yost@hotmail.com
                </div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">Cristina43@yahoo.com</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">
                  Abel.McGlynn@yahoo.com
                </div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">
                  Annie_Hand-Huel@gmail.com
                </div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">
                  Alfred.Casper@gmail.com
                </div>
              </div>
            </div>
            <div className="coloumn22">
              <div className="header-cell13">
                <div className="created-at2">Created At</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">8/16/13</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">8/15/17</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">6/21/19</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">4/21/12</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">9/23/16</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">10/6/13</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">8/30/14</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">1/15/12</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">8/21/15</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">5/27/15</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">8/2/19</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">7/27/13</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">4/4/18</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">11/7/16</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">9/18/16</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">5/27/15</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">3/4/16</div>
              </div>
              <div className="item-cell180">
                <div className="virginia-gusikowski2">5/7/16</div>
              </div>
            </div>
            <div className="coloumn52">
              <div className="header-cell14">
                <div className="user-table">Actions</div>
              </div>
              <div className="item-cell180">
                <div className="action36">
                  <button className="delete-button36">
                    <img className="vector-icon72" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button36">
                    <img className="vector-icon73" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell180">
                <div className="action36">
                  <button className="delete-button36">
                    <img className="vector-icon72" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button36">
                    <img className="vector-icon73" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell180">
                <div className="action36">
                  <button className="delete-button36">
                    <img className="vector-icon72" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button36">
                    <img className="vector-icon73" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell180">
                <div className="action36">
                  <button className="delete-button36">
                    <img className="vector-icon72" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button36">
                    <img className="vector-icon73" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell180">
                <div className="action36">
                  <button className="delete-button36">
                    <img className="vector-icon72" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button36">
                    <img className="vector-icon73" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell180">
                <div className="action36">
                  <button className="delete-button36">
                    <img className="vector-icon72" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button36">
                    <img className="vector-icon73" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell180">
                <div className="action36">
                  <button className="delete-button36">
                    <img className="vector-icon72" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button36">
                    <img className="vector-icon73" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell180">
                <div className="action36">
                  <button className="delete-button36">
                    <img className="vector-icon72" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button36">
                    <img className="vector-icon73" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell180">
                <div className="action36">
                  <button className="delete-button36">
                    <img className="vector-icon72" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button36">
                    <img className="vector-icon73" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell180">
                <div className="action36">
                  <button className="delete-button36">
                    <img className="vector-icon72" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button36">
                    <img className="vector-icon73" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell180">
                <div className="action36">
                  <button className="delete-button36">
                    <img className="vector-icon72" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button36">
                    <img className="vector-icon73" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell180">
                <div className="action36">
                  <button className="delete-button36">
                    <img className="vector-icon72" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button36">
                    <img className="vector-icon73" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell180">
                <div className="action36">
                  <button className="delete-button36">
                    <img className="vector-icon72" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button36">
                    <img className="vector-icon73" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell180">
                <div className="action36">
                  <button className="delete-button36">
                    <img className="vector-icon72" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button36">
                    <img className="vector-icon73" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell180">
                <div className="action36">
                  <button className="delete-button36">
                    <img className="vector-icon72" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button36">
                    <img className="vector-icon73" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell180">
                <div className="action36">
                  <button className="delete-button36">
                    <img className="vector-icon72" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button36">
                    <img className="vector-icon73" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell180">
                <div className="action36">
                  <button className="delete-button36">
                    <img className="vector-icon72" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button36">
                    <img className="vector-icon73" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell180">
                <div className="action36">
                  <button className="delete-button36">
                    <img className="vector-icon72" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button36">
                    <img className="vector-icon73" alt="" src="/vector1.svg" />
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

export default SystemAdminUser;
