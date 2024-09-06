import { useState } from "react";
import Angle from "./components/Angle";
import Side from "./components/Side";

// eslint-disable-next-line react/prop-types
const RadioInput = ({ label, value, onChange }) => {
  return (
    <label className="space-x-2">
      <input name="choice" type="radio" value={value} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
};

function App() {
  const [typeChecked, setTypeChecked] = useState(null);

  function handleTypeSelected(e) {
    setTypeChecked(e.target.value);
  }

  return (
    <div className="flex justify-center items-center flex-col pt-10 w-full">
      <h1 className="text-2xl font-semibold">Calculadora - Lei dos Cossenos</h1>
      <div className="flex pt-10 space-x-8">
        <RadioInput
          label="Calcular ângulos"
          value="angle"
          onChange={handleTypeSelected}
        />
        <RadioInput
          label="Calcular lado"
          value="side"
          onChange={handleTypeSelected}
        />
      </div>

      {typeChecked === "side" && <Side />}
      {typeChecked === "angle" && <Angle />}

      <span className="mt-10 mb-10 text-sm font-semibold ">
        Developed By{" "}
        <a href="https://github.com/viniciusslisboa" className="text-cyan-600">
          Vinícius Soares Lisboa
        </a>
      </span>
    </div>
  );
}

export default App;
