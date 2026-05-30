import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Users, Award, Landmark, HelpCircle, Swords } from 'lucide-react';
import { TimelineEvent } from '../types';

export default function Lesson3() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [showFakeCannon, setShowFakeCannon] = useState<boolean>(false);

  const timelineEvents: TimelineEvent[] = [
    {
      year: '1946년 1월',
      title: '연합국 사령관 지령 (SCAPIN) 제677호',
      description: '제2차 세계대전 패전 직후, 연합국 사령부는 일본 제국주의가 불법 침탈했던 주권 범위를 정의하면서 **울릉도, 제주도, 독도를 완전히 일본 영역에서 제외**하고 대한민국에 넘겨주며 실효 통치 영토로 반환해 정립했단다. 💙',
      badge: '승리의 반환',
      cuteIcon: '🕊️'
    },
    {
      year: '1951년 9월',
      title: '샌프란시스코 강화조약의 함정',
      description: '평화 협정 최종 회담 과정에서 일본의 고위 대미 로비 공작 때문에 최종 조약문 제2조 (a)항에 간략히 "제주도, 거문도, 울릉도를 포함한 한국 영토 포기"라며 주요 큰 섬만 명시되고 "독도"라는 세부 단어가 누락되는 빈틈이 생겼단다. 오늘날 일본 왜곡 영토 주장의 시발점이기도 하지.',
      badge: '조약의 함정',
      cuteIcon: '⚠️'
    },
    {
      year: '1952년 1월',
      title: '이승만 대통령의 "평화선 선포"',
      description: '조약 발효 직전, 독도 주변 해안 영토가 침탈되는 것을 철저히 예방하기 위해 이승만 대통령은 동해안 수평선 멀리에 **"평화선(국내 해양선)"**을 선포했단다. 침범하는 불법 조업선과 순시선들을 나포 처분하며 힘찬 주권을 드높였어.',
      badge: '주권의 울타리',
      cuteIcon: '⚓'
    },
    {
      year: '1953~1956년',
      title: '용맹한 "독도의용수비대" 대작전',
      description: '한국전쟁 와중에 일본 순시선들이 조업선을 타고 자꾸 상륙하려 하자, 울릉도 청년들이 자발적으로 의병 단체인 **"독도의용수비대"**를 결성했어. 무기와 포탄이 거의 없었지만 놀라운 지혜로 물리친 일화가 전해진단다! (아래 돋보기 버튼을 클릭해봐!)',
      badge: '청년 의병들의 지혜',
      cuteIcon: '🎖️'
    },
    {
      year: '1998년',
      title: '신한일어업협정과 영토의 오늘',
      description: '유엔해양법에 따른 배타적경제수역(EEZ)의 겹치는 지대를 타협하고자 독도를 기점이 아닌 "중간수역" 한가운데 두는 우를 범하며 갈등이 깊어졌고, 2005년 일본 시마네현이 "다케시마의 날"을 억지 제정해 교과서 왜곡 문제가 불거지게 되었단다.',
      badge: '오늘날의 평화 과제',
      cuteIcon: '🤝'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* 귀여운 단원 타이틀 */}
      <div className="bg-[#7BC9FF] rounded-[32px] p-6 border-4 border-[#4B3425] shadow-[6px_6px_0px_#4B3425] relative overflow-hidden text-white">
        <div className="absolute -right-6 -bottom-6 opacity-20 font-black text-9xl text-white pointer-events-none">03</div>
        <div className="flex items-center gap-3 mb-2">
          <span className="p-2 bg-white rounded-xl text-[#4B3425] font-black text-xs border-2 border-[#4B3425] shadow-[2px_2px_0px_#4B3425]">3차시</span>
          <h2 className="text-2xl font-black text-white font-sans">현대 독도 갈등의 전개와 수호의 불꽃 🕊️</h2>
        </div>
        <p className="text-white font-bold text-sm leading-relaxed">
          독도를 온전히 지켜낸 현대 역사는 마냥 평화롭지만은 않았단다. 
          전후 연합국의 조치를 비롯해, 국가적 위기 속에서 **스스로 목숨을 바쳐 섬을 수호해 낸 자랑스러운 평범한 영웅들** 이야기를 들어 볼래?
        </p>
      </div>

      {/* 현대 타임라인 주행 위젯 */}
      <div className="bg-white rounded-[32px] border-4 border-[#4B3425] p-6 shadow-[8px_8px_0px_#FFD93D] space-y-6">
        <div>
          <span className="text-xs font-black text-[#FF85A1] bg-[#FFF3F5] px-3 py-1.5 rounded-full border-2 border-[#4B3425] shadow-[2px_2px_0px_#4B3425] uppercase">Interactive Timeline</span>
          <h3 className="text-xl font-black text-[#4B3425] mt-3">📊 스텝 바이 스텝! 독도 수호 역사 정복</h3>
          <p className="text-[#A0816C] text-xs font-bold font-sans mt-1 font-medium">단추를 누르고 아래 슬라이드를 넘기며 연도별 현대 영유권 갈등과 극복 스토리를 확인해 보렴!</p>
        </div>

        {/* 대형 연도 네비게이션 가로 바 */}
        <div className="flex justify-between items-center bg-[#FFFBEB] border-2 border-[#4B3425] p-2.5 rounded-2xl overflow-x-auto gap-2 shadow-[2px_2px_0px_#4B3425]">
          {timelineEvents.map((ev, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`px-4 py-3 text-xs font-black rounded-xl cursor-pointer transition-all whitespace-nowrap flex items-center gap-1 shrink-0 ${
                activeStep === idx
                  ? 'bg-[#FF85A1] text-white border-2 border-[#4B3425] shadow-[2px_2px_0px_#4B3425] scale-102'
                  : 'text-[#4B3425] hover:bg-white hover:text-[#4B3425]'
              }`}
            >
              <span>{ev.cuteIcon}</span> {ev.year.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* 액티브 타임라인 세부 카드 정보 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#FFFBEB] p-6 rounded-2xl border-4 border-[#4B3425] relative overflow-hidden shadow-[4px_4px_0px_#4B3425]"
          >
            <div className="absolute top-4 right-4 bg-white border-2 border-[#4B3425] text-[#4B3425] text-[10px] font-sans font-black px-3 py-1 rounded-full shadow-[2px_2px_0px_#4B3425]">
              {timelineEvents[activeStep].badge}
            </div>

            <div className="flex items-center gap-3.5 mb-4">
              <span className="text-4xl">{timelineEvents[activeStep].cuteIcon}</span>
              <div>
                <span className="text-xs text-[#FF85A1] font-sans font-black block">{timelineEvents[activeStep].year}</span>
                <h4 className="text-lg font-black text-[#4B3425] leading-tight">{timelineEvents[activeStep].title}</h4>
              </div>
            </div>

            <p className="text-[#4B3425] text-sm leading-relaxed font-sans font-bold whitespace-pre-wrap">
              {timelineEvents[activeStep].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3-2. 독도 의용 수비대 나무 박격포 에피소드 파트 */}
      <div className="bg-[#FFF3F5] rounded-[32px] p-6 border-4 border-[#4B3425] shadow-[6px_6px_0px_#4B3425]">
        <div className="grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-4 flex flex-col items-center">
            {/* 나무 대포 모양의 귀여운 아이콘 */}
            <div className="w-24 h-24 rounded-full bg-white border-4 border-[#4B3425] flex items-center justify-center text-4xl shadow-[4px_4px_0px_#4B3425] relative">
              🪵
              <div className="absolute -bottom-2 bg-[#FFD93D] text-[#4B3425] border-2 border-[#4B3425] text-[9px] font-sans font-black px-2 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_#4B3425] uppercase">
                대포동 소동
              </div>
            </div>
            <button
              onClick={() => setShowFakeCannon(!showFakeCannon)}
              className="mt-4 px-4 py-2 font-black text-xs text-white bg-[#FF85A1] hover:bg-[#FF85A1]/90 border-2 border-[#4B3425] rounded-full shadow-[2.5px_2.5px_0px_#4B3425] cursor-pointer transition-transform duration-200 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              🎭 박격포 작전 더 보기!
            </button>
          </div>

          <div className="md:col-span-8 text-left space-y-3 font-sans">
            <h4 className="text-base font-black text-[#4B3425] flex items-center gap-1.5">
              <Swords className="w-5 h-5 text-[#FF85A1]" /> 나무로 만든 최첨단(?) 수비대 박격포!
            </h4>
            <p className="text-[#4B3425] text-xs font-bold leading-relaxed">
              독도의용수비대는 무기가 거의 없었대요. 1954년 일본 무장 순시선이 상륙하려 하자 대장 홍순칠과 대원들은 **나무를 깎고 검정 칠을 해서 거대한 가짜 박격포 모형**을 바위 요새 곳곳에 설치했단다!
            </p>
            <p className="text-[#4B3425] text-xs font-bold leading-relaxed">
              멀리서 망원경으로 이를 본 일본 순시선은 한국 수비대가 엄청난 진지 포탄을 갖췄다고 크게 착각하여 겁을 먹고 혼비백산 도망쳐버렸지! 정말 귀엽고도 용기 넘치는 기적의 승리 역사지? 👍
            </p>

            <AnimatePresence>
              {showFakeCannon && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-white p-4 rounded-xl border-2 border-[#4B3425] text-xs text-[#4B3425] space-y-2 mt-4 shadow-[3px_3px_0px_#FFD93D]"
                >
                  <div className="flex items-center gap-1 font-black text-[#FF85A1]">
                    <HelpCircle className="w-4 h-4" /> 여기서 잠깐! 우리의 평화 성찰 질문 
                  </div>
                  <p className="text-[#4B3425] leading-relaxed font-bold">
                    잠시 쉬어가는 시간! 전쟁의 위기 속에서도 지혜와 재치를 발휘해 싸움 없이 적을 퇴격시킨 용사들을 보며, 오늘날의 역사 갈등도 무분별하고 자극적인 비방보다는 **차분하고 확실한 역사 공부(팩트 정립)와 외교적 지혜**로 해결하겠다는 평화로운 우정의 마음을 가져보는 게 좋겠단다!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
