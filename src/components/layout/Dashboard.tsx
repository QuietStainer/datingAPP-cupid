import React from "react";
import ImageCarousel from "../common/ImageCarousel";
import Header from "./header";
import Chat from "../chat/chat";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="md:flex flex-col hidden w-full">
        <Header />
        <Chat />
      </div>
      <div className="sm:flex md:hidden flex-col mt-14 h-full justify-center">
        <div className="flex justify-between px-5 gap-20">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 1024 1024"><path fill="#FF5069" d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32z"></path></svg>
          </div>
          <div className="flex items-center h-[43px]">
            <img className="w-[115px] h-[43px]" alt="dashboard_logo" src="/image/logo/logo.png" />
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#FF5069" d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.99.99 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12z"></path></svg>
          </div>
        </div>
        <div className="flex p-3">
          <ImageCarousel />
        </div>
        <div className="flex justify-between items-center  pt-4 px-10">
          <button className="bg-white rounded-full m-3 p-[18px] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 512 512"><path fill="#FF5069" d="m325.297 256l134.148-134.148c19.136-19.136 19.136-50.161 0-69.297c-19.137-19.136-50.16-19.136-69.297 0L256 186.703L121.852 52.555c-19.136-19.136-50.161-19.136-69.297 0s-19.136 50.161 0 69.297L186.703 256L52.555 390.148c-19.136 19.136-19.136 50.161 0 69.297c9.568 9.567 22.108 14.352 34.648 14.352s25.081-4.784 34.648-14.352L256 325.297l134.148 134.148c9.568 9.567 22.108 14.352 34.648 14.352s25.08-4.784 34.648-14.352c19.136-19.136 19.136-50.161 0-69.297z"></path></svg>
          </button>
          <button className="bg-[#FF5069] rounded-full m-3 p-5 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24"><path fill="#FFFFFF" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"></path></svg>
          </button>
          <button className="bg-[#FFB431] rounded-full m-3 p-[18px] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><path fill="#FFFFFF" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
          </button>
        </div>
        <div className="flex w-full h-[55px] justify-between items-center px-8 bg-white fixed bottom-0">
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10.1074" y="4.3732" width="13" height="18" rx="2" fill="#E94057" stroke="white"/>
              <rect x="1" y="4.36465" width="13" height="18" rx="2" transform="rotate(-15 1 4.36465)" fill="#E94057" stroke="white"/>
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><path fill="#ADAFBB" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"></path></svg>        </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 48 48"><defs><mask id="ipSMessage0"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}><path fill="#fff" stroke="#fff" d="M44 24c0 11.046-8.954 20-20 20H4V24C4 12.954 12.954 4 24 4s20 8.954 20 20"></path><path stroke="#000" d="M14 18h18m-18 8h18m-18 8h10"></path></g></mask></defs><path fill="#ADAFBB" d="M0 0h48v48H0z" mask="url(#ipSMessage0)"></path></svg>        </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 1024 1024"><path fill="#ADAFBB" d="M288 320a224 224 0 1 0 448 0a224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"></path></svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;