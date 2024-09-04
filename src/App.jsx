import GallerySection from "./components/GallerySection";
import Hr from "./components/Hr";
import TabsSection from "./components/TabsSection";

function App() {
  return (
    <div className="flex justify-end my-14 mx-14">
      <div className="xl:w-[47%] space-y-5 pb-14">
        <TabsSection />
        <Hr />
        <GallerySection />
        <Hr />
      </div>
    </div>
  );
}

export default App;
