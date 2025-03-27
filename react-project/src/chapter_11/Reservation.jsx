import React, { useState } from "react";

function Reservation(props) {
  const [haveBreakfast, setHaveBreakfast] = useState(false);
  const [numberOfGuest, setNumberOfGuest] = useState("");

  const handleSubmit = (event) => {
    alert(
      `${
        haveBreakfast ? "조식포함" : "조식미포함"
      }, 방문객 수: ${numberOfGuest}`
    );
    event.preventDefault();
  };
  //   const submitDisabled = numberOfGuest <= 0;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        조식포함 여부:
        <input
          type="checkbox"
          checked={haveBreakfast}
          onChange={(event) => {
            setHaveBreakfast(event.target.checked);
          }}
        />
      </label>
      <br />
      <label>
        방문객 수:
        <input
          type="number"
          value={numberOfGuest}
          onChange={(event) => {
            setNumberOfGuest(Number(event.target.value));
          }}
        />
      </label>
      <button type="submit" disabled={numberOfGuest <= 0}>
        제출
      </button>
    </form>
  );
}

export default Reservation;
