

export default function minimax(matchesLeft, depth, isMaximizer, maxTurns) {
  function adjustScore(score, matchesLeft) {
    if (matchesLeft <= maxTurns && (matchesLeft - score) % 2 === 1) {
      score = matchesLeft - score;
    }
    return score;
  }
  
  if (matchesLeft === 0) {
    return { score: isMaximizer ? -1 : 1 };
  }

  if (isMaximizer) {
    let maxScore = -Infinity;
    let bestMove = null;

    for (let i = 1; i <= maxTurns; i++) {
      if (matchesLeft - i >= 0) {
        const { score } = minimax(matchesLeft - i, depth + 1, false, maxTurns);
        if (score > maxScore) {
          maxScore = score;
          bestMove = i;
        }
      }
    }

    return { score: maxScore, move: bestMove };
  } else {
    let minScore = Infinity;
    let bestMove = null;

    for (let i = 1; i <= maxTurns; i++) {
      if (matchesLeft - i >= 0) {
        const { score } = minimax(matchesLeft - i, depth + 1, true, maxTurns);
        if (score < minScore) {
          minScore = score;
          bestMove = i;
        }
      }
    }
    
    return { score: adjustScore(minScore, matchesLeft), move: bestMove };
  }
}
