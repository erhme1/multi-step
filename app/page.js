"use client";
import Image from "next/image";
import { Card } from "./components/stepOne";
import { useState } from "react";
import { Card2 } from "./components/stepTwo";
import { Card3 } from "./components/stepThree";
 
export default function Home() {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const backStep = () => {
    setStep(step - 1);
  };
 
  return (
    <>
      <div className="bg-[#F4F4F4] w-full h-screen flex justify-center items-center">
        {step == 1 && <Card onclick={nextStep} />}
        {step == 2 && <Card2 onclick={nextStep} Back={backStep} />}
        {step == 3 && <Card3 onclick={nextStep} Back={backStep} />}
      </div>
    </>
  );
}