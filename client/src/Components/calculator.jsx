import React, { useEffect, useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState([]);
  const [ans, setAns] = useState(0);
  const values = [
    {
      value: 9,
    },
    {
      value: 8,
    },
    {
      value: 7,
    },
    {
      value: "/",
    },
    {
      value: 6,
    },
    {
      value: 5,
    },
    {
      value: 4,
    },
    {
      value: "X",
    },
    {
      value: 3,
    },
    {
      value: 2,
    },
    {
      value: 1,
    },
    {
      value: "+",
    },
    {
      value: 0,
    },
    {
      value: "-",
    },
  ];

  const handleClick = (value) => {
    setValue((prevState) => [...prevState, value]);
  };

  const handleClear = () => {
    setValue([]);
  };

  const submitHandler = (value) => {
    let expression = "";
    expression = value.join(",");
    const exp = expression.replace(/,/g, "");
    const char1 = "/";
    const char2 = "X";
    const char3 = "+";
    const char4 = "-";

    let existingChar;

    if (exp.includes(char1)) {
      existingChar = char1;
    } else if (exp.includes(char2)) {
      existingChar = char2;
    } else if (exp.includes(char3)) {
      existingChar = char3;
    } else if (exp.includes(char4)) {
      existingChar = char4;
    }
    const splited = exp.split(existingChar);
    console.log(existingChar);
    const a = Number(splited[0]);
    const b = Number(splited[1]);

    const performArithm = () => {
      if (existingChar === char1) {
        return a / b;
      } else if (existingChar === char2) {
        return a * b;
      } else if (existingChar === char3) {
        return a + b;
      } else if (existingChar === char4) {
        return a - b;
      }
    };

    setAns(performArithm());
  };

  useEffect(() => {
    if (ans !== 0) {
      setValue((prevState) => [...prevState, "=", ans]);
    }
  }, [ans]);

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <h1 className="text-center">Calculator</h1>
        <div className="col-6 shadow-lg">
          <div className="my-3 d-flex justify-content-center">
            <div className="input-cont">
              {value.map((item) => {
                return (
                  <div>
                    {item} {""}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="row mb-3" style={{ width: "100%", margin: "auto" }}>
            {values.map((item) => {
              const { value } = item;
              return (
                <button
                  className="col-3"
                  key={value}
                  onClick={() => handleClick(value)}
                >
                  {value}
                </button>
              );
            })}
            <button className="col-3" onClick={handleClear}>
              Clear
            </button>
            <button
              className="btn-blue col-3"
              onClick={() => submitHandler(value)}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
