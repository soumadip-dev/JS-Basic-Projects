const localQuots = [
  {
    text: "Today is the tomorrow we worried about yesterday.",
    author: "Rohan Jain",
    tag: "general",
  },
  {
    text: "What we worry about today will shape our future.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Every man dies. Not every man truly lives.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "The day is already blessed; find tranquility within it.",
    author: "Kiran Rao",
    tag: "general",
  },
  {
    text: "From small beginnings, great things emerge.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Both sunshine and rain are needed to create a rainbow.",
    author: "Sneha Patel",
    tag: "general",
  },
  {
    text: "A beautiful thing is never flawless.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Each new day brings another opportunity to transform your life.",
    author: "Rahul Sharma",
    tag: "general",
  },
  {
    text: "Some seek happiness, while others create it.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Our actions are driven by our beliefs.",
    author: "Priya Gupta",
    tag: "general",
  },
  {
    text: "The harder you fall, the higher you bounce.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Everyone smiles in the same language.",
    author: "Anonymous",
    tag: "",
  },
  {
    text: "You can either act reasonably or redefine what’s possible.",
    author: "Nisha Kumar",
    tag: "general",
  },
  {
    text: "Friendship is not a big thing; it's a million little things.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "A good plan executed today is better than a perfect plan delayed.",
    author: "Rajesh Kumar",
    tag: "general",
  },
  {
    text: "Someone remembers you, someone cares; your name is whispered in someone's prayers.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Don’t be driven by your problems; let your dreams guide you.",
    author: "Suman Jain",
    tag: "general",
  },
  {
    text: "Change your thoughts to change your life!",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Today is the tomorrow you worried about yesterday.",
    author: "Manish Patel",
    tag: "general",
  },
  {
    text: "The day looks brighter from behind a smile.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "A stumble can prevent a fall.",
    author: "Rakesh Sharma",
    tag: "general",
  },
  {
    text: "Put your future in good hands—your own.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "What you perceive depends on what you seek.",
    author: "Sonal Gupta",
    tag: "general",
  },
  {
    text: "Worry magnifies small issues.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "To achieve something new, you must do something new.",
    author: "Vijay Singh",
    tag: "general",
  },
  {
    text: "Be grateful for the unknown; it gives you a chance to learn.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Letting go is not the end but the beginning of a new chapter.",
    author: "Ramesh Kumar",
    tag: "general",
  },
  {
    text: "Our greatest glory is not in never failing but in rising each time we fall.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Being right is often overrated. Even a stopped clock is right twice a day.",
    author: "Suresh Jain",
    tag: "general",
  },
  {
    text: "Love is not blind; it reveals what others fail to see.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "If you rise one more time than you fall, you'll succeed.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Focus on making the decision right rather than finding the right decision.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Love is just a word until someone gives it meaning.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "We all face problems. It’s how we solve them that sets us apart.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Create your world. Surround yourself with what nourishes you.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Not every day is good, but there's something good in every day.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Strength sometimes lies in letting go, not in holding on.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Why worry about what you can’t control when you can focus on what you can?",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "It's better to take small steps in the right direction than a big leap that may cause you to stumble.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "When the world is walking out the door, your best friends are walking in.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Why compare yourself to others? No one can be a better you than you.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "A good teacher is like a candle; it consumes itself to light the way for others.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Life is not measured by breaths but by moments that take our breath away.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "The real measure of your wealth is how much you'd be worth if you lost all your money.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Though you can’t go back and start anew, you can start now and create a new ending.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "A friend is someone who understands your past, believes in your future, and accepts you as you are.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Giving up doesn’t always mean weakness; sometimes it's strength to let go.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Never miss a chance to make others happy, even if it means leaving them alone to do it.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Yesterday is history, tomorrow is a mystery, and today is a gift—that's why it's called the present.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "When you don't know what you believe, everything becomes an argument. Stand firm, and decisions become clear.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Every minute spent angry or upset is a minute of happiness lost forever.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "If we're heading in the right direction, all we need to do is keep walking.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "Peace of mind is not about the absence of conflict but the ability to handle it.",
    author: "Anonymous",
    tag: "general",
  },
  {
    text: "An obstacle can be a stepping stone or a stumbling block.",
    author: "Anonymous",
    tag: "general",
  },
];
