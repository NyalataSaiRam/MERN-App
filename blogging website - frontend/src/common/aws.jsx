import axios from "axios";

const uploadImage = async (img) => {
  let imageUrl = null;

  await axios
    .get(import.meta.env.VITE_SERVER_DOMAIN + "/get-upload-url")
    .then(async ({ data: { uploadURL } }) => {
      await axios({
        method: "PUT",
        url: uploadURL,
        headers: { "Content-Type": "multipart/form-data" },
        data: img,
      })
        .then(() => {
          imageUrl = uploadURL.split("?")[0];
        })
        .catch((err) => {
          console.log(err.message);
        });
    });

  return imageUrl;
};

export default uploadImage;
