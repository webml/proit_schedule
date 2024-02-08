import "rsuite/dist/rsuite.min.css";
import "./styles.css";
import { ScheduleList } from "./components/ScheduleList";
import { ButtonGroup, Button, IconButton } from "rsuite";
import { useState } from "react";
import { satSchedule, sunSchedule } from "./schedule_data";
import { LectionList } from "./components/LectionList";
import StarIcon from "@rsuite/icons/legacy/Star";
import { SectionList } from "./components/SectionList";

const App = () => {
  const [day, setDay] = useState("sat");
  const [open, setOpen] = useState(false);
  const [currentList, setCurrentList] = useState([]);
  const [zone, setZone] = useState("Ваш список");

  const mode = {
    sat: satSchedule,
    sun: sunSchedule,
  };

  const handelLectionListClick = () => {
    setOpen(true);
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        position: "relative",
        height: "100dvh",
        display: "grid",
        gridColumn: 1,
        gridTemplateRows: "14px auto 32px",
      }}
    >
      <ButtonGroup
        style={{
          paddingRight: "16px",
          paddingLeft: "16px",
          marginBottom: "-16px",
        }}
        size="sm"
        justified
      >
        <Button
          style={{ backgroundColor: day === "sat" ? "snow" : "lightgray" }}
          active={day === "sat"}
          onClick={() => setDay("sat")}
        >
          Суббота
        </Button>
        <Button
          style={{ backgroundColor: day === "sun" ? "snow" : "lightgray" }}
          active={day === "sun"}
          onClick={() => setDay("sun")}
        >
          Воскресенье
        </Button>
      </ButtonGroup>
      <SectionList
        schedule={mode[day]}
        setCurrentList={setCurrentList}
        setOpen={setOpen}
        setZone={setZone}
      />
      <a
        target="_blank"
        href="https://t.me/lumek"
        style={{
          padding: "8px",
          margin: "0 auto",
          color: "DimGray",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        Разработал Миша Любарец
      </a>
      <IconButton
        style={{
          position: "fixed",
          right: "8px",
          bottom: "24px",
          boxShadow: "0 0 8px rgba(0,0,0,.25)",
        }}
        icon={<StarIcon color="coral" />}
        onClick={handelLectionListClick}
      />
      {open && (
        <LectionList
          zone={zone}
          open={open}
          setOpen={setOpen}
          lections={currentList}
        />
      )}
    </div>
  );
};

export default App;
