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
        {day === "sat" ? <img /> : <img />}
      </Drawer.Body>
    </Drawer>
  );
};
