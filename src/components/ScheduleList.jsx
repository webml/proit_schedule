import { IconButton, Panel, PanelGroup, Tag } from "rsuite";
import { LectionCard } from "./LectionCard";
import StarIcon from "@rsuite/icons/legacy/Star";

export const ScheduleList = ({ schedule }) => {
  return (
    <PanelGroup accordion>
      {schedule.map((sec, index) => (
        <Panel
          key={index}
          header={
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {sec.section}
              <Tag style={{ marginRight: "4px" }}>{sec.zone}</Tag>
            </div>
          }
          eventKey={sec.section}
        >
          {sec.lection.map((lec, index) => (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns: "32px auto",
                alignItems: "baseline",
              }}
            >
              <IconButton
                style={{ height: "30px", width: "30px" }}
                icon={<StarIcon color="coral" />}
                appearance="subtle"
                size="sm"
              />
              <LectionCard lection={lec} />
            </div>
          ))}
        </Panel>
      ))}
    </PanelGroup>
  );
};
