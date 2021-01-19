import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
// React router
import { useHistory } from "react-router-dom";

const GameDetail = () => {
  const history = useHistory();
  //Data
  const { screenshots, game, isLoading } = useSelector((state) => state.detail);

  //Exit detail
  const exitDetailHandler = (e) => {
    const element = e.target;

    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail>
            <CardTop>
              <Media>
                <img src={game.background_image} alt={game.background_image} />
              </Media>
              <Stats>
                <div className="rating">
                  <h3>{game.name}</h3>
                  <p>Rating: {game.rating} / 5</p>
                </div>
                <Info>
                  <h3>Platforms</h3>
                  <Platforms>
                    {game.platforms.map((data) => (
                      <h3 key={data.platform.id}>{data.platform.name}</h3>
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
                  src={screenshot.image}
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
  /* padding: 2rem 5rem; */
  margin: 2rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  overflow: hidden;

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
  background: rgba(0, 0, 0, 0.2);

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

  h3 {
    margin: 0rem 1rem;
  }

  img {
    margin-left: 3rem;
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
`;

const Description = styled(motion.div)`
  margin: 5rem;
`;

const Gallery = styled(motion.div)`
  img {
    margin: 0.25rem 0rem;
  }
`;

export default GameDetail;
