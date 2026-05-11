import { Routes, Route, Link, useParams } from "react-router-dom";
import { useState } from "react";
import './App.css'

function App() {

  let kanjiArr = [
    {
      day: '1일차 (26.05.08)',
      words: [
        ["最も", "もっとも", "가장"],
        ["運動", "うんどう", "운동"],
        ["汗", "あせ", "땀"],
        ["指示", "しじ", "지시"],
        ["辺り", "あたり", "근처"],
        ["事件", "じけん", "사건"],
        ["事故", "じこ", "사고"],
        ["期限", "きげん", "기한"],
        ["料金", "りょうきん", "요금"],
        ["払う", "はらう", "지불하다"],
        ["返す", "かえす", "돌려주다"],
        ["戻す", "もどす", "되돌리다"],
        ["彼", "かれ", "그"],
        ["間", "あいだ", "사이"],
        ["表面", "ひょうめん", "표면"],
        ["観察", "かんさつ", "관찰"],
        ["得意", "とくい", "잘함, 자신 있음"],
        ["会社", "かいしゃ", "회사"],
        ["反対", "はんたい", "반대"],
        ["方向", "ほうこう", "방향"],
        ["乗る", "のる", "타다"],
        ["枝", "えだ", "가지"],
        ["折る", "おる", "꺾다"],
        ["遠い", "とおい", "멀다"],
        ["短い", "みじかい", "짧다"],
        ["学期", "がっき", "학기"],
        ["授業", "じゅぎょう", "수업"],
        ["内容", "ないよう", "내용"],
        ["説明", "せつめい", "설명"],
        ["悩み", "なやみ", "고민"],
        ["相談", "そうだん", "상담"],
        ["新入社員", "しんにゅうしゃいん", "신입사원"],
        ["営業", "えいぎょう", "영업"],
        ["向いている", "むいている", "적성에 맞다"],
        ["場所", "ばしょ", "장소"],
        ["閉じる", "とじる", "닫다"],
        ["子供", "こども", "아이"],
        ["住む", "すむ", "살다"],
        ["庭", "にわ", "정원"]
      ]
    },

    {
      day: '2일차 (26.05.09)',
      words: [
        ["書類", "しょるい", "서류"],
        ["検討", "けんとう", "검토"],
        ["朝食", "ちょうしょく", "아침 식사"],
        ["簡単", "かんたん", "간단"],
        ["済ます", "すます", "끝내다"],
        ["包む", "つつむ", "싸다, 포장하다"],
        ["肩", "かた", "어깨"],
        ["首", "くび", "목"],
        ["腰", "こし", "허리"],
        ["指", "ゆび", "손가락"],
        ["痛める", "いためる", "다치게 하다"],
        ["病院", "びょういん", "병원"],
        ["通う", "かよう", "다니다"],
        ["習う", "ならう", "배우다"],
        ["単語", "たんご", "단어"],
        ["会話", "かいわ", "회화"],
        ["使う", "つかう", "사용하다"],
        ["近所", "きんじょ", "근처"],
        ["寝る", "ねる", "자다"],
        ["交通", "こうつう", "교통"],
        ["便利", "べんり", "편리"],
        ["夕飯", "ゆうはん", "저녁 식사"],
        ["合格", "ごうかく", "합격"],
        ["祝い", "いわい", "축하"],
        ["贈る", "おくる", "선물하다"],
        ["太い", "ふとい", "굵다"],
        ["地域", "ちいき", "지역"],
        ["交流", "こうりゅう", "교류"],
        ["参加", "さんか", "참가"]
      ]
    },
    {
      day: '3일차 (26.05.11)',
      words: [
        ["最近", "さいきん", "최근"],
        ["出勤", "しゅっきん", "출근"],
        ["出張", "しゅっちょう", "출장"],
        ["出席", "しゅっせき", "출석"],
        ["関する", "かんする", "~에 관한"],
        ["評判", "ひょうばん", "평판"],
        ["体験的", "たいけんてき", "체험적"],
        ["学習", "がくしゅう", "학습"],
        ["公共", "こうきょう", "공공"],
        ["移住", "いじゅう", "이주"],
        ["物価", "ぶっか", "물가"],
        ["代金", "だいきん", "대금"],
        ["合計", "ごうけい", "합계"],
        ["値段", "ねだん", "가격"],
        ["好物", "こうぶつ", "좋아하는 음식"],
        ["隣の席", "となりのせき", "옆 자리"],
        ["急に", "きゅうに", "갑자기"],
        ["持つ", "もつ", "가지다"],
        ["比較", "ひかく", "비교"],
        ["点検", "てんけん", "점검"],
        ["絵", "え", "그림"],
        ["小説", "しょうせつ", "소설"],
        ["得る", "える", "얻다"],
        ["描く", "かく", "그리다"],
        ["練習", "れんしゅう", "연습"],
        ["勤務", "きんむ", "근무"],
        ["規則違反", "きそくいはん", "규칙 위반"],
        ["以外", "いがい", "~이외"],
        ["可能性", "かのうせい", "가능성"],
        ["非常に", "ひじょうに", "매우"]
      ]
    }
  ]

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home kanjiArr={kanjiArr} />} />
        <Route path="/study/:id" element={<Study kanjiArr={kanjiArr} />} />
      </Routes>
    </div>
  )
}

export default App


function Home({ kanjiArr }) {
  return (
    <div className="dayContainer">

      <div className='title'>일본어 한자 공부 프로그램</div>

      <div className="day">
        {
          kanjiArr.map((a, i) => {
            return (
              <div key={i}>
                <Link to={`/study/${a.day}`} className="selectDay">
                  {a.day}
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

function Study({ kanjiArr }) {

  const { id } = useParams();

  const currentDay = kanjiArr.find(a => a.day === id);
  const shuffledWords = [...currentDay.words].sort(() => Math.random() - 0.5);

  const [wordIndex, setWordIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const currentWord = shuffledWords[wordIndex];

  const nextWord = () => {
    if (wordIndex >= shuffledWords.length - 1) {
      setWordIndex(0);
    } else {
      setWordIndex(wordIndex + 1);
    }
    setShowAnswer(false);
  };

  const prevWord = () => {
    if (wordIndex === 0) {
      setWordIndex(shuffledWords.length - 1);
    } else {
      setWordIndex(wordIndex - 1);
    }
    setShowAnswer(false);
  };

  return (
    <div>

      <div className="dayHeader">
        {id}
      </div>

      <Link to="/" className="back">
        돌아가기
      </Link>

      <div className="words">

        <div className="selectWord">

          <div>{wordIndex + 1} / {currentDay.words.length}</div>
          <div className="kanji">{currentWord[0]}</div>

          {
            showAnswer &&
            <>
              <div className="reading">{currentWord[1]}</div>
              <div className="meaning">{currentWord[2]}</div>
            </>
          }

          <div className="btns">

            <button onClick={prevWord} className="changeWord">
              이전
            </button>

            <button onClick={() => setShowAnswer(!showAnswer)} className="answerBtn">
              {
                showAnswer
                  ? "숨기기"
                  : "발음 / 뜻 보기"
              }
            </button>

            <button onClick={nextWord} className="changeWord">
              다음
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}