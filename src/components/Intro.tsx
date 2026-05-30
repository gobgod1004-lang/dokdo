import { motion } from 'motion/react';
import dokdoImg from '../assets/images/dokdo_illustration_1780105837362.png';
import gangchiImg from '../assets/images/gangchi_character_1780105857585.png';
import { Heart, Compass, BookOpen, GraduationCap, Award } from 'lucide-react';

interface IntroProps {
  onStart: (tabNum: number) => void;
}

export default function Intro({ onStart }: IntroProps) {
  return (
    <div className="flex flex-col items-center">
      {/* 귀여운 배너 영역 */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl bg-white rounded-[40px] p-8 mb-8 text-center border-4 border-[#4B3425] shadow-[10px_10px_0px_#7BC9FF] relative overflow-hidden"
      >
        <div className="absolute top-4 left-4 bg-[#FF85A1] text-white text-xs font-black px-4 py-1.5 rounded-full border-2 border-[#4B3425] flex items-center gap-1 shadow-[3px_3px_0px_#4B3425] animate-bounce">
          <Heart className="w-3.5 h-3.5 fill-current" /> 독도는 우리 땅!
        </div>

        <div className="flex justify-center mb-4 mt-4">
          <img 
            src={dokdoImg} 
            alt="귀여운 독도 일러스트" 
            className="w-72 h-auto drop-shadow-md rounded-2xl hover:scale-105 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-[#4B3425] tracking-tight mb-3">
          독도 영토 주권 교육<br/>
          <span className="text-[#FF85A1] font-sans font-black text-2xl md:text-3xl">👋 귀여운 독도 배움터에 온 것을 환영해!</span>
        </h1>
        
        <p className="text-[#4B3425] font-bold max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          독도는 외로운 섬이 아니라 우리의 소중한 영토란다! <br />
          지리적 사실과 옛 역사 보물 상자 속 문서들을 열어보면서, <br />
          감정적인 싸움이 아닌 <strong className="text-[#7BC9FF] font-black">똑똑하고 올바른 팩트</strong>로 독도를 지키는 멋진 평화 지킴이가 되어볼까? 💙
        </p>
      </motion.div>

      {/* 가이드 캐릭터 파트 */}
      <div className="grid md:grid-cols-12 gap-6 w-full max-w-4xl items-center mb-8 bg-white p-6 rounded-[32px] border-4 border-[#4B3425] shadow-[10px_10px_0px_#FFD93D] relative">
        <div className="md:col-span-4 flex flex-col items-center">
          <img 
            src={gangchiImg} 
            alt="귀여운 강치 캐릭터" 
            className="w-40 h-auto hover:rotate-3 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
          <span className="mt-2 bg-[#FFD93D] text-[#4B3425] text-xs font-bold px-4 py-1.5 rounded-full border-2 border-[#4B3425] shadow-[3px_3px_0px_#4B3425]">
            강치 선생님
          </span>
        </div>
        <div className="md:col-span-8 text-left space-y-3">
          <div className="bg-[#FFFBEB] p-5 rounded-2xl border-2 border-[#4B3425] relative">
            <div className="absolute top-3 right-3 text-xs text-[#FF85A1] bg-white border-2 border-[#4B3425] px-2 py-0.5 rounded-md font-mono font-black">HELP-DESK</div>
            <p className="text-[#4B3425] font-black text-lg mb-1">안녕! 나는 독도 수호 강치란다구몬! 🌊</p>
            <p className="text-[#4B3425] text-sm font-bold leading-relaxed">
              옛날 조선 시대 우리 조상들과 깊은 인연을 맺었으나 일제의 무분별한 포획으로 사라졌던 바다사자 강치야.<br/>
              너희들의 관심 속에서 씩씩하게 부활해서 독도의 진정한 가치를 전해주기 위해 찾아왔단다! 준비가 되었다면 아래 단원들을 클릭해서 나와 함께 재미있게 여행해 보자꾸나!
            </p>
          </div>
        </div>
      </div>

      {/* 단원 선택 카드 그리드 */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {[
          {
            num: 1,
            title: "1차시. 지리와 영역",
            desc: "독도의 물리적 크기와 주소, 그리고 한여름 울릉도에서의 육안 조망!",
            shadow: "shadow-[6px_6px_0px_#7BC9FF]",
            colorBg: "bg-white",
            icon: <Compass className="w-6 h-6 text-[#7BC9FF]" />
          },
          {
            num: 2,
            title: "2차시. 역사와 지도",
            desc: "세종실록지리지와 일본의 비밀 지령 속 감춰진 독도의 주권 사료!",
            shadow: "shadow-[6px_6px_0px_#FF85A1]",
            colorBg: "bg-white",
            icon: <BookOpen className="w-6 h-6 text-[#FF85A1]" />
          },
          {
            num: 3,
            title: "3차시. 갈등과 상생",
            desc: "전후 조약부터 나무로 대포를 만들었던 대한민국 수비대 소동까지!",
            shadow: "shadow-[6px_6px_0px_#FFD93D]",
            colorBg: "bg-white",
            icon: <GraduationCap className="w-6 h-6 text-[#FFD93D]" />
          },
          {
            num: 4,
            title: "4차시. 평화의 교과서",
            desc: "친구들과 한일 평화 대본을 작성하고, 강치쌤에게 AI 피드백 받기!",
            shadow: "shadow-[6px_6px_0px_#7BC9FF]",
            colorBg: "bg-white",
            icon: <Award className="w-6 h-6 text-[#7BC9FF]" />
          }
        ].map((lesson) => (
          <motion.button
            key={lesson.num}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onStart(lesson.num)}
            className={`flex flex-col text-left p-5 rounded-[24px] ${lesson.colorBg} text-[#4B3425] border-4 border-[#4B3425] ${lesson.shadow} cursor-pointer group transition-all duration-300`}
          >
            <div className="p-2.5 bg-[#FFFBEB] rounded-xl w-fit mb-4 border-2 border-[#4B3425] shadow-[2px_2px_0px_#4B3425] group-hover:scale-110 transition-transform">
              {lesson.icon}
            </div>
            <h3 className="font-black text-base text-[#4B3425] mb-1.5">{lesson.title}</h3>
            <p className="text-xs text-[#A0816C] font-bold leading-relaxed font-sans">{lesson.desc}</p>
          </motion.button>
        ))}
      </div>

      {/* 미니 퀴즈 바로가기 배너 */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        onClick={() => onStart(5)}
        className="w-full max-w-4xl bg-[#FFD93D] hover:bg-[#FFE066] text-[#4B3425] font-bold p-6 rounded-[32px] border-4 border-[#4B3425] shadow-[8px_8px_0px_#4B3425] flex flex-col sm:flex-row items-center justify-between gap-4 cursor-pointer text-left transition-all"
      >
        <div className="flex items-center gap-4">
          <div className="bg-white border-2 border-[#4B3425] p-3 rounded-2xl text-2xl shadow-[2px_2px_0px_#4B3425]">🍦</div>
          <div>
            <h3 className="font-black text-[#4B3425] text-lg">💡 독도 골든벨 미니 OX quiz!</h3>
            <p className="text-[#A0816C] text-xs font-sans font-bold">강치 선생님의 5문제를 다 맞추면 명예 수호 임명장이 수여된다구몬!</p>
          </div>
        </div>
        <div className="bg-[#FF85A1] hover:bg-[#FFB7C5] text-white px-5 py-2.5 rounded-full border-2 border-[#4B3425] text-sm font-black flex items-center gap-1 shadow-[2px_2px_0px_#4B3425]">
          지금 도전하기 ➔
        </div>
      </motion.button>
    </div>
  );
}
