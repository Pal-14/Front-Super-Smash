import React, { useCallback, useMemo, useState } from "react";
import service from "../../services";
import "./Upload.css";

export default function Upload(props) {
  const [selectedImage, setSelectedImage] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const removeSelectedImage = () => {
    setSelectedImage();
  };

  let formData = useMemo(() => new FormData(), []);

  const onFileChange = useCallback(
    (e) => {
      let fileTypeCheck = e.target.files[0].type;
      console.log(e.target.name, "input value");

      if (
        fileTypeCheck !== "image/png" &&
        fileTypeCheck !== "image/jpeg" &&
        fileTypeCheck !== "image/jpg"
      ) {
        e.target.value = ""; // Pour remettre la  value à 0
        alert(
          "Format de fichier non pris en charge seulement .PNG .JPG ou .JPEG"
        );
      } else {
        formData.append(e.target.name, e.target.files[0]);
      }

      setSelectedImage(e.target.files[0]);
    },
    [formData]
  );

  async function SubmitFileData(e) {
    console.log(selectedImage);

    if (selectedImage !== "") {
      let docsSubmitted = await service.editUserPic(formData);
      console.log(docsSubmitted, "log de docsSubmitted");
      setMessage(docsSubmitted.data.message);
      if (docsSubmitted.data.success) {
        window.location.reload(true);
        e.target.value = "";
        setSelectedImage("");
      } else {
        setError(docsSubmitted.data.error);
      }
    }
  }

  return (
    <div>
      <form encType="multipart/form-data" method="POST" action="/users/upload">
        <div style={styles.container}>
          <h4>
            {message}
            {error}
          </h4>

          <input type="file" name="pictureUrl" onChange={onFileChange} />

          <br />
        </div>
        <div className="center">
          <a className="red" onClick={SubmitFileData}>
            Changer ma photo{" "}
          </a>
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 320 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};
