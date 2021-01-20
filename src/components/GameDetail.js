import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
// React router
import { useHistory } from "react-router-dom";
// Util
import { convertToSmallImage } from "../util";
// Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  //Data
  const { screenshots, game, isLoading } = useSelector((state) => state.detail);

  const getPlatform = (platform) => {
    switch (platform) {
      case "Playstation 4":
        return playstation;
      case "Playstation 5":
        return playstation;
      case "Xbox One":
        return xbox;
      case "Xbox S":
        return xbox;
      case "Xbox S/X":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }

    return stars;
  };

  const exitDetailHandler = (e) => {
    const element = e.target;
    console.log(element);

    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail
            // layoutId={pathId}
            layoutId={`image ${pathId}`}
          >
            <CardTop>
              <Media>
                <motion.img
                  src={convertToSmallImage(game.background_image, 1920)}
                  alt={game.background_image}
                  // layoutId={`image ${pathId}`}
                />
                {game.clip && (
                  <video controls autoPlay loop width="720" height="405">
                    <source src={game.clip.clips.full} />
                  </video>
                )}
                <motion.div className="star-container">{getStars()}</motion.div>
              </Media>
              <Stats>
                <div className="rating">
                  <motion.h3 layoutId={`title ${pathId}`}>
                    {game.name}
                  </motion.h3>
                  <p>Rating: {game.rating} / 5</p>
                  {/* {getStars()} */}
                </div>
                <Info>
                  <h3>Platforms</h3>
                  <Platforms>
                    {game.platforms.map((data) => (
                      <img
                        src={getPlatform(data.platform.name)}
                        key={data.platform.id}
                        title={data.platform.name}
                        alt={data.platform.name}
                      ></img>
                    ))}
                  </Platforms>
                </Info>
              </Stats>
            </CardTop>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <Gallery>
              {screenshots.results.map((screenshot) => (
                <img
                  src={convertToSmallImage(screenshot.image, 1920)}
                  key={screenshot.id}
                  alt={screenshot.image}
                />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: black;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const CardTop = styled(motion.div)`
  position: relative;
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  margin: 2rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  overflow: hidden;
  z-index: 10;

  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0rem 2rem;
  background: rgba(0, 0, 0, 0.4);

  h3,
  p {
    color: white;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;

  h3 {
    margin: 0rem 1rem;
  }

  img {
    margin: 0rem 1rem;
  }
`;

const Media = styled(motion.div)`
  /* margin-top: 5rem; */

  img {
    width: 100%;
    /* height: 60vh; */
    object-fit: cover;
    object-position: top;
  }

  video {
    bottom: -150px;
    right: 100px;
    position: absolute;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.6);
  }

  .star-container {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;

    img {
      width: 4rem;
      height: 4rem;
      margin: 0.5rem;
      /* display: inline; */
    }
  }
`;

const Description = styled(motion.div)`
  margin: 13rem 5rem 5rem 5rem;
`;

const Gallery = styled(motion.div)`
  img {
    display: block;
  }
`;

export default GameDetail;
