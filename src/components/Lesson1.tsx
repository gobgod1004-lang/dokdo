import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Compass, MapPin, Cloudy, Sun, CloudRain } from 'lucide-react';
import gangchiImg from '../assets/images/gangchi_character_1780105857585.png';

export default function Lesson1() {
  const [weather, setWeather] = useState<'sunny' | 'cloudy' | 'rainy'>('sunny');
  const [viewPoint, setViewPoint] = useState<'ulleung' | 'oki'>('ulleung');
  const [matchedRoad, setMatchedRoad] = useState<string | null>(null);

  const getVisibilityMessage = () => {
    if (viewPoint === 'ulleung') {
      switch (weather) {
        case 'sunny':
          return {
            text: "맑은 날 울릉도 고지대에서는 독도가 또렷하고 선명하게 우뚝 서 있는 모습을 맨눈(육안)으로 볼 수 있단다! 아주 옛날 울릉도 사람들이 동해 동쪽 끝에 섬이 있음을 저절로 알고 생활권으로 편입한 결정적 이유야! 💙",
            status: "또렷하게 보임!",
            color: "text-[#4B3425] bg-[#FFF3F5] border-[#FF85A1]"
          };
        case 'cloudy':
          return {
            text: "구름이 껴서 독도 주위가 다소 흐릿하게 어렴풋이 형체만 보인단다구몬. 날씨 삼삼할 때도 아슬아슬하게 보일 수 있어!",
            status: "흐릿하게 보임",
            color: "text-[#4B3425] bg-[#EBF8FF] border-[#7BC9FF]"
          };
        case 'rainy':
          return {
            text: "비가 많이 오거나 안개가 짙게 끼면 울릉도에서도 보이지 않는단다. 맑은 동해 날씨를 염원하자구몬!",
            status: "보이지 않음",
            color: "text-[#4B3425] bg-gray-150 border-gray-450"
          };
      }
    } else {
      // Oki Island: Absolute 0 possibility regardless of weather due to distance & earth curveture (157.5km)
      return {
        text: "쉿! 일본 오키섬에서는 지구의 표면이 둥글기 때문에(지구 곡률 한계), 날씨가 아무리 맑고 쾌청해도 독도가 완벽하게 수평선 아래 가려져서 '절대 볼 수 없단다'! 즉, 일본 어부들은 자연적으로 독도를 볼 수 없었고, 아주 먼바다로 억지로 모험 항해를 해야만 갈 수 있었어. 지리적으로 완전히 우리 생활 권역 밖이었다는 강력한 증거야! 🔍",
        status: "날씨와 무관하게 완전히 안 보임!",
        color: "text-[#4B3425] bg-[#FFF3F5] border-[#FF85A1]"
      };
    }
  };

  const message = getVisibilityMessage();

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* 귀여운 단원 타이틀 */}
      <div className="bg-[#7BC9FF] rounded-[32px] p-6 border-4 border-[#4B3425] shadow-[6px_6px_0px_#4B3425] relative overflow-hidden text-white">
        <div className="absolute -right-6 -bottom-6 opacity-20 font-black text-9xl text-white pointer-events-none">01</div>
        <div className="flex items-center gap-3 mb-2">
          <span className="p-2 bg-white rounded-xl text-[#4B3425] font-black text-xs border-2 border-[#4B3425] shadow-[2px_2px_0px_#4B3425]">1차시</span>
          <h2 className="text-2xl font-black text-white font-sans">독도의 지리적 특성과 우리의 영역 🌊</h2>
        </div>
        <p className="text-white font-bold text-sm leading-relaxed">
          독도가 대한민국의 완전무결한 영토임을 아는 시작은 **정확한 지리적 사실과 숫자**야! 
          울릉도와의 거리, 육안 관측성, 영해/영토 삼요소를 귀엽고 똑똑하게 정복해보자꾸나!
        </p>
      </div>

      {/* 1-1. 거리 분석 및 시뮬레이터 */}
      <div className="bg-white rounded-[32px] border-4 border-[#4B3425] p-6 shadow-[8px_8px_0px_#FFD93D] space-y-6">
        <div>
          <span className="text-xs font-black text-[#FF85A1] bg-[#FFF3F5] px-3 py-1.5 rounded-full border-2 border-[#4B3425] shadow-[2px_2px_0px_#4B3425] uppercase">Interactive Widget</span>
          <h3 className="text-xl font-black text-[#4B3425] mt-3 mb-2">✨ 울릉도 vs 오키섬: "과연 내 눈에 보일까?" 시뮬레이터</h3>
          <p className="text-[#A0816C] text-xs font-bold font-sans leading-relaxed">
            지도의 고도와 거리 한계(지구 곡률)를 반영한 교육 시뮬레이션입니다. 날씨와 장소를 바꾸어보세요!
          </p>
        </div>

        {/* 관측 장소 선택 탭 */}
        <div className="grid grid-cols-2 gap-2 bg-[#FFFBEB] p-1.5 rounded-2xl border-2 border-[#4B3425]">
          <button
            onClick={() => setViewPoint('ulleung')}
            className={`py-3 px-4 font-black rounded-xl text-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${
              viewPoint === 'ulleung' 
                ? 'bg-[#7BC9FF] text-white border-2 border-[#4B3425] shadow-[2px_2px_0px_#4B3425]' 
                : 'text-[#4B3425] bg-white border-2 border-transparent hover:bg-slate-100'
            }`}
          >
            🇰🇷 울릉도에서 바라보기 (87.4 km)
          </button>
          <button
            onClick={() => setViewPoint('oki')}
            className={`py-3 px-4 font-black rounded-xl text-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${
              viewPoint === 'oki' 
                ? 'bg-[#FF85A1] text-white border-2 border-[#4B3425] shadow-[2px_2px_0px_#4B3425]' 
                : 'text-[#4B3425] bg-white border-2 border-transparent hover:bg-slate-100'
            }`}
          >
            🇯🇵 오키섬에서 바라보기 (157.5 km)
          </button>
        </div>

        {/* 미니 시뮬레이터 그래픽 박스 */}
        <div className="relative aspect-video w-full max-h-[300px] bg-gradient-to-b from-sky-300 via-sky-200 to-sky-400 rounded-2xl overflow-hidden border-4 border-[#4B3425] flex flex-col justify-end shadow-[4px_4px_0px_#4B3425]">
          {/* 하늘 구름 애니메이션 */}
          <div className="absolute inset-x-0 top-6 flex justify-around opacity-60">
            <Cloudy className={`w-12 h-12 text-white animate-pulse duration-[4s]`} />
            <Cloudy className={`w-16 h-16 text-white animate-pulse duration-[6s] delay-1000`} />
            <Cloudy className={`w-10 h-10 text-white animate-pulse duration-[5s]`} />
          </div>

          {/* 해(태양) 또는 비/구름 렌더 */}
          <AnimatePresence mode="wait">
            {weather === 'sunny' && (
              <motion.div 
                key="sun" 
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 0.8, scale: 1 }} 
                exit={{ opacity: 0 }}
                className="absolute right-10 top-6"
              >
                <Sun className="w-16 h-16 text-amber-400 fill-amber-300 animate-spin duration-[15s]" />
              </motion.div>
            )}
            {weather === 'cloudy' && (
              <motion.div 
                key="cloudy" 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 0.9, y: 0 }} 
                exit={{ opacity: 0 }}
                className="absolute right-12 top-8"
              >
                <div className="flex gap-1 text-slate-400">
                  <Cloudy className="w-14 h-14 fill-slate-300 text-slate-400" />
                  <Cloudy className="w-10 h-10 fill-slate-200 text-slate-300 -ml-6 mt-4" />
                </div>
              </motion.div>
            )}
            {weather === 'rainy' && (
              <motion.div 
                key="rainy" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-800/20 backdrop-blur-3xs"
              >
                {/* 빗줄기 효과 */}
                <div className="absolute inset-0 flex justify-around select-none pointer-events-none opacity-40">
                  {[...Array(8)].map((_, i) => (
                    <CloudRain key={i} className="w-8 h-8 text-sky-100 animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 수평선 바다 */}
          <div className="w-full h-1/3 bg-gradient-to-b from-sky-500 to-indigo-600 relative z-10 flex items-center justify-center border-t-2 border-sky-400">
            {/* 파도 애니메이션 */}
            <div className="absolute inset-0 bg-repeat-x opacity-20 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 120%22 preserveAspectRatio=%22none%22><path d=%22M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,42.4V0Z%22 fill=%22%23ffffff%22></path></svg>')] animate-pulse"></div>
            
            <span className="text-[11px] font-sans font-bold text-white/80 bg-black/30 border border-white/20 px-3 py-1 rounded-full backdrop-blur-2xs relative z-20">
              {viewPoint === 'ulleung' ? '🇰🇷 울릉도 해안선 (고지대)' : '🇯🇵 일본 오키도 서쪽 끝'}
            </span>
          </div>

          {/* 중요!!! 독도 섬 위치 그래픽 */}
          <AnimatePresence>
            {viewPoint === 'ulleung' && weather !== 'rainy' ? (
              <motion.div
                key="dokdo_visible"
                initial={{ opacity: 0, scale: 0.8, y: 15 }}
                animate={{ 
                  opacity: weather === 'cloudy' ? 0.35 : 1, 
                  scale: 1, 
                  y: 0 
                }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="absolute left-1/2 -translate-x-1/2 bottom-[30%] z-20 flex flex-col items-center"
              >
                {/* 동도, 서도 모양의 귀여운 언덕 */}
                <div className="flex items-end gap-2 text-slate-800 font-sans font-bold text-xs relative">
                  {/* 서도 - 더 높은 섬 */}
                  <div className="w-18 h-14 bg-gradient-to-t from-slate-600 to-slate-500 rounded-t-full border-t border-slate-400 shadow-sm relative">
                    <span className="absolute bottom-1 right-2 text-[8px] text-white/50">Seo</span>
                  </div>
                  {/* 동도 - 조금 낮은 섬 */}
                  <div className="w-14 h-10 bg-gradient-to-t from-slate-600 to-slate-500 rounded-t-full border-t border-slate-400 shadow-sm relative">
                    <span className="absolute bottom-1 left-2 text-[8px] text-white/50">Dong</span>
                    {/* 등대 불빛 귀엽게 */}
                    <div className="absolute top-0 right-1 w-2 h-2 rounded-full bg-yellow-300 animate-ping" />
                  </div>

                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-sky-900 border border-sky-300 text-[10px] text-white font-sans font-black tracking-wider px-2 py-0.5 rounded-full shadow-xs whitespace-nowrap">
                    동해의 푸른 섬 독도!
                  </span>
                </div>
              </motion.div>
            ) : viewPoint === 'ulleung' && weather === 'rainy' ? (
              /* 비올 때는 울릉도에서도 안 보임 */
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[30%] text-[10px] bg-slate-900/40 text-slate-200 px-2.5 py-1 rounded-sm">안개에 완전히 가림</div>
            ) : (
              /* 오키도일때는 수평선 구조상 아래에 있어 아예 무조건 노출 안 됨 (지구곡률 한계 시각화) */
              <motion.div
                key="dokdo_hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                className="absolute inset-x-0 bottom-1 py-1 z-20 flex flex-col items-center"
              >
                {/* 수평선 한참 아래 곡률 굴절 표시 */}
                <div className="bg-red-950/70 text-red-100 text-[10px] font-sans px-3 py-1.5 rounded-lg text-center border-t border-red-500/30">
                  📉 수평선 너머 곡률 아래 가려진 독도 (수학적·지리학적 관측 불가능!)
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 날씨 컨트롤 버튼 */}
        <div className="flex flex-wrap items-center justify-center gap-3 bg-[#FFF3F5] p-3 rounded-2xl border-2 border-[#4B3425]">
          <span className="text-xs font-black text-[#4B3425]">날씨 변경:</span>
          {[
            { id: 'sunny', label: '화창하고 맑음 ☀️', color: 'bg-[#FFD93D] text-[#4B3425] hover:bg-amber-150' },
            { id: 'cloudy', label: '안개/구름 낀 날 ☁️', color: 'bg-[#7BC9FF] text-white hover:bg-sky-200' },
            { id: 'rainy', label: '비가 주룩주룩 🌧️', color: 'bg-slate-200 text-[#4B3425] hover:bg-slate-300' }
          ].map((w) => (
            <button
              key={w.id}
              onClick={() => setWeather(w.id as any)}
              className={`px-4 py-2 text-xs font-black rounded-full border-2 border-[#4B3425] cursor-pointer inline-flex items-center gap-1.5 transition-all ${w.color} ${
                weather === w.id ? 'ring-2 ring-[#4B3425] shadow-[3px_3px_0px_#4B3425] scale-105' : 'opacity-80'
              }`}
            >
              {w.label}
            </button>
          ))}
        </div>

        {/* 분석 피드백 메시지 박스 */}
        <motion.div 
          layout
          className={`p-5 rounded-2xl border-4 transition-colors duration-300 ${message.color} shadow-[6px_6px_0px_#4B3425]`}
        >
          <div className="flex justify-between items-center mb-1.5 font-bold">
            <span className="text-sm font-sans flex items-center gap-1 font-black">
              {viewPoint === 'ulleung' ? '🎯 울릉도에서의 관측 결과' : '🚫 일본 오키섬에서의 관측 결과'}
            </span>
            <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded-md bg-white border-2 border-[#4B3425] shadow-[1.5px_1.5px_0px_#4B3425]">
              {message.status}
            </span>
          </div>
          <p className="text-xs md:text-sm font-sans font-bold leading-relaxed">{message.text}</p>
        </motion.div>
      </div>

      {/* 1-2. 국가 영역 삼요소 표 */}
      <div className="bg-white rounded-[32px] border-4 border-[#4B3425] p-6 shadow-[8px_8px_0px_#FFD93D]">
        <h3 className="text-lg font-black text-[#4B3425] mb-4 flex items-center gap-1.5 font-sans">
          <ShieldCheck className="w-5 h-5 text-[#FF85A1]" /> 국가 영역의 3요소와 독도
        </h3>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              title: "영토 (Territory)",
              role: "독도 주소지 1-96번지",
              desc: "주권이 미치는 땅의 범위! 경상북도 울릉군 울릉읍 독도리 1~96번지에 걸쳐 있는 자랑스러운 대한민국의 온전한 땅이란다."
            },
            {
              title: "영해 (Territorial Sea)",
              role: "주변 해안 12해리 수역",
              desc: "영토 주위 바다로, 기선에서 12해리(약 22km)까지 독점적 주권을 행사해. 대한민국 해경이 불법 어선들을 철저히 순찰하고 정화하고 있단다."
            },
            {
              title: "영공 (Airspace)",
              role: "독도 수직 상공 영공",
              desc: "영토와 영해 수직 허공의 주권 범위야! 대한민국 방공식별구역(KADIZ)에 독도가 명백히 지정되어 있으며 우리 공군이 철통같이 수호해."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#FFFBEB] border-2 border-[#4B3425] p-5 rounded-2xl flex flex-col justify-between shadow-[4px_4px_0px_#4B3425] hover:scale-102 transition-transform">
              <div>
                <h4 className="font-black text-sm text-[#4B3425] mb-1">{item.title}</h4>
                <div className="text-[10px] font-sans font-black text-[#FF85A1] bg-white border-2 border-[#4B3425] px-2.5 py-1 rounded-md w-fit mb-3 shadow-[2px_2px_0px_#4B3425]">
                  {item.role}
                </div>
                <p className="text-xs text-[#4B3425] font-bold font-sans leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 1-3. 독도의 도로명 주소 매칭 퀴즈 */}
      <div className="bg-[#FFFBEB] rounded-[32px] p-6 border-4 border-[#4B3425] shadow-[8px_8px_0px_#7BC9FF]">
        <div className="grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-4 flex flex-col items-center">
            <img src={gangchiImg} alt="강치선생님" className="w-24 h-auto" />
            <div className="bg-white px-3 py-1.5 rounded-full border-2 border-[#4B3425] text-[10px] font-sans font-black text-[#4B3425] text-center mt-2 shadow-[2px_2px_0px_#4B3425]">
              "이사부길과 안용복길을 아느냐구몬!"
            </div>
          </div>

          <div className="md:col-span-8 text-left space-y-4">
            <h4 className="text-base font-black text-[#4B3425]">🏡 독도의 유인도 상주 도로명 알아보기!</h4>
            <p className="text-[#4B3425] text-xs font-bold font-sans leading-relaxed">
              독도는 어두운 밤바다를 밝히는 등대지기와 용맹한 독도경비대, 그리고 주민 숙소 주민들이 평화롭게 등재되어 살아가는 **유인도(有人島)**란다! 동도와 서도에 부여된 도로명 카드를 클릭해보고 그 안의 영웅 이름을 기억하자!
            </p>

            <div className="grid grid-cols-2 gap-3.5">
              <button
                onClick={() => setMatchedRoad('isabu')}
                className={`p-3.5 rounded-2xl border-2 text-left cursor-pointer transition-all ${
                  matchedRoad === 'isabu' 
                    ? 'bg-[#FFD93D] border-4 border-[#4B3425] text-[#4B3425] scale-102 shadow-[4px_4px_0px_#4B3425]' 
                    : 'bg-white border-2 border-[#4B3425] text-[#4B3425] hover:bg-[#FFF3F5] hover:border-[#FF85A1] shadow-[2px_2px_0px_#4B3425]'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <MapPin className="w-4 h-4 text-[#FF85A1]" />
                  <span className="font-extrabold text-xs">동도 도로명</span>
                </div>
                <p className="text-[13px] font-black">이사부길</p>
                <p className="text-[10px] text-[#A0816C] font-bold font-sans mt-0.5">독도경비대와 독도등대가 위치한 길!</p>
              </button>

              <button
                onClick={() => setMatchedRoad('yongbok')}
                className={`p-3.5 rounded-2xl border-2 text-left cursor-pointer transition-all ${
                  matchedRoad === 'yongbok' 
                    ? 'bg-[#FFD93D] border-4 border-[#4B3425] text-[#4B3425] scale-102 shadow-[4px_4px_0px_#4B3425]' 
                    : 'bg-white border-2 border-[#4B3425] text-[#4B3425] hover:bg-[#FFF3F5] hover:border-[#FF85A1] shadow-[2px_2px_0px_#4B3425]'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <MapPin className="w-4 h-4 text-[#FF85A1]" />
                  <span className="font-extrabold text-xs">서도 도로명</span>
                </div>
                <p className="text-[13px] font-black">안용복길</p>
                <p className="text-[10px] text-[#A0816C] font-bold font-sans mt-0.5">주민 대피 숙소와 생명수 단샘인 물골이 있는 길!</p>
              </button>
            </div>

            <AnimatePresence mode="wait">
              {matchedRoad === 'isabu' && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0 }}
                  className="bg-white p-4 rounded-xl border-2 border-[#4B3425] text-xs text-[#4B3425] font-bold shadow-[3px_3px_0px_#4B3425] font-sans"
                >
                  🛡️ <strong>동도 이사부길</strong>의 이름 기원: 신라 장군 '이사부'는 지증왕 13년(서기 512년), 우산국(울릉도 및 독도 포함 지대)을 최초로 신라 영토에 편입시킨 영웅이래!
                </motion.div>
              )}
              {matchedRoad === 'yongbok' && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0 }}
                  className="bg-white p-4 rounded-xl border-2 border-[#4B3425] text-xs text-[#4B3425] font-bold shadow-[3px_3px_0px_#4B3425] font-sans"
                >
                  🎣 <strong>서도 안용복길</strong>의 이름 기원: 조선 숙종 시대의 자랑스러운 영웅이자 평범한 어부 '안용복'은 일본 왜인 유입에 맞서 돗토리번에 건너가 조선의 영토 소유권을 굳건히 인정받아 낸 외교 영웅이란다!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
