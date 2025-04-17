import { useState } from 'react';

const quizData = [
  {
    question: "창만 관련 퀴즈 문제 1",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 2",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 3",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 4",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 5",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 6",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 7",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 8",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 9",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 10",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 11",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 12",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 13",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 14",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 15",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 16",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 17",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 18",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 19",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 20",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 21",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 22",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 23",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 24",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 25",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 26",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 27",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 28",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 29",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  },
  {
    question: "창만 관련 퀴즈 문제 30",
    options: ["보기 A", "보기 B", "보기 C", "보기 D"],
    answer: "보기 B",
    explanation: "이 문제는 창만에 대한 이해를 확인하는 문제입니다. 정답은 보기 B입니다."
  }
];

export default function Home() {
  const [selected, setSelected] = useState(Array(quizData.length).fill(null));

  const handleSelect = (qIdx, opt) => {
    const newSelected = [...selected];
    newSelected[qIdx] = opt;
    setSelected(newSelected);
  };

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '720px', margin: 'auto' }}>
      <h1>창만 퀴즈 앱</h1>
      {quizData.map((q, idx) => {
        const userAnswer = selected[idx];
        return (
          <div key={idx} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
            <h2>Q{idx + 1}. {q.question}</h2>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              {q.options.map((opt, i) => {
                const isCorrect = userAnswer && opt === q.answer;
                const isWrong = userAnswer === opt && opt !== q.answer;
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
            {userAnswer && (
              <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                ✅ <strong>정답:</strong> {q.answer} <br />
                💡 {q.explanation}
              </div>
            )}
          </div>
        );
      })}
    </main>
  );
}