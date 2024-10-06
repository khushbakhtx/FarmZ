import { useState, useEffect } from 'react';
import axios from 'axios';
import Section from "./components/Section"; 
import { Gradient } from "./components/design/Roadmap";

function Model() {
  const [inputData, setInputData] = useState({
    N: '',
    P: '',
    K: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: ''
  });

  const [prediction, setPrediction] = useState('');
  const [displayedPrediction, setDisplayedPrediction] = useState(''); 
  const [chatMessage, setChatMessage] = useState('');

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/predict', inputData);
      setPrediction(response.data.predicted_crops);
    } catch (error) {
      console.error("Error making prediction", error);
    }
  };

  useEffect(() => {
    if (prediction) {
      let index = -1;
      setDisplayedPrediction('');
      const timer = setInterval(() => {
        if (index <= prediction.length) {
          setDisplayedPrediction((prev) => prev + prediction.charAt(index)); 
          index++;
        } else {
          clearInterval(timer); 
        }
      }, 20); 
  
      return () => clearInterval(timer);
    }
  }, [prediction]);


  const handleChatSubmit = (e) => {
    e.preventDefault();
    console.log("Chat message sent:", chatMessage);
    setChatMessage('');
  };

  const formatPrediction = (text) => {
    return text.split('\n').map((line, index) => <span key={index}>{line}<br /></span>);
  };

  return (
    <Section className="overflow-hidden" id="model">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Crop Growth Prediction & Chat Demo</h1>
        
        <div className="relative grid gap-6 md:grid-cols-2">
          <div className="relative p-0.25 rounded-[2.5rem] bg-gradient-to-r from-grey-800 to-blue-900">
            <div className="relative p-8 bg-gray-850 rounded-[2.4375rem] overflow-hidden">
              <h2 className="text-xl font-semibold mb-4">Farm Assistant [Potential FarmGPT]</h2>
              <div className="chat-messages h-90 overflow-y-auto mb-4 border border-gray-700 rounded-lg p-3.5">
                <h2>{formatPrediction(displayedPrediction)}</h2> 
              </div>
              <form className="flex" onSubmit={handleChatSubmit}>

              </form>
            </div>
          </div>

          <div className="relative p-0.25 rounded-[2.5rem] bg-gradient-to-r">
            <div className="relative p-8 bg-gray-850 rounded-[2.4375rem] overflow-hidden">
              <h2 className="text-xl font-semibold mb-4">Crop Growth Prediction</h2>
              <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                {['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall'].map((field) => (
                  <input 
                    key={field}
                    className="p-2 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white" 
                    name={field} 
                    placeholder={`${field === 'N' ? 'Nitrogen' : field === 'P' ? 'Phosphorus' : field === 'K' ? 'Potassium' : field.charAt(0).toUpperCase() + field.slice(1)} (${field === 'temperature' ? '°C' : field === 'humidity' ? '%' : field === 'ph' ? '' : 'mm'})`} 
                    value={inputData[field]} 
                    onChange={handleChange} 
                  />
                ))}
                <button type="submit" className="py-2 bg-purple-800 text-white rounded-lg hover:bg-gray-500 transition duration-400 ease-in-out">
                  Predict
                </button>
              </form>
            </div>
          </div>
        </div>

        <Gradient />
      </div>
    </Section>
  );
}

export default Model;
