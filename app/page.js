"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";


import {
  BsFillStopFill,
  BsFillPlayFill,
  BsSkipForward,
  BsSkipBackward,
  BsFillPauseFill,
} from "react-icons/bs";

export default function Home() {
  
  const waveformRef = useRef(null);
  let wavesurfer;
  const [playPause, setPlayPause] = useState();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#35374B",
      progressColor: "#97BC62",
      url: "/nigastyle.mp3",
      dragToSeek: true,
      width: "22vw",
      hideScrollbar: true,
      normalize: true,
      barGap: 1.6,
      height: 75,
      barHeight: 50,
      barRadius: 5,
      barWidth: 5,
    });

    wavesurfer.on("finish", () => {
      console.log("song finished");
    });

    wavesurfer.on("ready", () => {
      console.log("Waveform is ready");
    });
    return () => {
      wavesurfer.destroy();
    };
  }, []);
  const handleStop = () => {
    if (wavesurfer) {
      wavesurfer.stop();
    }
  };
  const handlePause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
    }
  };

  const handleSkipForward = () => {
    if (wavesurfer) {
      wavesurfer.skip(20);
    }
  };
  const handleSkipBack = () => {
    if (wavesurfer) {
      wavesurfer.skip(-20);
    }
  };

  return (
    <div className="container">
      
      <div class="relative">
        
      <div class="absolute inset-0">
      <div className='absolute top-0 flex w-full justify-center'>
      <div className='left-9 h-[0.7px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
      </div>
      </div>

      <div className="opacity-0 hover:opacity-100 relative card">
      <div class="relative card2 ">  
      <img src="nigastyle.png" alt="Image" width="250" height="500"></img>
      <button className='transition-background inline-flex h-11 items-center justify-center rounded-md bg-gradient-to-b from-slate-700 via-[#191b28] to-[#328339]  bg-[length:60%_200%] bg-[0%_0%] px-6 font-medium text-gray-950 duration-500 hover:bg-[100%_90%] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
        <span class="pr-none inline-block text-transparent bg-clip-text bg-[linear-gradient(to_right,theme(colors.emerald.300),theme(colors.green.500),theme(colors.lime.400),theme(colors.lime.300),theme(colors.emerald.400),theme(colors.lime.600),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient">niggastyle</span>
      </button>
      
        <div ref={waveformRef} className="wavesurfer-container pt-5" />
        <div className="wavesurfer-controls">
          <button onClick={handleSkipBack}>
            <BsSkipBackward />
          </button>
          <button onClick={handlePause}>
            <BsFillPlayFill />
          </button>
          <button onClick={handleStop}>
            <BsFillStopFill />
          </button>
          <button onClick={handleSkipForward}>
            <BsSkipForward />
          </button>
        
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
