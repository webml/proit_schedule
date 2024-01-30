import { PanelGroup, Panel, Placeholder } from "rsuite";

export const ScheduleList = () => {
  return (
    <PanelGroup accordion bordered>
      <Panel header="Panel 1" eventKey={1}>
        <Placeholder.Paragraph />
      </Panel>
      <Panel header="Panel 2" eventKey={2}>
        <Placeholder.Paragraph />
      </Panel>
      <Panel header="Panel 3" eventKey={3}>
        <Placeholder.Paragraph />
      </Panel>
    </PanelGroup>
  );
};
