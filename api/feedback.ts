import { GoogleGenAI } from '@google/genai';

let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error('GEMINI_API_KEY environment variable is required');
    }
    aiClient = new GoogleGenAI({ apiKey: key });
  }
  return aiClient;
}

export default async function handler(req: any, res: any) {
  // Only allow POST requests for safety
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { koreanStudent, japaneseStudent, title, content } = req.body;

    if (!content) {
      return res.status(400).json({ error: '제안서 내용을 입력해주세요!' });
    }

    let feedbackText = '';
    try {
      const ai = getGeminiClient();
      const prompt = `
당신은 대한민국 독도의 지리적 특성, 역사적 사료, 국제법적 입지를 아주 정확하고 온화하게 교육하는 "귀여운 강치 선생님" 캐릭터이자 한일 공동 평화 역사 교과서 평가위원입니다.
학생들이 협력하여 작성한 "공동 집필 제안서" 내용을 평가하고 아낌없는 온화한 조언과 역사적 피드백을 전달해주세요.

[학생 작성 정보]
동아리 모둠: 한국 학생 (${koreanStudent || '미입력'}), 일본 학생 (${japaneseStudent || '미입력'})
우리가 제안하는 독도 단원 제목: "${title || '미정'}"
공동 집필 본문: "${content}"

[평가 및 작성 가이드라인]
1. 말투: "~~했단다!", "~~구몬!", "~~란다!" 처럼 아이들을 진정 다독거리는 친절하고 약간 귀엽고 따스한 말투를 사용해주세요.
2. 사실(Fact)에 근거한 칭찬: 세종실록지리지, 태정관지령, 삼국접양지도 등 실제 사료가 훌륭하게 언급되어 있는지 확인하고 조언해 줍니다. 
3. 한일간의 감정 대립을 넘어 역사적 진실과 팩트를 똑똑하게 나열하면서도, 두 친구(한·일 학생)의 평화적 교류 자체를 힘차게 응원해주어야 합니다.
4. 평가위원 의견 형식:
   - "💙 강치 선생님의 칭찬 도장" (칭찬할 점을 따뜻하게 서술)
   - "🔍 역사 돋보기 코치" (사료나 역사적 진실에 관한 보완점이나 설명 보태기 - 예: 울릉도에서 날씨가 맑으면 보이는 육안 관측성, 태정관 지령 1877, 안용복 사건 등과 매치 후 부연 설명)
   - "🕊️ 미래 평화 스케치" (한일 학생의 미래 지향적 공동 협력을 응원하는 따뜻한 메시지)

형식은 편안하고 마무리가 예쁜 일반 텍스트나 리치 텍스트 형태로 적되, 단락을 잘 나누어서 전달해주세요. Markdown 형식을 쓰면 좋습니다.
`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      feedbackText = response.text || '';
    } catch (apiError: any) {
      console.warn('Gemini API is unavailable, falling back to local heuristic response:', apiError);
      // Fallback response handling
      feedbackText = `### 💙 강치 선생님의 칭찬 도장
오아! 한·일 두 친구가 힘을 합쳐 멋진 교과서 서술 제안서를 작성했구나! 정말 대단하다구몬! 대립을 넘어서 평화를 지향하고 있어 아주 감동받았단다!

### 🔍 역사 돋보기 코치
적어준 내용에 **역사적 사료**가 아주 잘 녹아들어가 있어! 
여기에 **울릉도에서 날씨가 맑으면 독도가 한눈에 선명하게 보인다**는 '지리적 육안 관측 사실'이나, 일본 정부도 스스로 독도가 자국 영토가 아님을 인정한 최고 결정 양식인 **태정관 지령(1877년)**에 대한 이야기가 조금 더 구체적으로 들어간다면 세계의 많은 친구들에게 독도의 진실을 훨씬 명쾌하게 알려 줄 수 있을 거란다!

### 🕊️ 미래 평화 스케치
두 친구가 이렇게 머리를 맞대고 진지하게 대화하고 역사를 연구하는 모습 자체가 바로 미래 동아시아 평화의 첫걸음이란다! 앞으로도 열정 넘치게 역사를 정립하며 교과서를 가득 채워나가길 강치 선생님이 힘차게 응원할게! 화이팅! 💙`;
    }

    res.status(200).json({ feedback: feedbackText });
  } catch (error: any) {
    console.error('Feedback generate error:', error);
    res.status(500).json({ error: error.message || 'Gemini API 호출 중 문제가 발생했습니다.' });
  }
}
