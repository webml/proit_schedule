import { Tag } from "rsuite";

export const SectionList = ({ schedule, setCurrentList, setOpen, setZone }) => {
  const handelSectionClick = (lections, zone) => {
    setCurrentList(lections);
    setOpen(true);
    setZone(zone);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "8px",
        paddingTop: "24px",
        marginBottom: "16px",
        margin: "0 8px",
        borderRadius: "8px",
        height: "calc(100% - 32px)",
      }}
    >
      {schedule.map((sec, index) => (
        <div
          key={index}
          style={{
            margin: "8px auto",
            maxWidth: "480px",
            padding: "8px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "WhiteSmoke",
            borderRadius: "12px",
          }}
          onClick={() => handelSectionClick(sec.lection, sec.section)}
        >
          <h6>{sec.section}</h6>
          <Tag style={{ marginRight: "4px", height: "26px" }}>{sec.zone}</Tag>
        </div>
      ))}
    </div>
  );
};
