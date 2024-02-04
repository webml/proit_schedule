import { Tag } from "rsuite";

export const LectionCard = ({ lection }) => {
  let speakers = "";

  if (lection.speaker !== null) {
    const speakersNames = lection.speaker.map((sp) => sp.name);

    if (speakersNames.length < 3) {
      speakers = speakersNames.join(", ");
    } else {
      speakers = `${speakersNames[0]}, ${speakersNames[1]} +${
        speakersNames.length - 2
      }`;
    }
  }

  return (
    <div
      style={{
        padding: "8px",
        marginTop: "8px",
        borderRadius: "12px",
        backgroundColor: "snow",
        marginRight: "-8px",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <div
            style={{
              display: "flex",
              columnGap: "8px",
              alignItems: "baseline",
            }}
          >
            <Tag>Frontend</Tag>
            <div>
              <p
                style={{
                  marginBottom: 0,
                  fontWeight: "bold",
                  textWrap: "balance",
                }}
              >
                {lection.name}
              </p>
              <p style={{ color: "gray", padding: 0, margin: 0 }}>{speakers}</p>
            </div>
          </div>
          <p style={{ padding: 0, margin: 0, marginRight: "8px" }}>
            {lection.start}
          </p>
        </div>
      </div>
    </div>
  );
};
