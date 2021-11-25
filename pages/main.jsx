import { useRef, useState, useEffect } from "react";
import { useInterval } from "react-use";

import Menu from '../components/Menu/Menu'

export default function Main() {
  const inputRef = useRef(null);
  const [currentCounters, setCurrentCounters] = useState();

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

  return (
    <main>
      <div className="w-full text-gray-200">
        <div className="grid grid-cols-2 gap-4">
          {currentCounters && currentCounters.length > 0
            ? currentCounters.map((user) => (
                <div
                  className="w-full bg-gray-900 rounded-lg p-8 flex flex-col"
                  key={user.ref}
                >
                  <div className="bg-gray-900 rounded-lg">
                    <div className="flex gap-2 m-4 bg-gray-900 float-right m-auto">
                      <Menu 
                        id={user.ref}
                        password={inputRef.current.value}
                      />
                    </div>
                  </div>

                  <div className="mb-2">
                    <h1 className="text-5xl font-semibold bg-gray-900 text-center">
                      {user.name}
                    </h1>
                  </div>
                  <div className="text-center bg-gray-900">
                    <div className="mb-6 mt-2">
                      <hr></hr>
                    </div>
                    <div className="text-base text-gray-400 font-normal bg-gray-900">
                      <h1 className="text-6xl bg-gray-900">
                        {user.count !== undefined ? user.count : "Loading"}
                      </h1>
                    </div>
                  </div>
                  <div className="mb-6 mt-2">
                    <hr></hr>
                  </div>
                  <div className="w-full bg-gray-900 rounded-lg flex flex-col justify-center items-center">
                    <div className="grid grid-cols-2 gap-4 m-4 bg-gray-900">
                      <button
                        onClick={() => changeCounter("decrement", user.ref)}
                        className="py-2 px-4 border-2 border-red-700 text-gray-200 font-semibold rounded transition duration-700 ease-in-out hover:bg-red-700 hover:border-red-700"
                      >
                        Decrease
                      </button>
                      <button
                        onClick={() => changeCounter("increment", user.ref)}
                        className="py-2 px-4 border-2 border-green-700 text-gray-200 font-semibold rounded transition duration-700 ease-in-out hover:bg-green-700 hover:border-green-700"
                      >
                        Increase
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : "Loading"}
        </div>

        {/* Password */}
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
            <p className="bg-gray-900 mt-4 text-center">
              Once you set your password. You can just press the increase or
              decrease button
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
