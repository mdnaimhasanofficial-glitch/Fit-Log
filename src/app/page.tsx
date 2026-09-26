import { ToastContainer } from "react-toastify";
import Banner from "./components/Banner";
import Library from "./components/Library"; // আপনার প্রজেক্টের সঠিক পাথ অনুযায়ী ইমপোর্ট করুন

export default function Home() {
  return (
    <div>
      <Banner />
      <Library />

    </div>
  );
}