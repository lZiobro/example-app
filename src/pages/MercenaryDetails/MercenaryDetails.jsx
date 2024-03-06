import { React, useState, useEffect } from "react";
import "./MercenaryDetails.scss";
import { Link, useLocation } from "react-router-dom";
import { getUsernameStorage } from "../../Storage/UserStorage";
import {
  getMercenaryDetailsApi,
  postEditUserDetailsApi,
  postSetUserListingApi,
  postUploadProfilePictureApi,
} from "../../service/UserService";
import { b64toBlob } from "../../tools/blobTools";

function MercenaryDetails(props) {
  const [mercenaryDetails, setMercenaryDetails] = useState(null);
  const [currentProfilePicture, setCurrentProfilePicture] = useState(null);
  //used to update elements that depend on login state, doesnt use the actual values, as they may not be true after refreshing
  const [isActiveUser, setIsActiveUser] = useState(false);
  const [isListed, setIsListed] = useState(false);
  const [editing, setEditing] = useState(false);

  //form data
  const [profilePicture, setProfilePicture] = useState(null);
  const [race, setRace] = useState();
  const [occupation, setOccupation] = useState();
  const [experience, setExperience] = useState();
  const [home, setHome] = useState();
  const [hasEquipment, setHasEquipment] = useState();
  const [likes, setLikes] = useState();
  const [dislikes, setDislikes] = useState();
  const [specialty, setSpecialty] = useState();
  const [aboutMe, setAboutMe] = useState();

  const location = useLocation();
  const placeholderUrl =
    "https://thumbs.dreamstime.com/b/fantasy-character-magic-woodcutter-elderly-man-face-long-thick-beard-braided-mustache-steel-armor-old-headdress-194964340.jpg";

  const getUserData = async () => {
    const result = await getMercenaryDetailsApi(location);
    if (!result.ok) return;
    const jsonResult = await result.json();
    setMercenaryDetails(jsonResult.user);

    //also set the user pfp
    const pfpContents = jsonResult?.pfp?.fileContents;
    if (pfpContents) {
      var imageBlob = b64toBlob(pfpContents, jsonResult.pfp.contentType);
      if (imageBlob.size > 24) {
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setCurrentProfilePicture(imageObjectURL);
      }
    }
    setIsActiveUser(
      jsonResult.user.userName.toLowerCase() === getUsernameStorage()
    );
  };

  useEffect(() => {
    getUserData();
  }, [location]);

  //set form values after loading details from api
  useEffect(() => {
    if (mercenaryDetails == null) return;

    setRace(mercenaryDetails?.race ? mercenaryDetails?.race : "");
    setOccupation(
      mercenaryDetails?.occupation ? mercenaryDetails?.occupation : ""
    );
    setExperience(
      mercenaryDetails?.experience ? mercenaryDetails?.experience : ""
    );
    setHome(mercenaryDetails?.home ? mercenaryDetails?.home : "");
    setHasEquipment(mercenaryDetails?.hasEquipment ? "yes" : "no");
    setLikes(mercenaryDetails?.likes ? mercenaryDetails?.likes : "");
    setDislikes(mercenaryDetails?.dislikes ? mercenaryDetails?.dislikes : "");
    setSpecialty(
      mercenaryDetails?.specialty ? mercenaryDetails?.specialty : ""
    );
    setAboutMe(mercenaryDetails?.aboutMe ? mercenaryDetails?.aboutMe : "");
    setIsListed(mercenaryDetails?.isListed ? true : false);
  }, [mercenaryDetails]);

  const apiSetUserListing = async (e) => {
    //notice we reversing the isListed here to avoid additional api call
    setIsListed(!isListed);
    postSetUserListingApi(!isListed);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editing) return;
    await postEditUserDetailsApi({
      race,
      occupation,
      experience,
      home,
      hasEquipment: hasEquipment === "yes" ? true : false,
      likes,
      dislikes,
      specialty,
      aboutMe,
    });
    if (profilePicture != null) {
      await postUploadProfilePictureApi(profilePicture);
      setProfilePicture(null);
    }
    //check whatever successfull

    setEditing(false);
    getUserData();
  };

  return (
    <>
      {isActiveUser && !editing ? (
        <>
          <div
            className="edit-btn primary-btn"
            onClick={(e) => setEditing(true)}
          >
            Edit Profile
          </div>
          <div
            className={
              "edit-btn listing-btn primary-btn " +
              (isListed ? "green-btn" : "red-btn")
            }
            onClick={(e) => apiSetUserListing()}
          >
            Listed: {isListed ? "Yes" : "No"}
          </div>
        </>
      ) : isActiveUser && editing ? (
        <div
          className="edit-btn primary-btn red-btn"
          onClick={(e) => setEditing(false)}
        >
          Abort
        </div>
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit}>
        <div className="mercenary-details-wrapper soft-edges old-paper-background">
          <div className="mercenary-poster-wrapper">
            {editing ? (
              <div
                className="pfp-input-wrapper"
                onChange={(e) => setProfilePicture(e.target?.files[0])}
              >
                <p>
                  Profile picture:
                  <input type="file" />
                </p>
              </div>
            ) : (
              ""
            )}
            <img
              alt="mercenary-poster"
              src={
                currentProfilePicture ? currentProfilePicture : placeholderUrl
              }
            />
          </div>
          <div className="mercenary-details">
            <h1 className="mercenary-title">{mercenaryDetails?.userName}</h1>
            <div className="mercenary-details-details">
              <div className="mercenary-details-misc">
                <p>
                  Race:{" "}
                  {editing ? (
                    <input
                      name="race"
                      className="race-input"
                      value={race}
                      onChange={(e) => setRace(e.target.value)}
                    ></input>
                  ) : mercenaryDetails?.race ? (
                    mercenaryDetails?.race
                  ) : (
                    "-"
                  )}
                </p>
                <p>
                  Occupation:{" "}
                  {editing ? (
                    <input
                      name="occupation"
                      className="occupation-input"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                    ></input>
                  ) : mercenaryDetails?.occupation ? (
                    mercenaryDetails?.occupation
                  ) : (
                    "-"
                  )}
                </p>
                <p>
                  Experience:{" "}
                  {editing ? (
                    <input
                      name="experience"
                      className="experience-input"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                    ></input>
                  ) : mercenaryDetails?.experience ? (
                    mercenaryDetails?.experience
                  ) : (
                    "-"
                  )}
                </p>
                <p>
                  Home:{" "}
                  {editing ? (
                    <input
                      name="home"
                      className="home-input"
                      value={home}
                      onChange={(e) => setHome(e.target.value)}
                    ></input>
                  ) : mercenaryDetails?.home ? (
                    mercenaryDetails?.home
                  ) : (
                    "-"
                  )}
                </p>
                <p>
                  Has own equpiment?:{" "}
                  {editing ? (
                    <select
                      name="hasEquipment"
                      className="hasEquipment-input"
                      value={hasEquipment}
                      onChange={(e) => setHasEquipment(e.target.value)}
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  ) : mercenaryDetails?.hasEquipment ? (
                    "Yes"
                  ) : (
                    "No"
                  )}
                </p>
              </div>
              <div className="mercenary-details-misc">
                <p>
                  Likes:{" "}
                  {editing ? (
                    <input
                      name="likes"
                      className="likes-input"
                      value={likes}
                      onChange={(e) => setLikes(e.target.value)}
                    ></input>
                  ) : mercenaryDetails?.likes ? (
                    mercenaryDetails?.likes
                  ) : (
                    "-"
                  )}
                </p>
                <p>
                  Dislikes:{" "}
                  {editing ? (
                    <input
                      name="dislikes"
                      className="dislikes-input"
                      value={dislikes}
                      onChange={(e) => setDislikes(e.target.value)}
                    ></input>
                  ) : mercenaryDetails?.dislikes ? (
                    mercenaryDetails?.dislikes
                  ) : (
                    "-"
                  )}
                </p>
                <p>
                  Specialty:{" "}
                  {editing ? (
                    <input
                      name="specialty"
                      className="specialty-input"
                      value={specialty}
                      onChange={(e) => setSpecialty(e.target.value)}
                    ></input>
                  ) : mercenaryDetails?.specialty ? (
                    mercenaryDetails?.specialty
                  ) : (
                    "-"
                  )}
                </p>
                {editing ? (
                  <button className="contact-btn primary-btn">Save</button>
                ) : (
                  <Link
                    className="nostyle"
                    to={`/contact`}
                    state={{ recipent: mercenaryDetails?.userName }}
                  >
                    <button className="contact-btn primary-btn">
                      Contact Me
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mercenary-details-description soft-edges old-paper-background">
          <h2>About me:</h2>
          <p>
            {editing ? (
              <textarea
                className="aboutme-input"
                name="aboutme"
                value={aboutMe}
                onChange={(e) => setAboutMe(e.target.value)}
              ></textarea>
            ) : mercenaryDetails?.aboutMe ? (
              mercenaryDetails?.aboutMe
            ) : (
              "User didn't want to share any additional information..."
            )}
          </p>
        </div>
      </form>
    </>
  );
}

export default MercenaryDetails;
