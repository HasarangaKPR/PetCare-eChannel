import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SystemAdminDoctors.css";

const SystemAdminDoctors = () => {
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
    navigate("/systemadmindaycarecenteradmins");
  }, [navigate]);

  const onDashboardClick3 = useCallback(() => {
    navigate("/systemadminuser");
  }, [navigate]);

  return (
    <div className="systemadmindoctors">
      <header className="navbar3">
        <img className="logo-icon3" alt="" src="/logo@2x.png" />
        <button className="logout3" onClick={onLogoutClick}>
          Logout
        </button>
      </header>
      <div className="main-content2">
        <div className="sidelist3">
          <button className="dashboard14" onClick={onDashboardClick}>
            <img
              className="magedashboard-icon3"
              alt=""
              src="/magedashboard.svg"
            />
            <div className="dashboard15">Dashboard</div>
          </button>
          <button className="dashboard14" onClick={onDashboardClick1}>
            <img
              className="iconoirprofile-circle3"
              alt=""
              src="/iconoirprofilecircle.svg"
            />
            <div className="dashboard15">Profile</div>
          </button>
          <button className="dashboard17">
            <img
              className="iconoirprofile-circle3"
              alt=""
              src="/materialsymbolsadminpanelsettingsoutline1.svg"
            />
            <div className="doctors3">Doctors</div>
          </button>
          <button className="dashboard14" onClick={onDashboardClick2}>
            <img
              className="iconoirprofile-circle3"
              alt=""
              src="/materialsymbolsadminpanelsettingsoutline.svg"
            />
            <div className="dashboard15">Daycare Center admins</div>
          </button>
          <button className="dashboard14" onClick={onDashboardClick3}>
            <img
              className="iconoirprofile-circle3"
              alt=""
              src="/iconamoonprofilelight.svg"
            />
            <div className="dashboard15">Users</div>
          </button>
        </div>
        <div className="table-contaner1">
          <div className="heder-text1">
            <div className="doctors-table">Doctors Table</div>
            <button className="button5">
              <img
                className="iconoirprofile-circle3"
                alt=""
                src="/mdiuseraddoutline.svg"
              />
              <div className="add-user1">Add User</div>
            </button>
          </div>
          <div className="table1">
            <div className="coloumn11">
              <div className="header-cell5" />
              <div className="item-cell90">
                <img
                  className="item-cell-child15"
                  alt=""
                  src="/ellipse-12@2x.png"
                />
              </div>
              <div className="item-cell90">
                <img
                  className="item-cell-child15"
                  alt=""
                  src="/ellipse-121@2x.png"
                />
              </div>
              <div className="item-cell90">
                <img
                  className="item-cell-child15"
                  alt=""
                  src="/ellipse-122@2x.png"
                />
              </div>
              <div className="item-cell90">
                <img
                  className="item-cell-child15"
                  alt=""
                  src="/ellipse-123@2x.png"
                />
              </div>
              <div className="item-cell90">
                <img
                  className="item-cell-child15"
                  alt=""
                  src="/ellipse-124@2x.png"
                />
              </div>
              <div className="item-cell90">
                <img
                  className="item-cell-child15"
                  alt=""
                  src="/ellipse-125@2x.png"
                />
              </div>
              <div className="item-cell90">
                <img
                  className="item-cell-child15"
                  alt=""
                  src="/ellipse-126@2x.png"
                />
              </div>
              <div className="item-cell90">
                <img
                  className="item-cell-child15"
                  alt=""
                  src="/ellipse-127@2x.png"
                />
              </div>
              <div className="item-cell90">
                <img
                  className="item-cell-child15"
                  alt=""
                  src="/ellipse-128@2x.png"
                />
              </div>
              <div className="item-cell90">
                <img
                  className="item-cell-child15"
                  alt=""
                  src="/ellipse-129@2x.png"
                />
              </div>
              <div className="item-cell90">
                <img
                  className="item-cell-child15"
                  alt=""
                  src="/ellipse-1210@2x.png"
                />
              </div>
              <div className="item-cell90">
                <img
                  className="item-cell-child15"
                  alt=""
                  src="/ellipse-1211@2x.png"
                />
              </div>
              <div className="item-cell90">
                <img
                  className="item-cell-child15"
                  alt=""
                  src="/ellipse-1212@2x.png"
                />
              </div>
              <div className="item-cell90">
                <img
                  className="item-cell-child15"
                  alt=""
                  src="/ellipse-1213@2x.png"
                />
              </div>
              <div className="item-cell90">
                <img
                  className="item-cell-child15"
                  alt=""
                  src="/ellipse-1214@2x.png"
                />
              </div>
              <div className="item-cell90">
                <img
                  className="item-cell-child15"
                  alt=""
                  src="/ellipse-1215@2x.png"
                />
              </div>
              <div className="item-cell90">
                <img
                  className="item-cell-child15"
                  alt=""
                  src="/ellipse-1216@2x.png"
                />
              </div>
              <div className="item-cell90">
                <img
                  className="item-cell-child15"
                  alt=""
                  src="/ellipse-1217@2x.png"
                />
              </div>
            </div>
            <div className="coloumn21">
              <div className="header-cell6">
                <div className="name1">Name</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Virginia Gusikowski</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Jay Lakin</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Ruth Schamberger</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Colin Lesch</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Lula Thiel</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Dave Casper</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Brooke Ondricka</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Terry Douglas</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Vera Kihn</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Clinton Schaden</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Marilyn McDermott</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Merle Jakubowski</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Lorraine Stroman</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Clarence Donnelly</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Angie Haley</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Wallace Bruen</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">
                  Gina Aufderhar-Padberg
                </div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Cody Ondricka</div>
              </div>
            </div>
            <div className="coloumn21">
              <div className="header-cell6">
                <div className="name1">Email</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Isabel92@hotmail.com</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">
                  Chester.Hagenes@gmail.com
                </div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">
                  Michele_Pfannerstill43@hotmail.com
                </div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">
                  Guadalupe_Jast@yahoo.com
                </div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Pearl36@gmail.com</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Damon5@yahoo.com</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">
                  Kathryn_Bode@gmail.com
                </div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Duane6@yahoo.com</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">
                  Alyssa_Daniel@yahoo.com
                </div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">
                  Ronnie_Little@gmail.com
                </div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Ginger2@hotmail.com</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Brian98@gmail.com</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Kristi69@gmail.com</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">
                  Julius.Yost@hotmail.com
                </div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">Cristina43@yahoo.com</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">
                  Abel.McGlynn@yahoo.com
                </div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">
                  Annie_Hand-Huel@gmail.com
                </div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">
                  Alfred.Casper@gmail.com
                </div>
              </div>
            </div>
            <div className="coloumn21">
              <div className="header-cell8">
                <div className="created-at1">Created At</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">8/16/13</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">8/15/17</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">6/21/19</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">4/21/12</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">9/23/16</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">10/6/13</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">8/30/14</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">1/15/12</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">8/21/15</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">5/27/15</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">8/2/19</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">7/27/13</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">4/4/18</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">11/7/16</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">9/18/16</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">5/27/15</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">3/4/16</div>
              </div>
              <div className="item-cell90">
                <div className="virginia-gusikowski1">5/7/16</div>
              </div>
            </div>
            <div className="coloumn51">
              <div className="header-cell9">
                <div className="doctors-table">Actions</div>
              </div>
              <div className="item-cell90">
                <div className="action18">
                  <button className="delete-button18">
                    <img className="vector-icon36" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button18">
                    <img className="vector-icon37" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell90">
                <div className="action18">
                  <button className="delete-button18">
                    <img className="vector-icon36" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button18">
                    <img className="vector-icon37" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell90">
                <div className="action18">
                  <button className="delete-button18">
                    <img className="vector-icon36" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button18">
                    <img className="vector-icon37" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell90">
                <div className="action18">
                  <button className="delete-button18">
                    <img className="vector-icon36" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button18">
                    <img className="vector-icon37" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell90">
                <div className="action18">
                  <button className="delete-button18">
                    <img className="vector-icon36" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button18">
                    <img className="vector-icon37" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell90">
                <div className="action18">
                  <button className="delete-button18">
                    <img className="vector-icon36" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button18">
                    <img className="vector-icon37" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell90">
                <div className="action18">
                  <button className="delete-button18">
                    <img className="vector-icon36" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button18">
                    <img className="vector-icon37" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell90">
                <div className="action18">
                  <button className="delete-button18">
                    <img className="vector-icon36" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button18">
                    <img className="vector-icon37" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell90">
                <div className="action18">
                  <button className="delete-button18">
                    <img className="vector-icon36" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button18">
                    <img className="vector-icon37" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell90">
                <div className="action18">
                  <button className="delete-button18">
                    <img className="vector-icon36" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button18">
                    <img className="vector-icon37" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell90">
                <div className="action18">
                  <button className="delete-button18">
                    <img className="vector-icon36" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button18">
                    <img className="vector-icon37" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell90">
                <div className="action18">
                  <button className="delete-button18">
                    <img className="vector-icon36" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button18">
                    <img className="vector-icon37" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell90">
                <div className="action18">
                  <button className="delete-button18">
                    <img className="vector-icon36" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button18">
                    <img className="vector-icon37" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell90">
                <div className="action18">
                  <button className="delete-button18">
                    <img className="vector-icon36" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button18">
                    <img className="vector-icon37" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell90">
                <div className="action18">
                  <button className="delete-button18">
                    <img className="vector-icon36" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button18">
                    <img className="vector-icon37" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell90">
                <div className="action18">
                  <button className="delete-button18">
                    <img className="vector-icon36" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button18">
                    <img className="vector-icon37" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell90">
                <div className="action18">
                  <button className="delete-button18">
                    <img className="vector-icon36" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button18">
                    <img className="vector-icon37" alt="" src="/vector1.svg" />
                  </button>
                </div>
              </div>
              <div className="item-cell90">
                <div className="action18">
                  <button className="delete-button18">
                    <img className="vector-icon36" alt="" src="/vector.svg" />
                  </button>
                  <button className="edit-button18">
                    <img className="vector-icon37" alt="" src="/vector1.svg" />
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

export default SystemAdminDoctors;
