import { Tag } from "rsuite";

export const LectionCard = ({ lection, zone }) => {
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

  const getHours = (date) => {
    if (typeof date === "string") {
      return new Date(date).getHours();
    } else {
      return date.getHours();
    }
  };

  const getMinutes = (date) => {
    let min;
    if (typeof date === "string") {
      min = new Date(date).getMinutes();
    } else {
      min = date.getMinutes();
    }
    return min === 0 ? "00" : min;
  };

  const getTime = (date) => {
    return `${getHours(date)}:${getMinutes(date)}`;
  };

  return (
    <div
      style={{
        padding: "8px",
        marginTop: "8px",
        borderRadius: "12px",
        backgroundColor: "WhiteSmoke",
        marginRight: "-8px",
      }}
    >
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
          {getTime(lection.start)}
        </p>
      </div>
    </div>
  );
};
