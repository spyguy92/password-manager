import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./components/Footer";
import { Manager } from "./components/Manager";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <Navbar />
      <div className="min-h-[89vh]">
      <Manager />
      </div>
      <Footer />
    </>
  );
}

export default App;
