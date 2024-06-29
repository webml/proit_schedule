import { useState } from "react";
import { Drawer } from "rsuite";

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
        <img src="map.png" style={{ width: "100%", borderRadius: "8px" }} />
      </Drawer.Body>
    </Drawer>
  );
};
