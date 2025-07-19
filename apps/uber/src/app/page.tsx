"use client";
import Image from "next/image";
import { Button } from "baseui/button";
import { Calendar } from "baseui/datepicker";
import { SingleSelect } from "baseui/select";

export default function Home() {


  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Button>
        click me
      </Button>
    </div>
  );
}
