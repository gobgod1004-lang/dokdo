import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, RefreshCcw, CheckCircle, XCircle, Heart, Star } from 'lucide-react';
import { QuizQuestion } from '../types';
import gangchiImg from '../assets/images/gangchi_character_1780105857585.png';

export default function DokdoQuiz() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAns, setSelectedAns] = useState<boolean | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [showCertificate, setShowCertificate] = useState<boolean>(false);

  const quizList: QuizQuestion[] = [
    {
      id: 1,
      question: "맑은 날 울릉도 고지대(해발 약 500m)에서는 동해 바다에 위치한 독도를 실제로 맨눈(육안)으로 또렷이 관측할 수 있단다?",
      options: ["그렇다 (O)", "아니다 (X)"],
      answerIndex: 0,
      explanation: "맞았단다! 울릉도와 독도의 거리는 87.4km이기 때문에, 맑은 날에는 또렷하게 눈으로 볼 수 있어. 세종실록지리지와 신증동국여지승람 등 우리의 많은 옛 지리지에도 '날씨가 맑으면 조망할 수 있다'고 지리적 관측 사실이 증명되어 있단다! 💙"
    },
    {
      id: 2,
      question: "일본에서 독도와 가장 가까운 '오키섬'에서도 날씨가 아주 좋고 화창하면 수평선 너머 독도를 맨눈으로 능히 관측해 낼 수 있단다?",
      options: ["그렇다 (O)", "아니다 (X)"],
      answerIndex: 1,
      explanation: "정답이야! 일본 오키섬에서는 지구의 둥근 모양(곡률 한계)과 거리(157.5km)의 문제 때문에, 날씨가 아무리 맑고 건조해도 '절대로 독도를 눈으로 볼 수 없단다'! 즉, 자연 상태에서 일본 어부들은 독도의 존재를 결코 미리 인지할 수 없었던 자외 권역이야."
    },
    {
      id: 3,
      question: "일본 정부 최고 결정권자인 '태정관'은 1877년 '독도는 일본 제국과 일절 무관함을 명심하라'며 독도가 조선 영토임을 시인하는 지령을 내렸단다?",
      options: ["그렇다 (O)", "아니다 (X)"],
      answerIndex: 0,
      explanation: "참 잘했단다! 1877년 메이지 정권 최고 행정 기관인 태정관은 스스로 고고한 자조 속에서 '태정관 지령'을 내렸어. '품의한 죽도(울릉도) 외 1개 섬(독도)은 완전히 일본 국경 밖'임을 시인한 가장 부인하기 힘든 특급 증거지!"
    },
    {
      id: 4,
      question: "대한제국의 고종 황제는 일본이 1905년 무주지(주인 없는 땅)라 우기며 독도를 불법 편입하기 '5년 전'인 1900년에 이미 법령 칙령 제41호를 선언해 행정 구역에 독도를 등록해 두었단다?",
      options: ["그렇다 (O)", "아니다 (X)"],
      answerIndex: 0,
      explanation: "정답이야! 1900년 10월 25일 대한제국 칙령 제41호로 울릉도를 '울도군'으로 승격하고 법률적 관할에 석도(독도)를 강건히 포함시켜 선포완료했어. 이미 우리가 주인 노릇을 똑똑히 하고 있던 땅이라 무주지 선점론은 대사기극인 셈이란다!"
    },
    {
      id: 5,
      question: "6·25 전쟁 직후 결성된 평범한 수호 영웅 '독도의용수비대'는 장비가 매우 부유해 언제나 최신 빔 레이저와 일류 철갑 대포 조작기들로만 승리했단다?",
      options: ["그렇다 (O)", "아니다 (X)"],
      answerIndex: 1,
      explanation: "훌륭한 지식이구나! 전쟁 중이라 아주 헐벗고 가난했던 수비대는 무기가 거의 없어서 통나무를 깎고 검은색 칠을 칠해 마치 두려운 진총 대포처럼 보이게 바위에 위장 거치해 두었대. 이를 본 일본 해경선은 포격을 무서워해 함부로 다가오지 못했지! 지혜로운 모형 박격포 작전의 승리였어! 🪵"
    }
  ];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedAns(idx === quizList[currentIdx].answerIndex);
    setIsAnswered(true);
    if (idx === quizList[currentIdx].answerIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < quizList.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedAns(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedAns(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
    setShowCertificate(false);
    setUserName('');
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-[32px] border-4 border-[#4B3425] p-6 shadow-[8px_8px_0px_#FFD93D] relative overflow-hidden text-left">
      {!isFinished ? (
        <div className="space-y-6">
          {/* 퀴즈 메인 타이틀 */}
          <div className="flex justify-between items-center border-b-2 border-[#4B3425]/10 pb-3">
            <h3 className="font-sans font-black text-lg text-[#4B3425] flex items-center gap-1">
              🏆 독도 골든벨 미니 퀴즈
            </h3>
            <span className="text-xs bg-[#FFF3F5] text-[#FF85A1] font-black px-3 py-1 rounded-full border-2 border-[#4B3425] font-mono">
              제 {currentIdx + 1} / {quizList.length} 문항
            </span>
          </div>

          {/* 질문 내용 */}
          <div className="space-y-4 font-sans">
            <div className="bg-[#FFFBEB] p-4 rounded-2xl min-h-[90px] border-2 border-[#4B3425] flex items-start gap-3 shadow-[2.5px_2.5px_0px_#4B3425]">
              <span className="text-2xl mt-0.5 select-none text-[#FF85A1] font-black">Q.</span>
              <p className="text-[#4B3425] text-sm md:text-base font-black leading-relaxed">
                {quizList[currentIdx].question}
              </p>
            </div>

            {/* 정답 선택 버튼 (O / X 형) */}
            <div className="grid grid-cols-2 gap-4">
              {quizList[currentIdx].options.map((opt, oIdx) => {
                const isCorrectOption = oIdx === quizList[currentIdx].answerIndex;
                let btnStyle = 'bg-white border-[#4B3425] text-[#4B3425] hover:bg-slate-50 shadow-[3px_3px_0px_#4B3425]';
                
                if (isAnswered) {
                  if (isCorrectOption) {
                    btnStyle = 'bg-[#7BC9FF] border-[#4B3425] text-white shadow-[3px_3px_0px_#4B3425]';
                  } else {
                    btnStyle = 'opacity-40 bg-slate-50 border-[#4B3425]/20 text-gray-400';
                  }
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelect(oIdx)}
                    disabled={isAnswered}
                    className={`py-6 px-4 md:py-8 rounded-2xl border-4 text-center font-black text-lg md:text-xl cursor-pointer hover:scale-101 active:scale-98 transition-all ${btnStyle}`}
                  >
                    {oIdx === 0 ? '⭕' : '❌'}
                    <span className="block text-xs font-black font-sans mt-2">{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 해설 등장 피드백 메시지 박스 */}
          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`p-4 rounded-2xl border-4 shadow-[4px_4px_0px_#4B3425] ${
                  selectedAns
                    ? 'bg-[#EBF8FF] border-[#4B3425] text-[#4B3425]'
                    : 'bg-[#FFF3F5] border-[#4B3425] text-[#4B3425]'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5 font-sans font-black text-sm">
                  {selectedAns ? (
                    <span className="flex items-center gap-1 text-[#7BC9FF]">
                      <CheckCircle className="w-5 h-5 fill-white text-[#7BC9FF]" /> 참 잘했단다! 정답이구몬! 🎉
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[#FF85A1]">
                      <XCircle className="w-5 h-5 fill-white text-[#FF85A1]" /> 아슬아슬 아쉬워라! 오답이란다! 💦
                    </span>
                  )}
                </div>
                <p className="text-xs md:text-sm leading-relaxed font-sans font-bold whitespace-pre-wrap pl-1.5">
                  {quizList[currentIdx].explanation}
                </p>

                <div className="flex justify-end mt-3">
                  <button
                    onClick={handleNext}
                    className="px-5 py-2.5 rounded-xl bg-[#4B3425] hover:bg-[#4B3425]/90 border-2 border-[#4B3425] text-white font-black text-xs cursor-pointer shadow-[2px_2px_0px_#FFD93D] transition-transform duration-200 active:translate-y-0.5 active:shadow-none"
                  >
                    {currentIdx + 1 < quizList.length ? '다음 문제 보물 열기 ➔' : '최종 채점관 결과 보기 ➔'}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        /* 퀴즈가 마무리 되었을 때 출력 화면 */
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <img src={gangchiImg} alt="성공강치" className="w-32 h-auto animate-bounce duration-[3s]" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-[#4B3425]">모든 골든벨 퀴즈 정복 완료! 🎉</h3>
            <p className="text-[#A0816C] font-sans text-xs font-bold">역사와 사실을 담고 수호를 드높이는 멋진 배움을 끝냈어!</p>
          </div>

          {/* 스코어보드 피드백 */}
          <div className="max-w-sm mx-auto bg-[#FFFBEB] p-4.5 rounded-2xl border-4 border-[#4B3425] flex justify-between items-center px-6 shadow-[3px_3px_0px_#4B3425]">
            <span className="font-black text-sm text-[#4B3425] font-sans">강치 선생님의 채점 성적표</span>
            <span className="font-black text-2xl text-[#FF85A1] font-mono">
              {score} 점 / 5 점 <span className="text-xs text-gray-400 font-normal">({(score / 5) * 100}%)</span>
            </span>
          </div>

          {/* 점수가 만점일 때 또는 임명장 수여 신청 양식 */}
          {score >= 3 ? (
            <div className="bg-white border-4 border-[#4B3425] p-5 rounded-2xl space-y-3 max-w-sm mx-auto text-left shadow-[5px_5px_0px_#FFD93D]">
              <span className="text-[10px] bg-[#FFF3F5] border-2 border-[#4B3425] text-[#FF85A1] font-black px-2 py-0.5 rounded-md font-sans">기수 임명 수여 대상</span>
              <p className="text-xs text-[#4B3425] leading-relaxed font-sans font-bold">
                과반수(3문제) 이상 훌륭하게 맞춘 공적으로, 강치 선생님으로부터 공적 보상인 **"명예 독도 수호대원 임명장"**을 수령할 자격이 주어졌어! 이름을 알려달라구몬!
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="지킴이 대원 이름 예시"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="flex-1 text-xs p-2.5 rounded-xl border-2 border-[#4B3425] focus:outline-none focus:ring-4 focus:ring-[#7BC9FF] font-sans font-black bg-white"
                />
                <button
                  type="button"
                  disabled={!userName.trim()}
                  onClick={() => setShowCertificate(true)}
                  className={`px-4 py-2.5 text-xs font-black rounded-xl cursor-pointer transition-colors border-2 border-[#4B3425] ${
                    userName.trim()
                      ? 'bg-[#FF85A1] hover:bg-[#FF85A1]/90 shadow-[2px_2px_0px_#4B3425] text-white font-black'
                      : 'bg-gray-100 border-[#4B3425]/30 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  임명장 주조하기 📜
                </button>
              </div>
            </div>
          ) : (
            <p className="text-xs text-[#FF85A1] font-sans font-black leading-relaxed">
              앗! 아슬아슬하게 독도에 공부가 조금 더 필요한 것 같아! <br />
              다시 1~3차시 교과서 보물상자를 돋보기로 차분히 살펴보고 만점 수호대원에 도전해 보자꾸나 🪵
            </p>
          )}

          {/* 명예 보증서/임명장 디자인 */}
          <AnimatePresence>
            {showCertificate && userName.trim() && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-amber-50 border-4 border-[#4B3425] rounded-2xl p-6 text-center space-y-4 max-w-sm mx-auto relative shadow-[6px_6px_0px_#4B3425] select-none mt-4 font-serif"
              >
                {/* 훈장 데코 */}
                <div className="absolute top-2 left-2 flex gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-500 -mt-1" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                </div>
                <div className="absolute top-2 right-2 text-3xl">🕊️</div>

                <div className="border border-dashed border-[#4B3425] p-4 rounded-xl space-y-3.5 bg-yellow-50/50">
                  <h4 className="text-lg font-black tracking-widest text-[#4B3425] border-b-2 border-[#4B3425]/20 pb-1 font-serif">명예 독도 지킴이 임명장</h4>
                  
                  <div className="space-y-1 font-sans">
                    <p className="text-[10px] text-amber-800 font-bold">제 DOKDO-2026-05호</p>
                    <p className="text-base font-black text-[#4B3425]">성명: {userName}</p>
                  </div>

                  <p className="text-[10px] text-gray-650 font-sans leading-relaxed text-center px-2 font-bold select-text">
                    위의 어린이는 "귀여운 독도 배움터"에서 지리적 사료 및 한·일 역사 사법 등의 골든벨 검증 퀴즈를 무적의 실력으로 맞췄을 뿐 아니라, 바른 역사관을 정립해 동해의 평화를 이룩하겠다는 따스한 자질을 갖추었으므로 명예로운 **독도 지킴이 수호 기수**로 임명합니다.
                  </p>

                  <div className="pt-2 border-t border-dashed border-[#4B3425]/20 flex justify-between items-center text-[9px] text-[#A0816C] font-sans font-bold">
                    <span className="font-mono">{new Date().toLocaleDateString('ko-KR')}</span>
                    <span className="font-bold">독도 지킴이 관장 강치 🐾</span>
                  </div>
                </div>
                
                <div className="text-[10px] text-[#4B3425] bg-white border-2 border-[#4B3425] px-3 py-1 rounded-full font-sans font-black w-fit mx-auto shadow-[1.5px_1.5px_0px_#4B3425]">
                  수호 대원 등재 완수! 💙 (캡처해 자랑해봐요!)
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 재도전 회전 단추 */}
          <div className="flex justify-center pt-4">
            <button
              onClick={handleReset}
              className="px-5 py-3 rounded-full border-4 border-[#4B3425] text-xs font-black text-[#4B3425] bg-white hover:bg-slate-50 cursor-pointer inline-flex items-center gap-1.5 transition-all shadow-[2.5px_2.5px_0px_#4B3425] active:translate-y-0.5 active:shadow-none"
            >
              <RefreshCcw className="w-3.5 h-3.5" /> 처음부터 다시 도전하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
