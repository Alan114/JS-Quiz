const rightAnswers = ["B", "B", "B", "A", "A", "B", "B", "B"];

const form = document.querySelector("form");
const result = document.querySelector(".result");

form.addEventListener("submit", e => {
  e.preventDefault();
  let score = 0;
  let userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
    form.q7.value,
    form.q8.value,
  ];
  userAnswers.forEach((answer, index) => {
    if (answer === rightAnswers[index]) {
      score += 12.5;
    }
  });
  result.textContent = `You have a ${score} % chance to be a developer.`;
  result.classList.remove("hide");
  scrollTo(0, 0);
});
