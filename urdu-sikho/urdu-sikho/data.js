// data.js
// All flashcard content for Urdu Sikho, organized by category.
// Each category has: id, name, emoji, color (accent), and a list of words.
// Each word has: urdu (Urdu script), translit (romanized pronunciation), english (meaning).

const CATEGORIES = [
  {
    id: "greetings",
    name: "Greetings",
    emoji: "👋",
    color: "#FF6B6B",
    words: [
      { urdu: "السلام علیکم", translit: "Assalam-o-Alaikum", english: "Hello (Peace be upon you)" },
      { urdu: "وعلیکم السلام", translit: "Wa-Alaikum-Assalam", english: "Hello, reply (And peace be upon you)" },
      { urdu: "شکریہ", translit: "Shukriya", english: "Thank you" },
      { urdu: "برائے مہربانی", translit: "Baraye Meherbani", english: "Please" },
      { urdu: "خدا حافظ", translit: "Khuda Hafiz", english: "Goodbye" },
      { urdu: "جی ہاں", translit: "Ji Haan", english: "Yes" },
      { urdu: "جی نہیں", translit: "Ji Nahi", english: "No" },
      { urdu: "معاف کیجیے", translit: "Maaf Kijiye", english: "Excuse me / Sorry" },
      { urdu: "کیا حال ہے؟", translit: "Kya Haal Hai?", english: "How are you?" },
      { urdu: "میں ٹھیک ہوں", translit: "Main Theek Hoon", english: "I am fine" },
      { urdu: "صبح بخیر", translit: "Subah Bakhair", english: "Good morning" },
      { urdu: "شب بخیر", translit: "Shab Bakhair", english: "Good night" },
      { urdu: "خوش آمدید", translit: "Khush Aamdeed", english: "Welcome" },
      { urdu: "آپ کا نام کیا ہے؟", translit: "Aap Ka Naam Kya Hai?", english: "What is your name?" },
      { urdu: "میرا نام ہے", translit: "Mera Naam Hai", english: "My name is" }
    ]
  },
  {
    id: "numbers",
    name: "Numbers",
    emoji: "🔢",
    color: "#4ECDC4",
    words: [
      { urdu: "صفر", translit: "Sifar", english: "Zero" },
      { urdu: "ایک", translit: "Aik", english: "One" },
      { urdu: "دو", translit: "Do", english: "Two" },
      { urdu: "تین", translit: "Teen", english: "Three" },
      { urdu: "چار", translit: "Chaar", english: "Four" },
      { urdu: "پانچ", translit: "Paanch", english: "Five" },
      { urdu: "چھ", translit: "Chhe", english: "Six" },
      { urdu: "سات", translit: "Saat", english: "Seven" },
      { urdu: "آٹھ", translit: "Aath", english: "Eight" },
      { urdu: "نو", translit: "Nau", english: "Nine" },
      { urdu: "دس", translit: "Das", english: "Ten" },
      { urdu: "گیارہ", translit: "Gyarah", english: "Eleven" },
      { urdu: "بیس", translit: "Bees", english: "Twenty" },
      { urdu: "سو", translit: "Sau", english: "Hundred" },
      { urdu: "ہزار", translit: "Hazaar", english: "Thousand" }
    ]
  },
  {
    id: "family",
    name: "Family",
    emoji: "👨‍👩‍👧‍👦",
    color: "#FFD93D",
    words: [
      { urdu: "ماں", translit: "Maa", english: "Mother" },
      { urdu: "باپ", translit: "Baap", english: "Father" },
      { urdu: "بھائی", translit: "Bhai", english: "Brother" },
      { urdu: "بہن", translit: "Behn", english: "Sister" },
      { urdu: "بیٹا", translit: "Beta", english: "Son" },
      { urdu: "بیٹی", translit: "Beti", english: "Daughter" },
      { urdu: "دادا", translit: "Dada", english: "Grandfather (father's side)" },
      { urdu: "دادی", translit: "Dadi", english: "Grandmother (father's side)" },
      { urdu: "نانا", translit: "Nana", english: "Grandfather (mother's side)" },
      { urdu: "نانی", translit: "Nani", english: "Grandmother (mother's side)" },
      { urdu: "چچا", translit: "Chacha", english: "Uncle (father's brother)" },
      { urdu: "خالہ", translit: "Khala", english: "Aunt (mother's sister)" },
      { urdu: "شوہر", translit: "Shohar", english: "Husband" },
      { urdu: "بیوی", translit: "Biwi", english: "Wife" },
      { urdu: "دوست", translit: "Dost", english: "Friend" }
    ]
  },
  {
    id: "colors",
    name: "Colors",
    emoji: "🎨",
    color: "#A78BFA",
    words: [
      { urdu: "لال", translit: "Laal", english: "Red" },
      { urdu: "نیلا", translit: "Neela", english: "Blue" },
      { urdu: "پیلا", translit: "Peela", english: "Yellow" },
      { urdu: "سبز", translit: "Sabz", english: "Green" },
      { urdu: "کالا", translit: "Kaala", english: "Black" },
      { urdu: "سفید", translit: "Safaid", english: "White" },
      { urdu: "گلابی", translit: "Gulabi", english: "Pink" },
      { urdu: "نارنجی", translit: "Narangi", english: "Orange" },
      { urdu: "جامنی", translit: "Jamni", english: "Purple" },
      { urdu: "بھورا", translit: "Bhoora", english: "Brown" },
      { urdu: "سنہرا", translit: "Sunehra", english: "Golden" },
      { urdu: "سرمئی", translit: "Sarmayi", english: "Grey" }
    ]
  },
  {
    id: "food",
    name: "Food",
    emoji: "🍲",
    color: "#FF9F45",
    words: [
      { urdu: "پانی", translit: "Paani", english: "Water" },
      { urdu: "روٹی", translit: "Roti", english: "Bread" },
      { urdu: "چاول", translit: "Chawal", english: "Rice" },
      { urdu: "دودھ", translit: "Doodh", english: "Milk" },
      { urdu: "چائے", translit: "Chai", english: "Tea" },
      { urdu: "سبزی", translit: "Sabzi", english: "Vegetable" },
      { urdu: "گوشت", translit: "Gosht", english: "Meat" },
      { urdu: "مچھلی", translit: "Machli", english: "Fish" },
      { urdu: "انڈا", translit: "Anda", english: "Egg" },
      { urdu: "پھل", translit: "Phal", english: "Fruit" },
      { urdu: "چینی", translit: "Cheeni", english: "Sugar" },
      { urdu: "نمک", translit: "Namak", english: "Salt" },
      { urdu: "سیب", translit: "Seb", english: "Apple" },
      { urdu: "کیلا", translit: "Kela", english: "Banana" },
      { urdu: "مٹھائی", translit: "Mithai", english: "Sweets" }
    ]
  },
  {
    id: "phrases",
    name: "Common Phrases",
    emoji: "💬",
    color: "#6BCB77",
    words: [
      { urdu: "مجھے سمجھ نہیں آیا", translit: "Mujhe Samajh Nahi Aya", english: "I don't understand" },
      { urdu: "آہستہ بولیں", translit: "Aahista Bolein", english: "Speak slowly" },
      { urdu: "دوبارہ کہیں", translit: "Dobara Kahein", english: "Say it again" },
      { urdu: "یہ کیا ہے؟", translit: "Yeh Kya Hai?", english: "What is this?" },
      { urdu: "کتنے کا ہے؟", translit: "Kitne Ka Hai?", english: "How much is it?" },
      { urdu: "مجھے مدد چاہیے", translit: "Mujhe Madad Chahiye", english: "I need help" },
      { urdu: "کوئی بات نہیں", translit: "Koi Baat Nahi", english: "No problem" },
      { urdu: "بہت اچھا", translit: "Bohat Acha", english: "Very good" },
      { urdu: "مجھے بھوک لگی ہے", translit: "Mujhe Bhookh Lagi Hai", english: "I am hungry" },
      { urdu: "مجھے پیاس لگی ہے", translit: "Mujhe Pyaas Lagi Hai", english: "I am thirsty" },
      { urdu: "یہ کہاں ہے؟", translit: "Yeh Kahan Hai?", english: "Where is it?" },
      { urdu: "وقت کیا ہوا ہے؟", translit: "Waqt Kya Hua Hai?", english: "What time is it?" },
      { urdu: "میں ٹھیک ہوں", translit: "Main Theek Hoon", english: "I am okay" },
      { urdu: "یہ لے لو", translit: "Yeh Le Lo", english: "Take this" },
      { urdu: "چلو چلیں", translit: "Chalo Chalein", english: "Let's go" }
    ]
  }
];
