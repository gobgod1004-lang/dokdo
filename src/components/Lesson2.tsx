import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookMarked, Sparkles, FolderOpen, AlertCircle, Eye } from 'lucide-react';
import { DocumentItem, MapItem } from '../types';

export default function Lesson2() {
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [selectedMapId, setSelectedMapId] = useState<string>('map1');

  const documents: DocumentItem[] = [
    {
      id: 'doc1',
      title: '세종실록지리지',
      year: '1454년',
      category: 'KOREA',
      summary: '울진현 조에 "우산(독도)과 무릉(울릉도) 두 섬이 거리 불원하여 날씨가 맑으면 바라볼 수 있다"고 최초의 지리적 관측성을 명문화함.',
      fact: '울릉도에서 날씨가 맑으면 보이는 것은 오직 독도뿐이므로, "우산"이 독도라는 반박할 수 없는 완벽한 지리적 증거란다!'
    },
    {
      id: 'doc2',
      title: '신증동국여지승람',
      year: '1531년',
      category: 'KOREA',
      summary: '우산도와 울릉도의 병설을 기재하고, 부속 지도인 팔도총도에 명확히 두 섬을 조선의 영해 내 영토로 등록해 두었어.',
      fact: '국가적 관청 지리지에 일관되게 수록하여 통치 관할권이 줄곧 작동했음을 입증한단다.'
    },
    {
      id: 'doc3',
      title: '만기요람',
      year: '1808년',
      category: 'KOREA',
      summary: '군정편에 "울릉과 우산은 모두 우산국 영토인데 우산은 왜인들이 말하는 송도(다케시마의 당시 명칭)다"라고 명시함.',
      fact: '일본이 우기는 섬과 우리가 다스리던 우산도가 100% 동일한 독도임을 국가 공식 교안에 정리한 핵심 사료구몬!'
    },
    {
      id: 'doc4',
      title: '대한제국 칙령 제41호',
      year: '1900년 10월 25일',
      category: 'KOREA',
      summary: '고종 황제가 법령으로 울릉도를 울도군으로 승격시키고, 관할 구역에 죽도와 석도(石島, 돌섬 ➔ 독도)를 명확히 법문화함.',
      fact: '일본이 1905년 시마네현 고시로 독도를 무주지(주인 없는 땅)라 우기며 불법 탈취하기 "5년 전"에 이미 국제법적으로 정식 관할을 선언한 최고 권력의 법령이란다!'
    },
    {
      id: 'doc5',
      title: '은주시청합기',
      year: '1667년',
      category: 'JAPAN',
      summary: '일본 시마네현 관리가 조사한 소속 보고서. "오키섬을 일본의 서북 한계로 하고 울릉도와 독도는 고려(조선)의 땅으로 본다"고 적혀 있어.',
      fact: '일본 스스로 자신들의 영토 끝자락이 오키섬까지라고 고백했던 핵심 자백 문서란다!'
    },
    {
      id: 'doc6',
      title: '조선국 교제시말 내탐서',
      year: '1870년',
      category: 'JAPAN',
      summary: '메이지 외무성 관리들이 조선 사정을 염탐해 올린 극비 보고서. "울릉도(죽도)와 독도(송도)가 조선의 영토로 편입된 자세한 역사"를 명기함.',
      fact: '메이지 정부조차 독도가 대한민국 땅임을 확실하게 인지하고 있었다는 직접적 고문서 증거란다.'
    },
    {
      id: 'doc7',
      title: '태정관 지령',
      year: '1877년',
      category: 'JAPAN',
      summary: '메이지 정권 최고 행정 기관인 태정관의 최종 공적 결정문. "독도 외 1개 섬은 일본 제국과 일절 무관함을 명심할 것"을 지시함.',
      fact: '최고 결정 단위에서 공식적으로 독도는 한국 땅이라고 선언해 버린, 일본 정부가 가장 감추고 싶어하는 판결문급 보물 사료란다! 🤫'
    }
  ];

  const maps: MapItem[] = [
    {
      id: 'map1',
      title: '🗺️ 팔도총도',
      year: '1531년 편찬',
      source: '동국여지승람 첨부 지도',
      description: '조선 왕조가 편찬한 국가적 관찬 지도로, 동해 수평선 위에 울릉도와 우산도(독도)를 뚜렷하게 나란히 그려 넣은 최고의 보물 지도야.',
      factHighlight: '울릉도의 옆지기로 우산도를 뚜렷이 표시하여 국가 차원의 체계적인 영토 관리 흐름 속에 독도가 상시 들어가 있었음을 증명해!'
    },
    {
      id: 'map2',
      title: '🗺️ 개정일본여지로정전도',
      year: '1779년 정식 개정판',
      source: '일본 지리학자 나가쿠보 세키스이 제작',
      description: '일본에서 국가적으로 널리 쓰였던 가장 권위 있는 지도란다. 일본 영토 내부는 붉은색, 노란색 등 알록달록 고운 색을 칠해 두었어.',
      factHighlight: '오직 울릉도와 독도 주변에는 아예 어떤 색도 칠하지 않고 고스란히 투명(무색)하게 비워뒀단다! "이 섬들은 우리 일본 국경 밖이야"라고 스스로 자백한 그림인 셈이지!'
    },
    {
      id: 'map3',
      title: '🗺️ 삼국접양지도',
      year: '1785년 제작',
      source: '일본 하야시 시헤이의 아시아 전도',
      description: '의도치 않게 독도가 조선 땅임을 대외적으로 공포해버린 지도로 유명하단다. 주변 여러 국가들의 국경을 예쁜 색깔로 구분하고 주석을 달아 놓았어.',
      factHighlight: '조선 한반도 본토를 칠한 노란색(황색)을 독도와 울릉도에도 "동일하게 노랑칠"하고, 바로 옆에 한자로 정확하게 **"조선의 것(朝鮮ノ持)"**이라고 또렷이 기재해 두었단다! 빼도 박도 못하는 최강 비주얼 증거지! 💛'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* 귀여운 단원 타이틀 */}
      <div className="bg-[#7BC9FF] rounded-[32px] p-6 border-4 border-[#4B3425] shadow-[6px_6px_0px_#4B3425] relative overflow-hidden text-white">
        <div className="absolute -right-6 -bottom-6 opacity-20 font-black text-9xl text-white pointer-events-none">02</div>
        <div className="flex items-center gap-3 mb-2">
          <span className="p-2 bg-white rounded-xl text-[#4B3425] font-black text-xs border-2 border-[#4B3425] shadow-[2px_2px_0px_#4B3425]">2차시</span>
          <h2 className="text-2xl font-black text-white font-sans">고문서와 고지도가 증명하는 역사적 진실 📜</h2>
        </div>
        <p className="text-white font-bold text-sm leading-relaxed">
          독도 영유권 역사는 감정이 아닌, 한·일 양국의 최고 역사 기록들이 소리 죽여 고백하는 진실로 규명된단다.
          자랑스러운 **대한민국의 칭찬 보물상자**와 **일본 관찬 기록의 고백**들을 하나하나 밝혀볼까?
        </p>
      </div>

      {/* 2-1. 고문서 타일 대조 분석 */}
      <div className="bg-white rounded-[32px] border-4 border-[#4B3425] p-6 shadow-[8px_8px_0px_#FFD93D] space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-black text-[#FF85A1] bg-[#FFF3F5] px-3 py-1.5 rounded-full border-2 border-[#4B3425] shadow-[2px_2px_0px_#4B3425] uppercase">Interactive Library</span>
            <h3 className="text-xl font-black text-[#4B3425] mt-3">📦 반짝 고문서 보물상자</h3>
            <p className="text-[#A0816C] text-xs font-bold font-sans mt-1">상자를 클릭하여 옛 기록들이 속삭이는 역사적 팩트를 발견해 보렴!</p>
          </div>
          <Sparkles className="w-6 h-6 text-[#FF85A1] animate-spin duration-[4s]" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* 한국 사료 컬렉션 */}
          <div className="space-y-3">
            <h4 className="font-black text-sm text-white bg-[#7BC9FF] border-2 border-[#4B3425] px-3.5 py-2.5 rounded-xl flex items-center gap-2 shadow-[2.5px_2.5px_0px_#4B3425]">
              📖 대한민국 고문서 (수호 기록)
            </h4>
            <div className="space-y-2">
              {documents.filter(d => d.category === 'KOREA').map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => setSelectedDocId(selectedDocId === doc.id ? null : doc.id)}
                  className={`w-full text-left p-3.5 rounded-2xl border-2 transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    selectedDocId === doc.id
                      ? 'bg-[#FFD93D] text-[#4B3425] border-[#4B3425] shadow-[3px_3px_0px_#4B3425]'
                      : 'bg-white text-[#4B3425] hover:bg-slate-50 border-[#4B3425]/30 shadow-[1.5px_1.5px_0px_#4B3425]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">📦</span>
                    <div>
                      <h5 className="font-extrabold text-sm">{doc.title}</h5>
                      <p className={`text-[10px] ${selectedDocId === doc.id ? 'text-[#FF85A1]' : 'text-gray-400'} font-sans font-bold`}>{doc.year} 편찬</p>
                    </div>
                  </div>
                  <FolderOpen className={`w-4 h-4 ${selectedDocId === doc.id ? 'text-[#4B3425]' : 'text-[#7BC9FF]'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* 일본 사료 컬렉션 */}
          <div className="space-y-3">
            <h4 className="font-black text-sm text-white bg-[#FF85A1] border-2 border-[#4B3425] px-3.5 py-2.5 rounded-xl flex items-center gap-2 shadow-[2.5px_2.5px_0px_#4B3425]">
              🤫 일본 관찬 고문서 (주권 제외 반증)
            </h4>
            <div className="space-y-2">
              {documents.filter(d => d.category === 'JAPAN').map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => setSelectedDocId(selectedDocId === doc.id ? null : doc.id)}
                  className={`w-full text-left p-3.5 rounded-2xl border-2 transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    selectedDocId === doc.id
                      ? 'bg-[#FFD93D] text-[#4B3425] border-[#4B3425] shadow-[3px_3px_0px_#4B3425]'
                      : 'bg-white text-[#4B3425] hover:bg-slate-50 border-[#4B3425]/30 shadow-[1.5px_1.5px_0px_#4B3425]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">🤫</span>
                    <div>
                      <h5 className="font-extrabold text-sm">{doc.title}</h5>
                      <p className={`text-[10px] ${selectedDocId === doc.id ? 'text-[#FF85A1]' : 'text-gray-400'} font-sans font-bold`}>{doc.year} 내린 결정</p>
                    </div>
                  </div>
                  <FolderOpen className={`w-4 h-4 ${selectedDocId === doc.id ? 'text-[#4B3425]' : 'text-[#FF85A1]'}`} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 상세 서류 뷰어 */}
        <AnimatePresence mode="wait">
          {selectedDocId ? (
            (() => {
              const doc = documents.find(d => d.id === selectedDocId)!;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-5 rounded-2xl border-4 mt-4 text-left shadow-[6px_6px_0px_#4B3425] ${
                    doc.category === 'KOREA' 
                      ? 'bg-[#EBF8FF] border-[#4B3425]' 
                      : 'bg-[#FFFBEB] border-[#4B3425]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-sans font-black bg-white border-2 border-[#4B3425] shadow-[1.5px_1.5px_0px_#4B3425]">
                      {doc.category === 'KOREA' ? '대한민국 성문 문서' : '일본 관방 공식 문서'}
                    </span>
                    <h5 className="font-black text-base text-[#4B3425]">{doc.title} ({doc.year})</h5>
                  </div>
                  <div className="space-y-3 font-sans">
                    <div className="text-xs text-[#4B3425] font-bold bg-white p-3 rounded-xl border-2 border-[#4B3425]">
                      <strong>📜 원문 요약:</strong> {doc.summary}
                    </div>
                    <div className="text-xs text-[#4B3425] font-bold flex items-start gap-1.5 p-1">
                      <AlertCircle className="w-5 h-5 text-[#FF85A1] shrink-0 mt-0.5" />
                      <div>
                        <strong>강치 선생님의 돋보기 검증:</strong> {doc.fact}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()
          ) : (
            <div className="p-8 text-center text-[#A0816C] border-4 border-dashed border-[#4B3425] rounded-2xl bg-[#FFFBEB]/50 font-sans text-xs font-bold">
              위의 책상(상자) 단추를 누르면 봉인된 고문서 속 비밀 검증 팩트가 시각화 된단다! ✨
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* 2-2. 고지도 대조 인터랙티브 */}
      <div className="bg-white rounded-[32px] border-4 border-[#4B3425] p-6 shadow-[8px_8px_0px_#7BC9FF] space-y-4">
        <div>
          <span className="text-xs font-black text-[#FF85A1] bg-[#FFF3F5] px-3 py-1.5 rounded-full border-2 border-[#4B3425] shadow-[2px_2px_0px_#4B3425] uppercase">Visual Comparison</span>
          <h3 className="text-xl font-black text-[#4B3425] mt-3">🔍 한·일 고지도의 진실 돋보기</h3>
          <p className="text-[#A0816C] text-xs font-bold font-sans mt-1">지도는 백 마디 말보다 강한 국가적 강박을 시각적으로 보여주는 확실한 거울이란다.</p>
        </div>

        {/* 지도 탭 버튼 */}
        <div className="flex gap-2 border-b-2 border-[#4B3425]/10 flex-wrap">
          {maps.map((map) => (
            <button
              key={map.id}
              onClick={() => setSelectedMapId(map.id)}
              className={`pb-2.5 px-4 font-black text-xs cursor-pointer border-b-4 transition-all ${
                selectedMapId === map.id
                  ? 'border-[#FF85A1] text-[#4B3425]'
                  : 'border-transparent text-gray-400 hover:text-[#4B3425]'
              }`}
            >
              {map.title} ({map.year})
            </button>
          ))}
        </div>

        {/* 지도 상세 그래픽 & 돋보기 설명 */}
        <div className="bg-[#FFFBEB] rounded-2xl p-5 border-2 border-[#4B3425] grid md:grid-cols-12 gap-6 items-center shadow-[4px_4px_0px_#4B3425]">
          <div className="md:col-span-4 flex justify-center">
            {/* 귀여운 지도 심볼 박스 */}
            <div className="relative w-40 h-40 rounded-2xl bg-white border-4 border-[#4B3425] flex flex-col items-center justify-center p-4 text-center select-none shadow-[4px_4px_0px_#4B3425] group">
              <span className="text-4xl group-hover:scale-110 transition-transform cursor-default duration-300">🗺️</span>
              <span className="text-xs font-serif font-black text-[#4B3425] mt-2">{maps.find(m => m.id === selectedMapId)?.title.split(' ')[1]}</span>
              <span className="text-[9px] font-black text-[#FF85A1] bg-[#FFF3F5] border border-[#4B3425] px-2 py-0.5 rounded-full mt-2 font-mono">
                {maps.find(m => m.id === selectedMapId)?.year}
              </span>
              <div className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-[#FFD93D] flex items-center justify-center border border-[#4B3425] animate-pulse text-[10px]">
                🔍
              </div>
            </div>
          </div>

          <div className="md:col-span-8 text-left space-y-3 font-sans">
            <h4 className="text-base font-black text-[#4B3425] flex items-center gap-1.5">
              <Eye className="w-5 h-5 text-[#FF85A1]" /> {maps.find(m => m.id === selectedMapId)?.title}
            </h4>
            
            <p className="text-[#4B3425] text-xs font-bold leading-relaxed bg-white p-3 rounded-xl border-2 border-[#4B3425]/10">
              <strong>출처 및 설명:</strong> {maps.find(m => m.id === selectedMapId)?.source} ➔ {maps.find(m => m.id === selectedMapId)?.description}
            </p>

            <div className="bg-white text-[#4B3425] p-4 rounded-xl border-2 border-[#4B3425] text-xs shadow-[3px_3px_0px_#FF85A1]">
              <span className="font-black block text-[11px] text-[#FF85A1] mb-1">💡 돋보기 팩트 핵심!</span>
              <span className="font-bold text-[#4B3425]">{maps.find(m => m.id === selectedMapId)?.factHighlight}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
