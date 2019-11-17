export function answerRequest(answer, correctAnswer) {
  return {
    type: '@quiz/ANSWER_REQUEST',
    payload: { answer, correctAnswer },
  };
}

export function answerSuccess(point) {
  return {
    type: '@quiz/ANSWER_SUCCESS',
    payload: { point },
  };
}

export function answerFailure() {
  return {
    type: '@quiz/ANSWER_FAILURE',
  };
}

export function reset() {
  return {
    type: '@quiz/RESET',
  };
}
