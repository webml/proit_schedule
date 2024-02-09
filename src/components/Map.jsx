import { useState } from "react";
import { Drawer, ButtonGroup, Button } from "rsuite";

export const Map = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const [day, setDay] = useState("sat");

  return (
    <Drawer size="full" placement={"bottom"} open={open} onClose={handleClose}>
      <Drawer.Header
        style={{
          padding: "8px 16px 8px",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Drawer.Title>Карта</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body style={{ margin: 0, padding: "0 8px 16px" }}>
        <div style={{ marginTop: "16px" }}></div>
        {day === "sat" ? (
          <img
            src="map_sat.jpg"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        ) : day === "sun" ? (
          <img
            src="map_sun.jpg"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        ) : (
          <img
            src="map_drink.jpg"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        )}
        <ButtonGroup
          style={{
            paddingRight: "16px",
            paddingLeft: "16px",
            marginTop: "-16px",
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
            style={{ backgroundColor: day === "dr" ? "snow" : "lightgray" }}
            active={day === "dr"}
            onClick={() => setDay("dr")}
          >
            Drinkup
          </Button>
          <Button
            style={{ backgroundColor: day === "sun" ? "snow" : "lightgray" }}
            active={day === "sun"}
            onClick={() => setDay("sun")}
          >
            Воскресенье
          </Button>
        </ButtonGroup>
      </Drawer.Body>
    </Drawer>
  );
};
