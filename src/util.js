// Media resize

export const convertToSmallImage = (imageUrl, size) => {
  if (imageUrl) {
    const image = imageUrl.match(/media\/screenshots/)
      ? imageUrl.replace(
          "media/screnshots",
          `media/resize/${size}/-/ screenshots`
        )
      : imageUrl.replace("/media/games/", `/media/resize/${size}/-/games/`);

    return image;
  } else {
    return;
  }
};
