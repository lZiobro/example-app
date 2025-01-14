import { React, useState, useEffect, useRef } from "react";
import "./Mercenaries.scss";
import Mercenary from "../../components/Mercenary/Mercenary";
import Pager from "../../components/Pager/Pager";
import {
  useLocation,
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import { b64toBlob } from "../../tools/blobTools";
import { getMercenariesApi } from "../../service/UserService";

function Mercenaries() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mercenaries, setMercenaries] = useState(null);
  const [userCount, setUserCount] = useState(null);
  const [page, setPage] = useState(searchParams.get("page"));
  const [resultsPerPage, setResultsPerPage] = useState(25);
  const [race, setRace] = useState(searchParams.get("race"));
  const [occupation, setOccupation] = useState(searchParams.get("occupation"));
  const [experience, setExperience] = useState(searchParams.get("experience"));
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchParams = [];
    if (race) searchParams.push(["race", race]);
    if (occupation) searchParams.push(["occupation", occupation]);
    if (experience) searchParams.push(["experience", experience]);
    if (page) searchParams.push(["page", page]);

    //we also need to update location here
    location.search = "?" + createSearchParams(searchParams);

    navigate({ pathname: "/mercenaries", search: location.search });
    var result = await getMercenariesApi(location);
    var resultJson = await result.json();
    var usersWithPictures = resultJson.usersWithPictures;
    //also set the users pfps

    for (const r of usersWithPictures) {
      const pfpContents = r?.pfp?.fileContents;
      if (pfpContents) {
        var imageBlob = b64toBlob(pfpContents, r.pfp.contentType);
        if (imageBlob.size > 24) {
          const imageObjectURL = URL.createObjectURL(imageBlob);
          r.pfp = imageObjectURL;
        }
      }
    }

    setUserCount(resultJson.userCount);
    setMercenaries(resultJson.usersWithPictures);
  };

  const pagerTopPosition = useRef(null);

  useEffect(() => {
    //fill the results with parameters from get
    const innerFuncAsync = async () => {
      var result = await getMercenariesApi(location);
      var resultJson = await result.json();
      var usersWithPictures = resultJson.usersWithPictures;
      //also set the users pfps

      for (const r of usersWithPictures) {
        const pfpContents = r?.pfp?.fileContents;
        if (pfpContents) {
          var imageBlob = b64toBlob(pfpContents, r.pfp.contentType);
          if (imageBlob.size > 24) {
            const imageObjectURL = URL.createObjectURL(imageBlob);
            r.pfp = imageObjectURL;
          }
        }
      }

      setUserCount(resultJson.userCount);
      setMercenaries(resultJson.usersWithPictures);
    };
    innerFuncAsync();
    if (pagerTopPosition?.current?.getBoundingClientRect().y < 0)
      pagerTopPosition?.current?.scrollIntoView({ behaviour: "smooth" });
  }, [page]);

  return (
    <div className="mercenaries-wrapper soft-edges old-paper-background">
      <div className="mercenaries-search">
        <h1>I'm looking for:</h1>
        <form className="mercenaries-search-form" onSubmit={handleSubmit}>
          {/* this bar doesnt really do anything, but it looks nice :) */}
          <div className="mercenaries-searchbar-wrapper">
            <input
              className="search-input"
              type="text"
              placeholder="Enter name, specialty etc."
            />
          </div>

          <div className="column-wrapper">
            <div className="mercenaries-race-wrapper">
              <label htmlFor="race" className="mercenaries-race-label">
                Race:
              </label>
              <select
                name="race"
                className="mercenaries-race-input"
                value={race ? race : ""}
                onChange={(e) => setRace(e.target.value)}
              >
                <option value="">Any</option>
                <option value="guava">Guava</option>
                <option value="lychee">Lychee</option>
                <option value="papaya">Papaya</option>
              </select>
            </div>
            <div className="mercenaries-occupation-wrapper">
              <label
                htmlFor="occupation"
                className="mercenaries-occupation-label"
              >
                Occupation:
              </label>
              <select
                name="race"
                className="mercenaries-race-input"
                value={occupation ? occupation : ""}
                onChange={(e) => setOccupation(e.target.value)}
              >
                <option value="">Any</option>
                <option value="guava">Guava</option>
                <option value="lychee">Lychee</option>
                <option value="papaya">Papaya</option>
              </select>
            </div>
            <div className="mercenaries-experience-wrapper">
              <label
                htmlFor="experience"
                className="mercenaries-experience-label"
              >
                Experience:
              </label>
              <select
                name="experience"
                className="mercenaries-experience-input"
                value={experience ? experience : ""}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="">Any</option>
                <option value="guava">Guava</option>
                <option value="lychee">Lychee</option>
                <option value="papaya">Papaya</option>
              </select>
            </div>
          </div>
          <button type="submit" className="primary-btn mercenaries-search-btn">
            Search
          </button>
        </form>
      </div>

      <div className="mercenaries-result-wrapper">
        <p className="mercenaries-found">
          Found: {userCount ?? 0} mercenaries.
        </p>
        <div ref={pagerTopPosition}></div>
        <Pager
          page={page}
          setPage={setPage}
          total={userCount ? parseFloat(userCount) / resultsPerPage : 1}
        />

        {mercenaries ? (
          <>
            {mercenaries?.map((x) => (
              <Mercenary
                key={x.user.userName}
                name={x.user.userName}
                race={x.user.race}
                occupation={x.user.occupation}
                id={x.user.userName}
                imageSrc={x.pfp}
              />
            ))}
          </>
        ) : (
          <p className="notfound-text">
            <i>Looks like no one's here...</i>
          </p>
        )}

        <Pager
          page={page}
          setPage={setPage}
          total={userCount ? parseFloat(userCount) / resultsPerPage : 1}
        />

        <div>
          <p className="mercenaries-recently-viewed-caption">
            Recently viewed:
          </p>
          <div className="mercenaries-recently-viewed">
            <Mercenary name="Gandalf" race="Human" occupation="Mage" />
            <Mercenary name="Gandalf" race="Human" occupation="Mage" />
            <Mercenary name="Gandalf" race="Human" occupation="Mage" />
            <Mercenary name="Gandalf" race="Human" occupation="Mage" />
            <Mercenary name="Gandalf" race="Human" occupation="Mage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mercenaries;
