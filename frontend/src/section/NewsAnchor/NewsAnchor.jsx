import { useEffect, useState } from "react";
import axios from "axios";
import Image from "./banner-title.png";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./NewsAnchor.module.css";

const NewsAnchor = () => {
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:6001/api/v1/get-newscategorys`)
      .then((response) => {
        setSeasons(response.data.data);

        // Set default season to "Season 11" if it exists
        const defaultSeason = response.data.data.find(
          (season) => season.name === "Season 11"
        );
        if (defaultSeason) {
          setSelectedSeason(defaultSeason._id);
        }

        console.log(response.data.data); // Logging to check the fetched data
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  const handleSeasonClick = (seasonId) => {
    setSelectedSeason(seasonId);
  };

  const getSelectedSeasonData = () => {
    if (!selectedSeason) return [];

    // Find the season object based on the selected season id
    const selectedData = seasons.find((season) => season._id === selectedSeason);
    return selectedData ? selectedData.data : [];
  };
  

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
  };
  return (
    <>
      <Row className={`${classes.outer} g-0`}>
        <img src={Image} alt="news" />
        <h1>News</h1>
      </Row>
      <Container>

        <Row className={`g-0 myRowClass ${classes.aim}`}>
        {seasons.map((season) => (
            <Col key={season._id} >
              <button
                className={`${classes.tabs} ${season._id === selectedSeason ? classes.active : ''}`}
                onClick={() => handleSeasonClick(season._id)}
              >
                {season.name}
              </button>
            </Col>
        ))}
        </Row>
        <Row className={`g-0 ${classes.aim1}`}>
          <Col>
            <select
              className={classes.select}
              value={selectedSeason || ""}
              onChange={handleSeasonChange}
            >
              <option value="" disabled>Select Season</option>
              {seasons.map((season) => (
                <option key={season._id} value={season._id}>
                  {season.name}
                </option>
              ))}
            </select>
          </Col>
        </Row>

        {selectedSeason && (
          <Row className="g-0">
            {getSelectedSeasonData().length > 0 ? (
              getSelectedSeasonData().map((d, i) => (
                <Col key={d._id} className={`${classes.col1} mb-3 g-4 `} lg={4} md={6} >
                  <div className={classes.divi}>
                    <a href={d.link} target="_blank" rel="noopener noreferrer">
                      <p className={classes.date}>{d.date}</p>
                      <br />
                      {d.img && <img src={`http://localhost:6001/news-files/news/${d.img}`} alt={d.title} />}
                      <h3 className={`text-truncate ${classes.h3}`}>{d.title}</h3>
                    </a>
                  </div>
                </Col>
              ))
            ) : (
              <p>No news available for this season.</p>
            )}
          </Row>
        )}

      </Container>
    </>
  );
};

export default NewsAnchor;
