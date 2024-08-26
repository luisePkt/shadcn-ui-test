import { CarouselDemo } from "./components/demo/CarousselDemo";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="px-20 py-20">
        <Button>I am a test-button</Button>
      </div>
      <div className="px-20 py-20">
        <p>Test Carousel</p>
        <CarouselDemo></CarouselDemo>
      </div>
    </>
  );
}

export default App;
