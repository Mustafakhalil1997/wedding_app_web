import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import classes from "./UploadList.module.css";
import HelperList from "./HelperList";
import { InitializeFirebase } from "./../../../../InitializeFirebase";
import { getDatabase, push, ref, set } from "firebase/database";

InitializeFirebase();

const UploadList = (props) => {
  // const backdropClickHandler = () => {
  //   history.replace("/profile");
  // };

  // const [listOpened, setListOpened] = useState(true);
  const [selectedFile, setSelectedFile] = useState();
  // const [isSelected, setIsSelected] = useState(false);
  const [fileData, setFileData] = useState("");
  const [loading, setIsLoading] = useState(false);
  // const [isBackdropOpen, setIsBackdropOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    let textFile = /text.*/;

    console.log("selectedFile ", selectedFile);
    if (selectedFile && selectedFile.type.match(textFile)) {
      console.log("File Matched");

      let reader = new FileReader();

      reader.readAsText(selectedFile);

      reader.onload = (event) => {
        const valuesInString = event.target.result;
        console.log("data ", event.target);

        const namesList = valuesInString.split("\r\n");
        setFileData(namesList);
        console.log("namesList ", namesList);
      };
    }
    return () => {
      console.log("cleaned up");
    };
  }, [selectedFile]);

  const changeHandler = (event) => {
    const file = event.target.files[0];
    console.log("eventtt", file);
    setSelectedFile(file);
    // setIsSelected(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // props.onPassList(fileData || null);

    setIsLoading(true);

    const url =
      "https://weddingproject2-ce55f-default-rtdb.firebaseio.com/list.json";

    const inviteeList = [];
    let i = 0;

    fileData.map((invitee) => {
      if (i < fileData.length / 2) {
        inviteeList.push({
          name: invitee,
          checkin: "",
          ispriority: true,
        });
        i++;
      } else {
        inviteeList.push({
          name: invitee,
          checkin: "",
          ispriority: false,
        });
      }
    });

    console.log("inviteeList ", inviteeList);

    let index = 0;
    const db = getDatabase();
    while (index < inviteeList.length) {
      push(ref(db, "invitees"), inviteeList[index]);
      index++;
      // fetch(url, {
      //   method: "POST",
      //   body: JSON.stringify(inviteeList),
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      // })
      //   .then((response) => {
      //     if (response.ok) {
      //       console.log("List added");
      //       history.replace("/profile");
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
  };

  const handleClose = () => {
    history.replace("/profile");
  };

  const handleBlur = () => {
    console.log("blurred");
    history.replace("/profile");
  };

  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={handleClose} />
      {/* <Transition in={listOpened} timeout={300}>
        {(state) => ( */}
      <HelperList
        handleClose={handleClose}
        changeHandler={changeHandler}
        handleSubmit={handleSubmit}
      />

      {/* </Transition> */}
    </React.Fragment>
  );
};

export default UploadList;
