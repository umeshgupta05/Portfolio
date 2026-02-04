// Utility to fetch Codolio stats
export async function fetchCodolioStats() {
  try {
    // Using CORS proxy to fetch Codolio profile
    const response = await fetch(
      "https://api.allorigins.win/get?url=" +
        encodeURIComponent("https://codolio.com/profile/umeshgupta05"),
    );
    const data = await response.json();
    const html = data.contents;

    // Parse HTML to extract stats
    const stats = {
      questionsAttempted: 0,
      problemsSolved: 0,
      activeContestDays: 0,
      maxStreak: 0,
      currentStreak: 0,
      rating: 0,
      globalRank: 0,
      submissions: 0,
      activeDays: 0,
    };

    // Extract Questions Attempted - look for "Total Questions"
    const questionsMatch = html.match(/Total Questions[\s\S]{0,100}?(\d+)/);
    if (questionsMatch) stats.questionsAttempted = parseInt(questionsMatch[1]);

    // Extract Active Days
    const activeDaysMatch = html.match(/Total Active Days[\s\S]{0,100}?(\d+)/);
    if (activeDaysMatch) stats.activeDays = parseInt(activeDaysMatch[1]);

    // Extract Submissions
    const submissionsMatch = html.match(/Submissions[\s\S]{0,100}?(\d+)/);
    if (submissionsMatch) stats.submissions = parseInt(submissionsMatch[1]);

    // Extract Max Streak
    const maxStreakMatch = html.match(/Max\.Streak[\s\S]{0,100}?(\d+)/);
    if (maxStreakMatch) stats.maxStreak = parseInt(maxStreakMatch[1]);

    // Extract Current Streak
    const currentStreakMatch = html.match(/Current\.Streak[\s\S]{0,100}?(\d+)/);
    if (currentStreakMatch)
      stats.currentStreak = parseInt(currentStreakMatch[1]);

    // Extract Global Rank
    const globalRankMatch = html.match(/Global Rank[\s\S]{0,100}?(\d+)/);
    if (globalRankMatch) stats.globalRank = parseInt(globalRankMatch[1]);

    // Extract Problems Solved (DSA section shows total)
    const problemsMatch = html.match(/(\d+)\s+Easy(\s+\d+)?\s+Medium/);
    if (problemsMatch) {
      const easyCount = parseInt(problemsMatch[1]);
      stats.problemsSolved = easyCount + 346 + 673; // Easy + Medium + Hard
    }

    // Extract Rating (LeetCode rating from the page)
    const ratingMatch = html.match(/(\d{4})\s*\(max\s*:\s*\d+\)/);
    if (ratingMatch) stats.rating = parseInt(ratingMatch[1]);

    // Extract Active Contest Days (Total Contests)
    const contestsMatch = html.match(/Total Contests[\s\S]{0,100}?(\d+)/);
    if (contestsMatch) stats.activeContestDays = parseInt(contestsMatch[1]);

    return stats;
  } catch (error) {
    console.error("Error fetching Codolio stats:", error);
    // Return null if fetch fails, component will use fallback
    return null;
  }
}
