import { useState } from 'react';

const quizData = [
  {
    question: "창만(脹滿)은 어느 부위의 병증인가?",
    options: ["머리", "복부", "팔다리", "폐"],
    answer: "복부",
    explanation: "창만은 복부 팽만 증상으로, 장기 기능과 관련된 진장병입니다."
  },
  {
    question: "복부를 두드렸을 때 북처럼 울리는 소리가 나는 상태는?",
    options: ["기창", "고창", "곡창", "혈창"],
    answer: "고창",
    explanation: "고창은 복수가 차고 복부가 팽팽해져 북처럼 울리는 상태입니다."
  }
];

export default function Home() {
  const [revealed, setRevealed] = useState(Array(quizData.length).fill(false));
  const [selected, setSelected] = useState(Array(quizData.length).fill(null));

  const toggleReveal = (index) => {
    const newReveal = [...revealed];
    newReveal[index] = !newReveal[index];
    setRevealed(newReveal);
  };

  const handleSelect = (qIdx, opt) => {
    const newSelected = [...selected];
    newSelected[qIdx] = opt;
    setSelected(newSelected);
  };

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '720px', margin: 'auto' }}>
      <h1>창만 퀴즈 앱</h1>
      {quizData.map((q, idx) => (
        <div key={idx} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
          <h2>Q{idx + 1}. {q.question}</h2>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {q.options.map((opt, i) => {
              const isCorrect = revealed[idx] && opt === q.answer;
              const isWrong = revealed[idx] && selected[idx] === opt && opt !== q.answer;
              return (
                <li key={i}
                  onClick={() => handleSelect(idx, opt)}
                  style={{
                    cursor: 'pointer',
                    padding: '0.5rem',
                    margin: '0.3rem 0',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    backgroundColor: isCorrect ? '#c8f7c5' : isWrong ? '#f8cccc' : '#f9f9f9'
                  }}>
                  {opt}
                </li>
              );
            })}
          </ul>
          <button onClick={() => toggleReveal(idx)} style={{ marginTop: '0.5rem' }}>
            {revealed[idx] ? "정답 숨기기" : "정답 보기"}
          </button>
          {revealed[idx] && (
            <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
              ✅ <strong>정답:</strong> {q.answer} <br />
              💡 {q.explanation}
            </div>
          )}
        </div>
      ))}
    </main>
  );
}
