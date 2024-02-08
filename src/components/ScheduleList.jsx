import { IconButton } from "rsuite";
import { LectionCard } from "./LectionCard";
import StarIcon from "@rsuite/icons/legacy/Star";
import { useEffect, useState } from "react";

export const ScheduleList = ({ lection, zone }) => {
  const [userLections, setUserLections] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setUserLections(JSON.parse(localStorage.getItem("userLections")));
    setUpdate(false);
  }, [update]);

  const getIndex = (myLections, lection) => {
    const index = myLections.findIndex(
      (obj) => JSON.stringify(obj) === JSON.stringify(lection)
    );
    return index;
  };

  const includeLection = (myLections, lection) => {
    if (getIndex(myLections, lection) !== -1) {
      return true;
    } else {
      return false;
    }
  };

  const updStorage = (obj) => {
    const serialLections = JSON.stringify(obj);
    localStorage.setItem("userLections", serialLections);
    setUpdate(true);
  };

  const handelStarClick = (lection) => {
    if (userLections === null) {
      const lections = [];
      lections.push(lection);
      return updStorage(lections);
    }

    if (includeLection(userLections, lection)) {
      userLections.splice(getIndex(userLections, lection), 1);
      return updStorage(userLections);
    }

    userLections.push(lection);
    return updStorage(userLections);
  };

  return (
    <>
      {lection.map((lec, index) => (
        <div
          key={index}
          style={{
            display: "grid",
            gridTemplateColumns: "32px auto",
            alignItems: "baseline",
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          <IconButton
            style={{ height: "30px", width: "30px" }}
            icon={
              <StarIcon
                color={
                  userLections?.map((lec) => lec.name).includes(lec.name)
                    ? "coral"
                    : "gray"
                }
              />
            }
            appearance="subtle"
            size="sm"
            onClick={() => handelStarClick(lec)}
          />
          <LectionCard lection={lec} zone={zone} />
        </div>
      ))}
    </>
  );
};
