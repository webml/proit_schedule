import "rsuite/dist/rsuite.min.css";
import "./styles.css";
import { ScheduleList } from "./components/ScheduleList";
import { ButtonGroup, Button, IconButton } from "rsuite";
import { useState } from "react";
import { satSchedule, sunSchedule } from "./schedule_data";
import { UserList } from "./components/UserList";
import StarIcon from "@rsuite/icons/legacy/Star";

const App = () => {
  const [day, setDay] = useState("sat");
  const [open, setOpen] = useState(false);

  const handelUserListClick = () => {
    setOpen(true);
  };

  return (
    <div style={{ position: "relative" }}>
      <ButtonGroup
        style={{ width: "100%", padding: "16px" }}
        size="sm"
        justified
      >
        <Button active={day === "sat"} onClick={() => setDay("sat")}>
          Суббота
        </Button>
        <Button active={day === "sun"} onClick={() => setDay("sun")}>
          Воскресенье
        </Button>
      </ButtonGroup>
      <ScheduleList schedule={day === "sat" ? satSchedule : sunSchedule} />
      <IconButton
        style={{ position: "fixed", right: "8px", bottom: "8px" }}
        icon={<StarIcon />}
        onClick={handelUserListClick}
      />
      {open && <UserList open={open} setOpen={setOpen} />}
    </div>
  );
};

export default App;
