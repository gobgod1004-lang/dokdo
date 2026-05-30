import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Edit3, Users, Loader2, Sparkles, MessageCircleCode, CheckCircle2 } from 'lucide-react';
import gangchiImg from '../assets/images/gangchi_character_1780105857585.png';

export default function Lesson4() {
  const [koreanStudent, setKoreanStudent] = useState('');
  const [japaneseStudent, setJapaneseStudent] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // 교재 6페이지 예시 템플릿 가져오기
  const insertTemplate = () => {
    setKoreanStudent('민우');
    setJapaneseStudent('사쿠라');
    setTitle('역사와 진실로 이어지는 평화의 섬, 독도스토리');
    setContent(
      '동해의 평화로운 섬 독도는 역사적 사료를 통해 그 지위가 증명된다. 한국의 『세종실록지리지(1454년)』에는 울릉도와 독도(우산)가 서로 거리가 멀지 않아 날씨가 맑으면 육안으로 관측 가능하다고 기록되어 양국의 고대 생활권을 보여준다. 또한, 일본 메이지 정부 최고 기관이 내린 『태정관 지령(1877년)』에서도 울릉도와 독도가 일본과 관계없는 조선의 영역임을 분명히 명시했다. 오늘날 양국은 어업 갈등을 겪고 있으나, 영토 대립을 넘어 역사적 진실을 직시하고 동해를 평화와 공동 번영의 바다로 만들기 위해 상호 협력해야 한다.'
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setLoading(true);
    setFeedback(null);
    setError(null);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          koreanStudent,
          japaneseStudent,
          title,
          content,
        }),
      });

      if (!response.ok) {
        throw new Error('의견을 받아오는 데 실패했습니다.');
      }

      const data = await response.json();
      setFeedback(data.feedback);
    } catch (err: any) {
      console.error(err);
      setError('서버가 살포시 점검 중이거나 API 호출 오류가 발생했단다구몬. 죄송해요!');
    } finally {
      setLoading(false);
    }
  };

  // 마크다운과 텍스트를 파싱하여 예쁘게 그리기 위한 헬퍼 컴포넌트
  const renderRichText = (text: string) => {
    return text.split('\n').map((line, idx) => {
      // 제목 파싱 (예: ### 또는 ##, #)
      if (line.startsWith('###') || line.startsWith('##') || line.startsWith('#')) {
        const titleText = line.replace(/^[#\s]+/, '');
        return (
          <h4 key={idx} className="font-black text-base text-[#4B3425] mt-5 mb-2 first:mt-2 flex items-center gap-1">
            {titleText}
          </h4>
        );
      }
      // 볼드 파싱 (예: **텍스트**)
      if (line.includes('**')) {
        const parts = line.split('**');
        return (
          <p key={idx} className="text-xs md:text-sm text-[#4B3425] leading-relaxed font-sans font-bold mb-2">
            {parts.map((part, i) => (i % 2 === 1 ? <strong key={i} className="text-[#FF85A1] font-black">{part}</strong> : part))}
          </p>
        );
      }
      // 일반 줄바꿈 처리
      return (
        <p key={idx} className="text-xs md:text-sm text-[#4B3425] leading-relaxed font-sans font-bold mb-1.5 min-h-[1rem]">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* 귀여운 단원 타이틀 */}
      <div className="bg-[#7BC9FF] rounded-[32px] p-6 border-4 border-[#4B3425] shadow-[6px_6px_0px_#4B3425] relative overflow-hidden text-white">
        <div className="absolute -right-6 -bottom-6 opacity-20 font-black text-9xl text-white pointer-events-none">04</div>
        <div className="flex items-center gap-3 mb-2">
          <span className="p-2 bg-white rounded-xl text-[#4B3425] font-black text-xs border-2 border-[#4B3425] shadow-[2px_2px_0px_#4B3425]">4차시</span>
          <h2 className="text-2xl font-black text-white font-sans">한·일 평화 공동 교과서 집필하기 🕊️</h2>
        </div>
        <p className="text-white font-bold text-sm leading-relaxed">
          대립과 비방을 물리치는 궁극의 열쇠는 바로 **함께 쓰는 정답**이란다! 
          상상의 나래를 펼쳐 한국 학생과 일본 학생이 동아리실에서 머리를 맞대고, 양심적 사료를 담은 독도 기술 교안을 가상 작문해보자꾸나!
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-6 w-full animate-fade-in">
        {/* 제안서 작성 서식 */}
        <div className="md:col-span-7 bg-white rounded-[32px] border-4 border-[#4B3425] p-6 shadow-[8px_8px_0px_#FFD93D] space-y-4 text-left">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black text-[#4B3425] flex items-center gap-1.5">
              <Edit3 className="w-5 h-5 text-[#FF85A1]" /> 공동 역사 교과서 제안서
            </h3>
            <button
              type="button"
              onClick={insertTemplate}
              className="text-xs bg-[#FFD93D] hover:bg-[#FFD93D]/90 text-[#4B3425] px-3.5 py-1.5 rounded-full border-2 border-[#4B3425] shadow-[2px_2px_0px_#4B3425] font-black cursor-pointer transition-transform duration-200 active:translate-y-0.5 active:shadow-none"
            >
              📝 모범 예시 글 채우기
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 학생 명찰 입력 */}
            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-black text-[#4B3425] mb-1">🇰🇷 한국 학생 이름</label>
                <input
                  type="text"
                  placeholder="예: 민우"
                  value={koreanStudent}
                  onChange={(e) => setKoreanStudent(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border-2 border-[#4B3425] focus:outline-none focus:ring-4 focus:ring-[#7BC9FF] bg-white text-[#4B3425] font-sans font-bold shadow-[2px_2px_0px_#4B3425]"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-[#4B3425] mb-1">🇯🇵 일본 학생 이름</label>
                <input
                  type="text"
                  placeholder="예: 사쿠라"
                  value={japaneseStudent}
                  onChange={(e) => setJapaneseStudent(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border-2 border-[#4B3425] focus:outline-none focus:ring-4 focus:ring-[#7BC9FF] bg-white text-[#4B3425] font-sans font-bold shadow-[2px_2px_0px_#4B3425]"
                />
              </div>
            </div>

            {/* 단원 제목 */}
            <div>
              <label className="block text-xs font-black text-[#4B3425] mb-1">📔 우리가 제안하는 독도 단원 제목</label>
              <input
                type="text"
                placeholder="예: 평화와 우정으로 다시 쓰는 동해와 독도"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-xs p-3 rounded-xl border-2 border-[#4B3425] focus:outline-none focus:ring-4 focus:ring-[#7BC9FF] bg-white text-[#4B3425] font-sans font-bold shadow-[2px_2px_0px_#4B3425]"
              />
            </div>

            {/* 본문 집필 */}
            <div>
              <label className="block text-xs font-black text-[#4B3425] mb-1 flex justify-between">
                <span>✍️ 공동 집필 본문 (10줄 이내)</span>
                <span className="text-[9px] text-[#A0816C] font-sans font-black">사료 2개 이상 권장</span>
              </label>
              <textarea
                rows={9}
                placeholder="내용을 작성해주세요. 한국 측 사료(세종실록지리지, 칙령 제41호)와 일본 관찬 사료(태정관지령 등)를 명확히 제시하면 훨씬 설득력이 강해진단다구몬!"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full text-xs p-3.5 rounded-xl border-2 border-[#4B3425] focus:outline-none focus:ring-4 focus:ring-[#7BC9FF] bg-white text-[#4B3425] font-sans font-bold leading-relaxed shadow-[2px_2px_0px_#4B3425]"
                maxLength={1000}
              />
            </div>

            <button
              type="submit"
              disabled={loading || !content.trim()}
              className={`w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${
                loading || !content.trim()
                  ? 'bg-[#EBF8FF] border-2 border-[#4B3425]/30 text-gray-400 cursor-not-allowed'
                  : 'bg-[#FF85A1] hover:bg-[#FF85A1]/95 text-white border-4 border-[#4B3425] shadow-[4px_4px_0px_#4B3425] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>강치 선생님이 정밀 검토 및 교정 의견 작성 중...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>💙 강치 선생님 복사 채기! (AI 피드백 받기)</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* 피드백 결과 패널 */}
        <div className="md:col-span-5 flex flex-col justify-between h-full bg-white rounded-[32px] border-4 border-[#4B3425] p-6 text-left relative overflow-hidden shadow-[8px_8px_0px_#7BC9FF]">
          <div className="absolute right-3 top-3 opacity-5 select-none pointer-events-none text-9xl">🕊️</div>
          
          <div className="space-y-4">
            <h4 className="font-extrabold text-[#4B3425] text-sm flex items-center gap-1.5 border-b-2 border-[#4B3425]/10 pb-3">
              <Users className="w-4.5 h-4.5 text-[#FF85A1]" /> 평가위원 의견서 책상
            </h4>

            <AnimatePresence mode="wait">
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-20 text-center gap-4"
                >
                  <div className="p-4 bg-[#7BC9FF]/10 text-[#7BC9FF] animate-spin">
                    <Loader2 className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="font-sans font-black text-sm text-[#4B3425]">바다 밑 수비대 도서관에서...</span>
                    <p className="text-[11px] text-[#A0816C] font-sans font-bold mt-0.5">사료를 뒤적거리며 강치쌤이 따스한 조언을 짓고 있단다!</p>
                  </div>
                </motion.div>
              )}

              {error && !loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 bg-[#FFF3F5] text-[#FF85A1] rounded-xl border-2 border-[#4B3425] text-xs font-sans font-bold"
                >
                  {error}
                </motion.div>
              )}

              {feedback && !loading && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-3 max-h-[420px] overflow-y-auto pr-1"
                >
                  {renderRichText(feedback)}
                  <div className="pt-3 border-t-2 border-dashed border-[#4B3425]/10 flex items-center gap-1.5 justify-end">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500" />
                    <span className="text-[10px] bg-[#FFF3F5] text-[#FF85A1] font-sans font-black border-2 border-[#4B3425] shadow-[2px_2px_0px_#4B3425] px-2 py-0.5 rounded-sm">평화 서술 검토 완료</span>
                  </div>
                </motion.div>
              )}

              {!feedback && !loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-24 text-center text-gray-400"
                >
                  <img src={gangchiImg} alt="대기중" className="w-20 opacity-45 mb-3" />
                  <p className="text-xs font-sans font-bold text-[#A0816C] leading-relaxed">
                    왼쪽 제안서를 작성하거나<br />
                    <span className="text-[#FF85A1] font-black block mt-1">"모범 예시 넣기"</span>를 누르고 단추를 가볍게 눌러주면,<br />
                    귀여운 강치 선생님의 따스한 코치와<br />
                    칭찬 피드백이 실시간 작성된다구몬! ✨
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 4.2 토론 및 성찰 질문 리스트 */}
      <div className="bg-[#FFFBEB] rounded-[32px] p-6 border-4 border-[#4B3425] shadow-[6px_6px_0px_#4B3425] text-left space-y-4 animate-fade-in">
        <h4 className="text-base font-black text-[#4B3425] flex items-center gap-1.5">
          <MessageCircleCode className="w-5 h-5 text-[#FF85A1]" /> 우리들의 우정 깊은 성찰 놀이방
        </h4>
        <p className="text-[#4B3425]/80 text-xs font-bold font-sans leading-relaxed">
          공동 서술을 마치고 모둠 친구들과 함께 둘러앉아 다음 세 가지 동화 같은 질문에 대해 눈을 빛내보자구몬!
        </p>

        <div className="space-y-2.5">
          {[
            {
              q: "1. 일본의 1877년 『태정관 지령』과 지도가 현대 일본의 억지 주장을 정통으로 박살 낼 수 있는 가장 날카로운 비주얼 치트키인 이유는 무엇일까?",
              a: "막부시대를 거쳐 메이지 공식 정부가 최고 행정관서 도장까지 찍어서 '조선 땅이고 우리와 무관하다'고 스스로 명문화했기 때문에 논리적으로 완전한 침묵을 자아낸단다!"
            },
            {
              q: "2. 1998년 체결된 '신한일어업협정'에서 독도가 왜 독립적 기점이 아닌 임시 중간수역 안에 놓였는지, 왜 이것이 오늘날의 불씨가 되었는지 성찰해보자.",
              a: "어업권을 보호하려는 실리 합의 과정에서 모호한 지대를 만들게 됨으로써 훗날 우기는 불씨를 안겨주게 되었단다. 평등하고 투명한 잣대가 필요함을 의미해."
            },
            {
              q: "3. 미래 세대인 우리가 역사 영토 갈등을 주먹싸움이 아닌 평화적으로 해결하기 위해, 한일 청소년 역사 평화 연대 캠프가 있다면 어떤 대화를 먼저 나누고 싶니?",
              a: "역사를 왜곡된 교과서로만 배운 친구들에게 화내기보다는 올바른 사실 문서를 함께 보며 손잡고 '동해 바다를 평화로운 고기잡이 영해로 만들자'고 어깨동무해보는 게 무척 멋지겠단다!"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl border-2 border-[#4B3425] space-y-1.5 shadow-[3px_3px_0px_#FF85A1] font-sans text-xs">
              <p className="font-black text-[#4B3425] leading-relaxed">{item.q}</p>
              <p className="text-[#A0816C] font-bold text-[11px] leading-relaxed pl-3.5 border-l-2 border-[#FF85A1]">
                ⭐ <strong>강치쌤의 힌트:</strong> {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
