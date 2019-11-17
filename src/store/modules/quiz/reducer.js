import produce from 'immer';

const INITIAL_STATE = {
  correctAnswer: false,
  score: 0,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@quiz/ANSWER_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@quiz/ANSWER_SUCCESS': {
        draft.correctAnswer = true;
        draft.score = draft.score + 1;
        draft.loading = false;
        break;
      }
      case '@quiz/ANSWER_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@quiz/RESET': {
        draft.correctAnswer = false;
        draft.score = 0;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
