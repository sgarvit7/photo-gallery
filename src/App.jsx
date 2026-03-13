import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="p-6 bg-[#013328] min-h-screen">
      <h1 className="text-3xl font-bold text-[#cc8b65] text-center mb-6">
        Photo Gallery
      </h1>

      <Gallery />
    </div>
  );
}

export default App;