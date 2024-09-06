import { useState } from "react";

export default function Side() {
  const [resultVisible, setResultVisible] = useState(false);

  const [angles, setAngles] = useState({
    c: "",
    sideA: "",
    sideB: "",
  });
  const [resultSide, setResultSide] = useState({
    a: 0,
    b: 0,
    c: 0,
  });

  function handleCalcSides() {
    const crad = angles.c * (Math.PI / 180);
    const sideC = Math.sqrt(
      Number(angles.sideA) ** 2 +
        Number(angles.sideB) ** 2 -
        2 * Number(angles.sideA) * Number(angles.sideB) * Math.cos(crad)
    ).toFixed(2);

    if (isNaN(sideC) || sideC === 0) {
      setResultVisible(false);
    } else {
      setResultSide((prevState) => ({
        ...prevState,
        a: angles.sideA,
        b: angles.sideB,
        c: sideC,
      }));

      setResultVisible(true);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col space-y-6  px-10 py-8 rounded-md mt-6 bg-gray-200 ">
        <div className="flex flex-col space-y-3 items-center">
          <label htmlFor="a">Digite o valor do ângulo C</label>
          <input
            type="number"
            id="a"
            className="h-10 border border-gray-300 outline-none p-3 rounded-md"
            placeholder="Ex.: 90"
            value={angles.c}
            onChange={(e) =>
              setAngles((prevState) => ({
                ...prevState,
                c: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-col space-y-3 items-center">
          <label htmlFor="b">Digite o valor do lado A</label>
          <input
            type="number"
            id="b"
            className="h-10 border border-gray-300 outline-none p-3 rounded-md"
            placeholder="Ex.: 8"
            value={angles.sideA}
            onChange={(e) =>
              setAngles((prevState) => ({
                ...prevState,
                sideA: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-col space-y-3 items-center">
          <label htmlFor="c">Digite o valor do lado B</label>
          <input
            type="number"
            id="c"
            className="h-10 border border-gray-300 outline-none p-3 rounded-md"
            placeholder="Ex.: 10"
            value={angles.sideB}
            onChange={(e) =>
              setAngles((prevState) => ({
                ...prevState,
                sideB: e.target.value,
              }))
            }
          />
        </div>
      </div>
      {resultVisible && (
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="space-x-2 flex flex-col gap-4 items-center justify-center lg:flex-row">
            <span className="px-6 py-4 bg-gray-700 text-white rounded-md text-lg text-center">
              Lado A - {resultSide.a}
            </span>
            <span className="px-6 py-4 bg-gray-700 text-white rounded-md text-lg text-center">
              Lado B - {resultSide.b}
            </span>
            <span className="px-6 py-4 bg-gray-700 text-white rounded-md text-lg text-center">
              Lado C - {resultSide.c}
            </span>
          </div>
        </div>
      )}

      {!resultVisible && resultSide.c != 0 && (
        <div className="px-6 py-4 bg-gray-700 text-white rounded-md text-lg">
          <h3 className="text-xl">
            Utilizando os valores inseridos não é possível calcular o valor dos
            lados.
          </h3>
        </div>
      )}
      <button
        onClick={handleCalcSides}
        className="border-2 border-gray-900 h-10 p-6 rounded-md flex justify-center items-center  hover:bg-gray-700 hover:text-white transition-colors"
      >
        Calcular ângulos
      </button>
    </div>
  );
}
