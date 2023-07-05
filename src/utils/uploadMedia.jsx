export const uploadMedia = async (media) => {
  try {
    const formData = new FormData();

    formData.append("file", media);
    formData.append("upload_preset", "chirpbox_uploads");
    formData.append("folder", "chirpbox_uploads");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dz87hskyi/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const jsonRes = await res.json();
    return jsonRes;
  } catch (error) {
    console.log("error in image upload", error.message);
  }
};
