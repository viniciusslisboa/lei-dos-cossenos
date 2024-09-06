import { useState } from "react";

export default function Angle() {
  const [sides, setSides] = useState({
    a: "",
    b: "",
    c: "",
  });
  const [resultVisible, setResultVisible] = useState(false);
  const [result, setResult] = useState({
    a: 0,
    b: 0,
    c: 0,
    sum: 0,
  });

  function degrees(radians) {
    return radians * (180 / Math.PI);
  }

  function handleCalcAngles() {
    const angleA = Number(
      degrees(
        Math.acos(
          (sides.b * sides.b + sides.c * sides.c - sides.a * sides.a) /
            (2 * sides.b * sides.c)
        )
      ).toFixed(2)
    );

    const angleB = Number(
      degrees(
        Math.acos(
          (sides.a * sides.a + sides.c * sides.c - sides.b * sides.b) /
            (2 * sides.a * sides.c)
        )
      ).toFixed(2)
    );

    const angleC = Number(
      degrees(
        Math.acos(
          (sides.a * sides.a + sides.b * sides.b - sides.c * sides.c) /
            (2 * sides.a * sides.b)
        )
      ).toFixed(2)
    );

    if (
      isNaN(angleA) ||
      angleA === 0 ||
      isNaN(angleB) ||
      angleB === 0 ||
      isNaN(angleC) ||
      angleC === 0
    ) {
      setResult((prevState) => ({
        ...prevState,
        sum: angleA,
      }));
      setResultVisible(false);
    } else {
      setResult((prevState) => ({
        ...prevState,
        a: angleA,
        b: angleB,
        c: angleC,
        sum: angleA + angleB + angleC,
      }));

      setResultVisible(true);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col space-y-6  px-10 py-8 rounded-md mt-6 bg-gray-200 ">
        <div className="flex flex-col space-y-3 items-center">
          <label htmlFor="a">Digite o comprimento do lado A</label>
          <input
            type="number"
            id="a"
            className="h-10 border border-gray-300 outline-none p-3 rounded-md"
            placeholder="Ex.: 3"
            value={sides.a}
            onChange={(e) =>
              setSides((prevState) => ({ ...prevState, a: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col space-y-3 items-center">
          <label htmlFor="b">Digite o comprimento do lado B</label>
          <input
            type="number"
            id="b"
            className="h-10 border border-gray-300 outline-none p-3 rounded-md"
            placeholder="Ex.: 4"
            value={sides.b}
            onChange={(e) =>
              setSides((prevState) => ({ ...prevState, b: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col space-y-3 items-center">
          <label htmlFor="c">Digite o comprimento do lado C</label>
          <input
            type="number"
            id="c"
            className="h-10 border border-gray-300 outline-none p-3 rounded-md"
            placeholder="Ex.: 5"
            value={sides.c}
            onChange={(e) =>
              setSides((prevState) => ({ ...prevState, c: e.target.value }))
            }
          />
        </div>
      </div>
      {resultVisible && result.sum != 0 && (
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="space-x-2 flex flex-col gap-6 items-center justify-center lg:flex-row">
            <span className="px-6 py-4 bg-gray-700 text-white rounded-md text-lg text-center">
              Ângulo A - {result.a}
            </span>
            <span className="px-6 py-4 bg-gray-700 text-white rounded-md text-lg text-center">
              Ângulo B - {result.b}
            </span>
            <span className="px-6 py-4 bg-gray-700 text-white rounded-md text-lg text-center">
              Ângulo B - {result.c}
            </span>
          </div>
          <div className="mt-6">
            <span className="px-6 py-4 bg-red-500 text-white rounded-md text-lg text-center">
              Soma dos ângulos internos - {result.sum}
            </span>
          </div>
        </div>
      )}

      {!resultVisible && (result.sum != 0 || isNaN(result.sum)) && (
        <div className="px-6 py-4 bg-gray-700 text-white rounded-md text-lg mx-4 text-center">
          <h3 className="text-xl">
            Utilizando os valores inseridos não é possível calcular o valor dos
            ângulos.
          </h3>
        </div>
      )}
      <button
        onClick={handleCalcAngles}
        className="border-2 border-gray-900 h-10 p-6 rounded-md flex justify-center items-center hover:bg-gray-700 hover:text-white transition-colors"
      >
        Calcular ângulos
      </button>
    </div>
  );
}
