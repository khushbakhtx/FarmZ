import { useState } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Model from "./Model";
import Modal from "./Modal";

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(prev => !prev);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Pricing />
        <Roadmap />

      <div className="flex justify-center mb-4">
        <Button onClick={toggleModal}>
          Try Our Machine Learning Model
        </Button>
      </div>
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <Model />
        </Modal>

        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
