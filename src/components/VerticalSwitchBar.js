import React from "react";
import "../styles/VerticalSwitchBar.css";

const VerticalSwitchBar = ({ selected, setSelected }) => {
  return (
    <div>
      <SwitchButton
        value="Aerodynamics"
        selected={selected}
        setSelected={setSelected}
      />
      <SwitchButton
        value="Chassis"
        selected={selected}
        setSelected={setSelected}
      />
      <SwitchButton
        value="Electronics"
        selected={selected}
        setSelected={setSelected}
      />
      <SwitchButton
        value="Powertrain"
        selected={selected}
        setSelected={setSelected}
      />
      <SwitchButton
        value="Suspension"
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

const SwitchButton = ({ value, selected, setSelected }) => {
  return (
    <>
      {selected === value && (
        <div
          onClick={() => setSelected(value)}
          className="SwitchButtonBase SwitchButtonSelected"
        >
          <text>{value}</text>
        </div>
      )}
      {selected !== value && (
        <div
          onClick={() => setSelected(value)}
          className="SwitchButtonBase SwitchButtonUnselected"
        >
          <text>{value}</text>
        </div>
      )}
    </>
  );
};

export default VerticalSwitchBar;
