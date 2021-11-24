import Popup from "reactjs-popup";

export default function Modal() {
  return (
    <Popup trigger={<button className="transition duration-500 ease-in-out border-2 border-gray-200 p-2 text-gray-200 transform hover:border-green-400 hover:text-green-500"> Add a new player </button>} modal>
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
              <form className="justify-center">
                <div className="flex flex-col mb-8">
                  <input
                    type="text"
                    className="bg-gray-750 outline-none border-b-2 rounded p-2 focus:border-blue-350 text-white"
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
