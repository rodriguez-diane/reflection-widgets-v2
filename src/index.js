import { displayWinsQuoteWall } from './wins';
import { analyzeReflection } from './synthesis';

// Sample data for demonstration purposes
const winsArray = [
  "Achieved a personal milestone in my business.",
  "Completed a challenging task ahead of schedule.",
  "Had a productive and energizing day."
];

// Example cog and reflection data
const cog = "Struggled with time management.";
const reflection = "Learned that breaking tasks into smaller steps helps me stay focused.";

displayWinsQuoteWall(winsArray);
analyzeReflection(cog, reflection);
