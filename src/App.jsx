import { CarouselDemo } from "./components/demo/CarousselDemo";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="px-20">
        <Button>Push me</Button>
        <CarouselDemo></CarouselDemo>
      </div>
    </>
  );
}

export default App;
