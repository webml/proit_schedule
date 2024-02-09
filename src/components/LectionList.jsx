import { Drawer } from "rsuite";
import { ScheduleList } from "./ScheduleList";
import StarIcon from "@rsuite/icons/legacy/Star";

export const LectionList = ({ open, setOpen, lections, zone }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const getDay = (date) => {
    let day;
    if (typeof date === "string") {
      day = new Date(date).getDay();
    } else {
      day = date.getDay();
    }
    return day === 5 ? "Суббота" : "Воскресенье";
  };

  let sat, sun;

  if (zone === "Избранные") {
    sat = lections?.filter((lec) => getDay(lec.start) === "Суббота");
    sun = lections?.filter((lec) => getDay(lec.start) === "Воскресенье");
  }

  return (
    <Drawer
      size="calc(100% - 120px)"
      placement={"bottom"}
      open={open}
      onClose={handleClose}
    >
      <Drawer.Header
        style={{
          padding: "8px 16px 8px",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Drawer.Title>{zone}</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body style={{ margin: 0, padding: "0 8px 16px" }}>
        {zone === "Избранные" ? (
          <>
            {(sat && sun && sat.length === 0 && sun.length === 0) ||
            (!sat && !sun) ? (
              <div style={{ padding: "16px" }}>
                <h4>Вы еще не добавили лекции</h4>
                <p>
                  Нажмите{" "}
                  <span>
                    <StarIcon />
                  </span>{" "}
                  рядом с лекцией, чтобы добавить ее в избранные
                </p>
              </div>
            ) : (
              <>
                {sat && sat.length !== 0 && (
                  <>
                    <h4>Суббота</h4>
                    <ScheduleList lection={sat} zone={zone} />
                  </>
                )}
                {sun && sun.length !== 0 && (
                  <>
                    <h4>Воскресенье</h4>
                    <ScheduleList lection={sun} zone={zone} />
                  </>
                )}
              </>
            )}
          </>
        ) : (
          <ScheduleList lection={lections} zone={zone} />
        )}
      </Drawer.Body>
    </Drawer>
  );
};
