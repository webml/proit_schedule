import { IconButton } from "rsuite";
import { LectionCard } from "./LectionCard";
import StarIcon from "@rsuite/icons/legacy/Star";

export const ScheduleList = ({ lection }) => {
  const userLections = [];
  console.log(new Date());
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
                color={userLections.includes(lec.name) ? "coral" : "gray"}
              />
            }
            appearance="subtle"
            size="sm"
            onClick={() => handelStarClick(lec)}
          />
          <LectionCard lection={lec} />
        </div>
      ))}
    </>
  );
};
