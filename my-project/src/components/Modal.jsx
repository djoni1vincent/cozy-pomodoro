export default function Modal({ setIsModalOpen }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      {/* ОКНО */}
      <div className="bg-purple-200 rounded-2xl shadow-2xl w-96 p-6 opacity-95">
        <h2 className="text-gray-900 font-bold text-xl mb-6">Settings</h2>

        {/* Тут будут настройки */}
        <div className="space-y-3">
          <p className="text-gray-800"></p>
        </div>

        <button
          onClick={() => setIsModalOpen(false)}
          className="mt-6 bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-xl w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
}
