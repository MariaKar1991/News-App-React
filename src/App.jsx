import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import { useState } from "react";

const App = () => {
  // State to manage the selected news category
  const [category, setCategory] = useState("general");

  return (
    <div>
      {/* Navbar component with setCategory prop */}
      <Navbar setCategory={setCategory} />

      {/* NewsBoard component with category prop */}
      <NewsBoard category={category} />
    </div>
  );
};

export default App;
