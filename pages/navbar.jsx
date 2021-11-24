import Modal from "../components/Modal/Modal";

export default function Navbar() {
  return (
    <nav className="bg-grey shadow">
      <div className="container mx-auto p-4 flex flex-wrap items-center justify-center">
        <div className="mr-4 md:mr-8">
          <h1 className="font-bold text-gray-200 text-6xl md:text-5xl sm:text-5xl">Messedup-Meter</h1>
        </div>

        <div className="flex flex-wrap">
          <Modal />
        </div>
      </div>
    </nav>
  );
}
