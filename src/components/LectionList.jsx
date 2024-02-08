import { Drawer } from "rsuite";
import { ScheduleList } from "./ScheduleList";

export const LectionList = ({ open, setOpen, lections, zone }) => {
  const handleClose = () => {
    setOpen(false);
  };

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
        <ScheduleList lection={lections} />
      </Drawer.Body>
    </Drawer>
  );
};
