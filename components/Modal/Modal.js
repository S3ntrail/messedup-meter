import Popup from "reactjs-popup";
import { useState } from "react"

export default function Modal() {
  const [player, setPlayer] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const password = e.target.password.value;

    if (password === "") {
      alert("Enter the secret password. Or we will send in the clown gang");
      return;
    }

    const res = await fetch("/api/user/create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        password,
        player
      })
    })

    const resText = await res.text();
    if (resText.startsWith("SHAME")) {
      alert("SHAME. U HAVE TO RESTART THE HEIST AGAIN");
      return;
    } else {
      alert("SOMEONE TO SHAME HAS BEEN ADDED");
      setPlayer('')
    }

  }

  return (
    <Popup trigger={<button className="transition duration-500 ease-in-out border-2 border-gray-200 p-2 text-gray-200 transform hover:border-green-400 hover:text-green-500"> Add a new player </button>} modal nested>
      {(close) => (
        <div className="border-2 rounded">
          <button className="transition duration-500 ease-in-out text-white text-4xl transform hover:text-red-500" onClick={close}>
            &times;
          </button>
          <div>
            <h1 className="text-gray-200 text-4xl text-center">Add a player</h1>
          </div>

          <div className="justify-center">
            <div className="flex flex-wrap items-center m-8 mt-4 mb-20 p-10 bg-gray-850 rounded-xl">
              <form className="justify-center" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-8">
                  <input
                    placeholder="Player name"
                    name="player"
                    value={player}
                    type="text"
                    className="bg-gray-750 outline-none border-b-2 rounded p-2 focus:border-blue-350 text-white"
                    onChange={(e) => setPlayer(e.target.value)}
                  ></input>
                  <input
                    id="password"
                    placeholder="Password"
                    name="password"
                    type="password"
                    className="bg-gray-750 outline-none border-b-2 rounded p-2 focus:border-blue-350 text-white mt-6"
                  ></input>
                </div>
                <button type="submit" className="mt-8">
                  <p className="transition duration-500 ease-in-out text-3xl border-2 border-white p-4 text-white transform hover:border-green-400 hover:text-green-500">Add to the wall of Shame</p>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
}
