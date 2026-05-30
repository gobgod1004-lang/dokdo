/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Intro from './components/Intro';
import Lesson1 from './components/Lesson1';
import Lesson2 from './components/Lesson2';
import Lesson3 from './components/Lesson3';
import Lesson4 from './components/Lesson4';
import DokdoQuiz from './components/DokdoQuiz';
import { Compass, BookOpen, GraduationCap, Award, Heart, HelpCircle, Home } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const tabs = [
    { id: 0, label: '배움터 홈', icon: <Home className="w-4 h-4" /> },
    { id: 1, label: '1차시 지리', icon: <Compass className="w-4 h-4" /> },
    { id: 2, label: '2차시 역사', icon: <BookOpen className="w-4 h-4" /> },
    { id: 3, label: '3차시 상생', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 4, label: '4차시 집필', icon: <Award className="w-4 h-4" /> },
    { id: 5, label: '미니 골든벨', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  const handleTabChange = (tabId: number) => {
    setCurrentTab(tabId);
  };

  return (
    <div className="min-h-screen bg-[#FFFBEB] text-[#4B3425] flex flex-col justify-between font-sans antialiased selection:bg-[#7BC9FF] selection:text-[#4B3425] pb-10">
      
      {/* 상단 귀여운 파도 헤더 오버레이 */}
      <header className="sticky top-0 z-50 bg-white border-b-4 border-[#4B3425] shadow-[0_4px_0px_#4B3425] px-2">
        <div className="max-w-4xl mx-auto px-4 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* 로고 영역 */}
          <button 
            onClick={() => handleTabChange(0)}
            className="flex items-center gap-3 cursor-pointer group text-left"
          >
            <div className="p-2 bg-[#FF85A1] rounded-2xl group-hover:rotate-12 transition-transform shadow-[3px_3px_0px_#4B3425] border-2 border-[#4B3425]">
              <span className="text-xl flex items-center justify-center w-6 h-6">🐾</span>
            </div>
            <div>
              <h1 className="font-sans font-black text-xl text-[#4B3425] tracking-tight leading-none">
                귀여운 독도 배움터
              </h1>
              <p className="text-[11px] font-sans font-bold text-[#A0816C] mt-1.5 uppercase tracking-wider">
                Dokdo Peace Academy
              </p>
            </div>
          </button>

          {/* 간이 네비게이션 바 */}
          <nav className="flex flex-wrap items-center gap-1.5 p-1 bg-[#FFFBEB] border-2 border-[#4B3425] rounded-3xl shadow-[3px_3px_0px_#4B3425]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-3 py-1.5 text-xs font-black rounded-2xl cursor-pointer transition-all flex items-center gap-1.5 border-2 ${
                  currentTab === tab.id
                    ? 'bg-[#7BC9FF] text-white border-[#4B3425] shadow-[2px_2px_0px_#4B3425]'
                    : 'bg-white text-[#4B3425] border-transparent hover:bg-[#FFF3F5]'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* 실시간 공부하기 메인 바디 영역 */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full"
          >
            {currentTab === 0 && <Intro onStart={handleTabChange} />}
            {currentTab === 1 && <Lesson1 />}
            {currentTab === 2 && <Lesson2 />}
            {currentTab === 3 && <Lesson3 />}
            {currentTab === 4 && <Lesson4 />}
            {currentTab === 5 && <DokdoQuiz />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 푸터 영역 */}
      <footer className="w-full max-w-4xl mx-auto px-4 text-center mt-12 pt-6 border-t-2 border-[#4B3425]/10">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-[#A0816C] font-sans font-bold italic underline decoration-wavy decoration-[#FF85A1]">
            <Heart className="w-4 h-4 text-[#FF85A1] fill-[#FFB7C5] animate-pulse" />
            독도를 더 잘 알고 똑똑하게 사랑하는 스마트 수호 지킴이를 위한 평화 배움터 🍰
          </div>
          <p className="text-[11px] font-bold text-[#A0816C] mt-1">
            © 2026 대한민국 역사·지리 평화교육위원회 독도 교재 | 만든 이: 귀여움 연구소 🐾
          </p>
        </div>
      </footer>
    </div>
  );
}
