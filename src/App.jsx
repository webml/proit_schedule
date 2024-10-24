import "rsuite/dist/rsuite.min.css";
import "./styles.css";
import { ButtonGroup, Button, IconButton } from "rsuite";
import { useState } from "react";
import { satSchedule, sunSchedule } from "./schedule_data";
import { LectionList } from "./components/LectionList";
import StarIcon from "@rsuite/icons/legacy/Star";
import MapIcon from "@rsuite/icons/legacy/MapSigns";

import { SectionList } from "./components/SectionList";
import { Map } from "./components/Map";

const App = () => {
  const [day, setDay] = useState("sat");
  const [open, setOpen] = useState(false);
  const [openMap, setOpenMap] = useState(false);
  const [currentList, setCurrentList] = useState([]);
  const [zone, setZone] = useState("Избранные");

  const mode = {
    sat: satSchedule,
    sun: sunSchedule,
  };

  const handelLectionListClick = () => {
    const lections = JSON.parse(localStorage.getItem("userLections"));

    const sorted = lections?.sort((a, b) => (a.start > b.start ? 1 : -1));

    console.log(lections);

    setCurrentList(sorted);
    setZone("Избранные");
    setOpen(true);
  };

  const handelMapClick = () => {
    setOpenMap(true);
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        position: "relative",
        height: "100dvh",
        display: "grid",
        gridColumn: 1,
        gridTemplateRows: "224px 14px auto 32px",
      }}
    >
      <img
        style={{
          padding: "8px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "8px",
          marginBottom: "16px",
          height: "208px",
          boxSizing: "border-box",
        }}
        src="logo.png"
      />
      <ButtonGroup
        style={{
          paddingRight: "16px",
          paddingLeft: "16px",
          marginBottom: "-16px",
        }}
        size="sm"
        justified
      >
        {/* <Button
          style={{ backgroundColor: day === "sat" ? "snow" : "lightgray" }}
          active={day === "sat"}
          onClick={() => setDay("sat")}
        >
          Суббота
        </Button> */}
        {/* <Button
          style={{ backgroundColor: day === "sun" ? "snow" : "lightgray" }}
          active={day === "sun"}
          onClick={() => setDay("sun")}
        >
          Воскресенье
        </Button> */}
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
      <Button
        style={{
          position: "fixed",
          right: "8px",
          bottom: "24px",
          boxShadow: "0 0 8px rgba(0,0,0,.25)",
        }}
        onClick={handelLectionListClick}
      >
        <StarIcon color="coral" style={{ marginRight: '8px'}} />Избранное
      </Button>
      <Button
        style={{
          position: "fixed",
          left: "8px",
          bottom: "24px",
          boxShadow: "0 0 8px rgba(0,0,0,.25)",
        }}
        onClick={handelMapClick}
      ><MapIcon color="DodgerBlue" style={{ marginRight: '8px'}}/>Карта</Button>
      {open && (
        <LectionList
          zone={zone}
          open={open}
          setOpen={setOpen}
          lections={currentList}
        />
      )}
      {openMap && <Map open={openMap} setOpen={setOpenMap} />}
    </div>
  );
};

export default App;
