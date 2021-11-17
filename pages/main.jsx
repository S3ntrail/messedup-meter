import { useRef, useState, useEffect } from "react";
import { useInterval } from "react-use";

export default function Main() {
  const inputRef = useRef(null);
  const [currentCounters, setCurrentCounters] = useState(null);

  const fetchCounts = async () => {
    const res = await fetch("/api/counters");

    return res.json();
  };

  const updateCounters = async () => {
    const counts = await fetchCounts();

    setCurrentCounters(counts);
  };

  const changeCounter = async (type, id) => {
    const password = inputRef.current.value;
    console.log(password);
    if (password === "") {
      alert("Enter the secret password. Or we will send in the clown gang");
      return;
    }

    const res = await fetch(`/api/${type}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        password,
        id,
      }),
    });

    const resText = await res.text();
    if (resText.startsWith("SHAME")) {
      alert("SHAME. BEGONE BEFORE I SEND IN A POLICE ASSAULT");
      return;
    }
    updateCounters();
  };

  useEffect(() => {
    updateCounters();
  }, []);

  useInterval(() => {
    updateCounters();
  }, 10000);

  const anthonyCounter = currentCounters
    ? currentCounters.find((counter) => counter.id === "anthony")
    : null;
  const aruneshCounter = currentCounters
    ? currentCounters.find((counter) => counter.id === "arunesh")
    : null;

  return (
    <main>
      <div className="container text-gray-200">
        <div className="grid grid-cols-2 gap-4">
          {/* Card */}

          <div className="w-full bg-gray-900 rounded-lg p-12 flex flex-col">
            <div className="mb-2">
              <h1 className="text-5xl font-semibold bg-gray-900 text-center">
                Anthony
              </h1>
            </div>
            <div className="text-center bg-gray-900">
              <div className="mb-6 mt-2">
                <hr></hr>
              </div>
              <p className="text-base text-gray-400 font-normal bg-gray-900">
                <h1 className="text-6xl bg-gray-900">
                  {anthonyCounter?.count !== undefined
                    ? anthonyCounter.count
                    : "Loading"}
                </h1>
              </p>
            </div>
            <div className="mb-6 mt-2">
              <hr></hr>
            </div>

            <div className="w-full bg-gray-900 rounded-lg flex flex-col justify-center items-center">
              <div className="grid grid-cols-2 gap-4 m-4 bg-gray-900">
                <button
                  onClick={() => changeCounter("decrement", anthonyCounter.ref)}
                  className="py-2 px-4 border-2 border-red-700 text-gray-200 font-semibold rounded transition duration-700 ease-in-out hover:bg-red-700 hover:border-red-700"
                >
                  Decrease
                </button>
                <button
                  onClick={() => changeCounter("increment", anthonyCounter.ref)}
                  className="py-2 px-4 border-2 border-green-700 text-gray-200 font-semibold rounded transition duration-700 ease-in-out hover:bg-green-700 hover:border-green-700"
                >
                  Increase
                </button>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="w-full bg-gray-900 rounded-lg p-12 flex flex-col">
            <div className="mb-2">
              <h1 className="text-5xl font-semibold bg-gray-900 text-center">
                Arunesh
              </h1>
            </div>
            <div className="text-center bg-gray-900">
              <div className="mb-6 mt-2">
                <hr></hr>
              </div>
              <p className="text-base text-gray-400 font-normal bg-gray-900">
                <h1 className="text-6xl bg-gray-900">
                  {aruneshCounter?.count !== undefined
                    ? aruneshCounter.count
                    : "Loading"}
                </h1>
              </p>
            </div>
            <div className="mb-6 mt-2">
              <hr></hr>
            </div>

            <div className="w-full bg-gray-900 rounded-lg flex flex-col justify-center items-center">
              <div className="grid grid-cols-2 gap-4 m-4 bg-gray-900">
                <button
                  onClick={() => changeCounter("decrement", aruneshCounter.ref)}
                  className="py-2 px-4 border-2 border-red-700 text-gray-200 font-semibold rounded transition duration-700 ease-in-out hover:bg-red-700 hover:border-red-700"
                >
                  Decrease
                </button>
                <button
                  onClick={() => changeCounter("increment", aruneshCounter.ref)}
                  className="py-2 px-4 border-2 border-green-700 text-gray-200 font-semibold rounded transition duration-700 ease-in-out hover:bg-green-700 hover:border-green-700"
                >
                  Increase
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="w-full bg-gray-900 rounded-lg p-12 flex flex-col mt-10">
          <div className="mb-2">
            <h1 className="text-5xl font-semibold bg-gray-900 text-center">
              Enter your password
            </h1>
          </div>
          <div className="text-center bg-gray-900">
            <div className="mb-2 mt-2">
              <hr></hr>
            </div>

            <input
              ref={inputRef}
              type="password"
              className="appearance-none rounded p-2 border-b-2 border-green-500"
            />

          </div>
          <div className="mt-2 bg-gray-900">
            <hr></hr>
            <p className="bg-gray-900 mt-4 text-center">Once you set your password. You can just press the increase or decrease button</p>
          </div>
          
        </div>
      </div>
    </main>
  );
}
