import GallerySection from "./components/GallerySection";
import Hr from "./components/Hr";
import TabsSection from "./components/TabsSection";

function App() {
  return (
    <div className="flex justify-end mt-14 mr-14">
      <div className="w-[47%] space-y-5 pb-14">
        <TabsSection />
        <Hr />
        <GallerySection />
        <Hr />
      </div>
    </div>
  );
}

export default App;
