import { CarouselDemo } from "./components/demo/CarousselDemo";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="bg-background h-screen flex flex-col items-center justify-center">
      <h1 className="pb-3.5 font-bold">Welcome to my test area!</h1>
      <div className="py-1.5">
        <Button>I am a test-button</Button>
      </div>
      <div className="p-3.5 my-3.5 border-2 border-black rounded">
        <p className="text-center">Test Carousel</p>
        <CarouselDemo></CarouselDemo>
      </div>
    </div>
  );
}

export default App;
