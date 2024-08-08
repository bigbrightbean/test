// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
    id: 1,
    korean_question: "그 산은 ________ 보였어요.",
    roman_question: "Geu san-eun ________ boyeosseoyo.",
    english_question: "The mountain looked ________.",
    chinese_question: "那座山看起来很________。",
    answers: [
        { option: "A", korean_answer: "아득하게", roman_answer: "adeukhage", english_answer: "distant", chinese_answer: "遥远的", chinese_romanization: "yáoyuǎn de" },
        { option: "B", korean_answer: "아깝게", roman_answer: "akkapge", english_answer: "wasteful", chinese_answer: "浪费的", chinese_romanization: "làngfèi de" },
        { option: "C", korean_answer: "안타깝게", roman_answer: "antakkapge", english_answer: "regretful", chinese_answer: "遗憾的", chinese_romanization: "yíhàn de" },
        { option: "D", korean_answer: "알맞게", roman_answer: "almajege", english_answer: "appropriate", chinese_answer: "合适的", chinese_romanization: "héshì de" }
    ],
    correctAnswer: "A",
    english_explanation: "(A) '아득하게' (adeukhage) means distant and refers to something that is far away in both a physical and metaphorical sense, often evoking a sense of vastness or remoteness." +
        "<br><br>" +
        "(B) '아깝게' (akkapge) means wasteful and describes a situation where something valuable is not used properly or is wasted." +
        "<br><br>" +
        "(C) '안타깝게' (antakkapge) means regretful and expresses a feeling of sorrow or pity for someone's unfortunate situation." +
        "<br><br>" +
        "(D) '알맞게' (almajege) means appropriate and indicates that something is suitable or proper for a particular situation.",
    chinese_explanation: "(A) '遥远的' (adeukhage) 意思是指在物理或隐喻上都很远的东西，常常唤起广阔或遥远的感觉。" +
        "<br><br>" +
        "(B) '浪费的' (akkapge) 意思是描述某些有价值的东西没有得到适当的使用或被浪费。" +
        "<br><br>" +
        "(C) '遗憾的' (antakkapge) 意思是表达对某人不幸情况的感到悲伤或遗憾。" +
        "<br><br>" +
        "(D) '合适的' (almajege) 意思是指某物在某种情况下是合适或恰当的。"
    },
    {
    id: 2,
    korean_question: "그의 설명은 ________ 이해하기 어려웠어요.",
    roman_question: "Geu-ui seolmyeong-eun ________ ihaehagi eoryeowosseoyo.",
    english_question: "His explanation was ________, so it was difficult to understand.",
    chinese_question: "他的解释很________，所以难以理解。",
    answers: [
        { option: "A", korean_answer: "안타까워서", roman_answer: "antakkawoseo", english_answer: "regretful", chinese_answer: "遗憾的", chinese_romanization: "yíhàn de" },
        { option: "B", korean_answer: "애매해서", roman_answer: "aemaehaseo", english_answer: "ambiguous", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
        { option: "C", korean_answer: "아득해서", roman_answer: "adeukhaseo", english_answer: "distant", chinese_answer: "遥远的", chinese_romanization: "yáoyuǎn de" },
        { option: "D", korean_answer: "아까워서", roman_answer: "akkawoseo", english_answer: "wasteful", chinese_answer: "浪费的", chinese_romanization: "làngfèi de" }
    ],
    correctAnswer: "B",
    english_explanation: "(B) '애매해서' (aemaehaseo) means ambiguous and describes something that is unclear or open to more than one interpretation." +
        "<br><br>" +
        "(A) '안타까워서' (antakkawoseo) means regretful and expresses a feeling of sorrow or pity for someone's unfortunate situation." +
        "<br><br>" +
        "(C) '아득해서' (adeukhaseo) means distant and refers to something that is far away in both a physical and metaphorical sense, often evoking a sense of vastness or remoteness." +
        "<br><br>" +
        "(D) '아까워서' (akkawoseo) means wasteful and describes a situation where something valuable is not used properly or is wasted.",
    chinese_explanation: "(B) '模糊的' (aemaehaseo) 意思是指某些东西不清楚或可以有多种解释。" +
        "<br><br>" +
        "(A) '遗憾的' (antakkawoseo) 意思是表达对某人不幸情况的感到悲伤或遗憾。" +
        "<br><br>" +
        "(C) '遥远的' (adeukhaseo) 意思是指在物理或隐喻上都很远的东西，常常唤起广阔或遥远的感觉。" +
        "<br><br>" +
        "(D) '浪费的' (akkawoseo) 意思是描述某些有价值的东西没有得到适当的使用或被浪费。"
    },
    {
    id: 3,
    korean_question: "이 기회를 놓치면 너무 ________.",
    roman_question: "I gihoe-reul nochimyeon neomu ________.",
    english_question: "If you miss this opportunity, it’s really ________.",
    chinese_question: "如果你错过这个机会，真的很________。",
    answers: [
        { option: "A", korean_answer: "애매해요", roman_answer: "aemaehaeyo", english_answer: "ambiguous", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
        { option: "B", korean_answer: "아파요", roman_answer: "apayo", english_answer: "painful", chinese_answer: "痛苦的", chinese_romanization: "tòngkǔ de" },
        { option: "C", korean_answer: "아까워요", roman_answer: "akkawoyo", english_answer: "wasteful", chinese_answer: "浪费的", chinese_romanization: "làngfèi de" },
        { option: "D", korean_answer: "안전해요", roman_answer: "anjeonhaeyo", english_answer: "safe", chinese_answer: "安全的", chinese_romanization: "ānquán de" }
    ],
    correctAnswer: "C",
    english_explanation: "(C) '아까워요' (akkawoyo) means wasteful and describes a situation where something valuable is not used properly or is wasted." +
        "<br><br>" +
        "(A) '애매해요' (aemaehaeyo) means ambiguous and describes something that is unclear or open to more than one interpretation." +
        "<br><br>" +
        "(B) '아파요' (apayo) means painful and refers to experiencing physical or emotional pain." +
        "<br><br>" +
        "(D) '안전해요' (anjeonhaeyo) means safe and indicates being free from danger or risk.",
    chinese_explanation: "(C) '浪费的' (akkawoyo) 意思是描述某些有价值的东西没有得到适当的使用或被浪费。" +
        "<br><br>" +
        "(A) '模糊的' (aemaehaeyo) 意思是指某些东西不清楚或可以有多种解释。" +
        "<br><br>" +
        "(B) '痛苦的' (apayo) 意思是指经历身体或情感上的疼痛。" +
        "<br><br>" +
        "(D) '安全的' (anjeonhaeyo) 意思是指没有危险或风险的状态。"
},
{
    id: 4,
    korean_question: "이 옷이 당신에게 ________.",
    roman_question: "I ot-i dangsin-ege ________.",
    english_question: "This clothing is ________ for you.",
    chinese_question: "这件衣服很________你。",
    answers: [
        { option: "A", korean_answer: "아파요", roman_answer: "apayo", english_answer: "painful", chinese_answer: "痛苦的", chinese_romanization: "tòngkǔ de" },
        { option: "B", korean_answer: "애매해요", roman_answer: "aemaehaeyo", english_answer: "ambiguous", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
        { option: "C", korean_answer: "알맞아요", roman_answer: "almatjayo", english_answer: "appropriate", chinese_answer: "合适的", chinese_romanization: "héshì de" },
        { option: "D", korean_answer: "안전해요", roman_answer: "anjeonhaeyo", english_answer: "safe", chinese_answer: "安全的", chinese_romanization: "ānquán de" }
    ],
    correctAnswer: "C",
    english_explanation: "(C) '알맞아요' (almatjayo) means appropriate and indicates that something is suitable or proper for a particular situation." +
        "<br><br>" +
        "(A) '아파요' (apayo) means painful and refers to experiencing physical or emotional pain." +
        "<br><br>" +
        "(B) '애매해요' (aemaehaeyo) means ambiguous and describes something that is unclear or open to more than one interpretation." +
        "<br><br>" +
        "(D) '안전해요' (anjeonhaeyo) means safe and indicates being free from danger or risk.",
    chinese_explanation: "(C) '合适的' (almatjayo) 意思是指某物在某种情况下是合适或恰当的。" +
        "<br><br>" +
        "(A) '痛苦的' (apayo) 意思是指经历身体或情感上的疼痛。" +
        "<br><br>" +
        "(B) '模糊的' (aemaehaeyo) 意思是指某些东西不清楚或可以有多种解释。" +
        "<br><br>" +
        "(D) '安全的' (anjeonhaeyo) 意思是指没有危险或风险的状态。"
    },
    {
    id: 5,
    korean_question: "그는 ________ 않은 듯 행동했어요.",
    roman_question: "Geuneun ________ aneun deut haengdonghaesseoyo.",
    english_question: "He acted as if nothing was ________.",
    chinese_question: "他表现得好像什么都不是________。",
    answers: [
        { option: "A", korean_answer: "알맞지도", roman_answer: "almajjido", english_answer: "appropriate", chinese_answer: "合适的", chinese_romanization: "héshì de" },
        { option: "B", korean_answer: "아무렇지도", roman_answer: "amureochido", english_answer: "wrong", chinese_answer: "错误的", chinese_romanization: "cuòwù de" },
        { option: "C", korean_answer: "아프지도", roman_answer: "apeujido", english_answer: "painful", chinese_answer: "痛苦的", chinese_romanization: "tòngkǔ de" },
        { option: "D", korean_answer: "애매하지도", roman_answer: "aemaehajido", english_answer: "ambiguous", chinese_answer: "模糊的", chinese_romanization: "móhú de" }
    ],
    correctAnswer: "B",
    english_explanation: "(B) '아무렇지도' (amureochido) means wrong and indicates that nothing seems out of the ordinary or incorrect." +
        "<br><br>" +
        "(A) '알맞지도' (almajjido) means appropriate and indicates that something is suitable or proper for a particular situation." +
        "<br><br>" +
        "(C) '아프지도' (apeujido) means painful and refers to experiencing physical or emotional pain." +
        "<br><br>" +
        "(D) '애매하지도' (aemaehajido) means ambiguous and describes something that is unclear or open to more than one interpretation.",
    chinese_explanation: "(B) '错误的' (amureochido) 意思是错误的，表示没有什么显得不对劲或不正常。" +
        "<br><br>" +
        "(A) '合适的' (almajjido) 意思是指某物在某种情况下是合适或恰当的。" +
        "<br><br>" +
        "(C) '痛苦的' (apeujido) 意思是指经历身体或情感上的疼痛。" +
        "<br><br>" +
        "(D) '模糊的' (aemaehajido) 意思是指某些东西不清楚或可以有多种解释。"
},
{
    id: 6,
    korean_question: "일이 잘 ________ 조금 쉬자.",
    roman_question: "Ili jal ________ jogeum swija.",
    english_question: "Things are not ________, so let’s take a break.",
    chinese_question: "事情不________，所以我们休息一下。",
    answers: [
        { option: "A", korean_answer: "애매하니까", roman_answer: "aemaehanikka", english_answer: "ambiguous", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
        { option: "B", korean_answer: "아프니까", roman_answer: "apeunikka", english_answer: "painful", chinese_answer: "痛苦的", chinese_romanization: "tòngkǔ de" },
        { option: "C", korean_answer: "안되니까", roman_answer: "andwenikka", english_answer: "not working", chinese_answer: "不行的", chinese_romanization: "bùxíng de" },
        { option: "D", korean_answer: "안전하니까", roman_answer: "anjeonhanikka", english_answer: "safe", chinese_answer: "安全的", chinese_romanization: "ānquán de" }
    ],
    correctAnswer: "C",
    english_explanation: "(C) '안되니까' (andwenikka) means not working and describes a situation where something is not going as planned or failing." +
        "<br><br>" +
        "(A) '애매하니까' (aemaehanikka) means ambiguous and describes something that is unclear or open to more than one interpretation." +
        "<br><br>" +
        "(B) '아프니까' (apeunikka) means painful and refers to experiencing physical or emotional pain." +
        "<br><br>" +
        "(D) '안전하니까' (anjeonhanikka) means safe and indicates being free from danger or risk.",
    chinese_explanation: "(C) '不行的' (andwenikka) 意思是不行的，描述某事不如计划进行或失败的情况。" +
        "<br><br>" +
        "(A) '模糊的' (aemaehanikka) 意思是指某些东西不清楚或可以有多种解释。" +
        "<br><br>" +
        "(B) '痛苦的' (apeunikka) 意思是指经历身体或情感上的疼痛。" +
        "<br><br>" +
        "(D) '安全的' (anjeonhanikka) 意思是指没有危险或风险的状态。"
},
{
    id: 7,
    korean_question: "그건 정말 사실이 ________. 잘못 들었을 거야.",
    roman_question: "Geugeon jeongmal sasil-i ________. jalmot deureosseul geoya.",
    english_question: "That’s really not ________. You must have heard it wrong.",
    chinese_question: "那真的不________。你一定听错了。",
    answers: [
        { option: "A", korean_answer: "아파요", roman_answer: "apayo", english_answer: "painful", chinese_answer: "痛苦的", chinese_romanization: "tòngkǔ de" },
        { option: "B", korean_answer: "아니에요", roman_answer: "aniyeyo", english_answer: "not", chinese_answer: "不是", chinese_romanization: "bùshì" },
        { option: "C", korean_answer: "애매해요", roman_answer: "aemaehaeyo", english_answer: "ambiguous", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
        { option: "D", korean_answer: "안전해요", roman_answer: "anjeonhaeyo", english_answer: "safe", chinese_answer: "安全的", chinese_romanization: "ānquán de" }
    ],
    correctAnswer: "B",
    english_explanation: "(B) '아니에요' (aniyeyo) means not and is used to indicate that something is incorrect or false." +
        "<br><br>" +
        "(A) '아파요' (apayo) means painful and refers to experiencing physical or emotional pain." +
        "<br><br>" +
        "(C) '애매해요' (aemaehaeyo) means ambiguous and describes something that is unclear or open to more than one interpretation." +
        "<br><br>" +
        "(D) '안전해요' (anjeonhaeyo) means safe and indicates being free from danger or risk.",
    chinese_explanation: "(B) '不是' (aniyeyo) 意思是不对的，用来表示某事不正确或虚假。" +
        "<br><br>" +
        "(A) '痛苦的' (apayo) 意思是痛苦的，指经历身体或情感上的疼痛。" +
        "<br><br>" +
        "(C) '模糊的' (aemaehaeyo) 意思是含糊不清，指某些东西不清楚或可以有多种解释。" +
        "<br><br>" +
        "(D) '安全的' (anjeonhaeyo) 意思是安全的，表示没有危险或风险的状态。"
},
{
    id: 8,
    korean_question: "이곳은 정말 ________. 아이들이 놀기에도 좋습니다.",
    roman_question: "Igoseun jeongmal ________. Aideul-i nolgi-e-do jo-seumnida.",
    english_question: "This place is really ________, you see. It's also great for kids to play.",
    chinese_question: "这个地方真的很________，你知道的。这里也非常适合孩子们玩。",
    answers: [
        { option: "A", korean_answer: "아프거든요", roman_answer: "apeugeodeunyo", english_answer: "painful", chinese_answer: "痛苦的", chinese_romanization: "tòngkǔ de" },
        { option: "B", korean_answer: "애매거든요", roman_answer: "aemaegeodeunyo", english_answer: "ambiguous", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
        { option: "C", korean_answer: "알맞거든요", roman_answer: "almajeogeodeunyo", english_answer: "appropriate", chinese_answer: "合适的", chinese_romanization: "héshì de" },
        { option: "D", korean_answer: "안전하거든요", roman_answer: "anjeonhageodeunyo", english_answer: "safe", chinese_answer: "安全的", chinese_romanization: "ānquán de" }
    ],
    correctAnswer: "D",
    english_explanation: "(D) '안전하거든요' (anjeonhageodeunyo) means safe and indicates being free from danger or risk." +
        "<br><br>" +
        "(A) '아프거든요' (apeugeodeunyo) means painful and refers to experiencing physical or emotional pain." +
        "<br><br>" +
        "(B) '애매거든요' (aemaegeodeunyo) means ambiguous and describes something that is unclear or open to more than one interpretation." +
        "<br><br>" +
        "(C) '알맞거든요' (almajeogeodeunyo) means appropriate and indicates that something is suitable or proper for a particular situation.",
    chinese_explanation: "(D) '安全的' (anjeonhageodeunyo) 意思是安全的，表示没有危险或风险的状态。" +
        "<br><br>" +
        "(A) '痛苦的' (apeugeodeunyo) 意思是痛苦的，指经历身体或情感上的疼痛。" +
        "<br><br>" +
        "(B) '模糊的' (aemaegeodeunyo) 意思是含糊不清，指某些东西不清楚或可以有多种解释。" +
        "<br><br>" +
        "(C) '合适的' (almajeogeodeunyo) 意思是合适的，指某物在某种情况下是合适或恰当的。"
    },
    {
    id: 9,
    korean_question: "그녀는 많이 ________ 보여요. 병원에 가야 할 것 같아요.",
    roman_question: "Geunyeoneun mani ________ boyeoyo. Byeong-won-e gaya hal geot gatayo.",
    english_question: "She looks very ________. I think she needs to go to the hospital.",
    chinese_question: "她看起来很________。我觉得她需要去医院。",
    answers: [
        { option: "A", korean_answer: "아깝아", roman_answer: "akkapa", english_answer: "wasteful", chinese_answer: "浪费的", chinese_romanization: "làngfèi de" },
        { option: "B", korean_answer: "애매해", roman_answer: "aemaehae", english_answer: "ambiguous", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
        { option: "C", korean_answer: "안전해", roman_answer: "anjeonhae", english_answer: "safe", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
        { option: "D", korean_answer: "아파", roman_answer: "apa", english_answer: "painful", chinese_answer: "痛苦的", chinese_romanization: "tòngkǔ de" }
    ],
    correctAnswer: "D",
    english_explanation: "(D) '아파' (apa) means painful and refers to experiencing physical or emotional pain." +
        "<br><br>" +
        "(A) '아깝아' (akkapa) means wasteful and describes a situation where something valuable is not used properly or is wasted." +
        "<br><br>" +
        "(B) '애매해' (aemaehae) means ambiguous and describes something that is unclear or open to more than one interpretation." +
        "<br><br>" +
        "(C) '안전해' (anjeonhae) means safe and indicates being free from danger or risk.",
    chinese_explanation: "(D) '痛苦的' (apa) 意思是痛苦的，指经历身体或情感上的疼痛。" +
        "<br><br>" +
        "(A) '浪费的' (akkapa) 意思是浪费的，描述某些有价值的东西没有得到适当的使用或被浪费。" +
        "<br><br>" +
        "(B) '模糊的' (aemaehae) 意思是含糊不清的，指某些东西不清楚或可以有多种解释。" +
        "<br><br>" +
        "(C) '安全的' (anjeonhae) 意思是安全的，表示没有危险或风险的状态。"
},
{
    id: 10,
    korean_question: "그의 사연은 정말 ________. 마음이 너무 아프네요.",
    roman_question: "Geu-ui sayeon-eun jeongmal ________. maeum-i neomu apeuneyo.",
    english_question: "His story is really ________. It’s so heartbreaking to hear.",
    chinese_question: "他的故事真的很________。听到真让人心痛。",
    answers: [
        { option: "A", korean_answer: "안타깝네요", roman_answer: "antakkapneyo", english_answer: "regretful", chinese_answer: "遗憾的", chinese_romanization: "yíhàn de" },
        { option: "B", korean_answer: "아프네요", roman_answer: "apeuneyo", english_answer: "painful", chinese_answer: "痛苦的", chinese_romanization: "tòngkǔ de" },
        { option: "C", korean_answer: "알맞네요", roman_answer: "almajnayo", english_answer: "appropriate", chinese_answer: "合适的", chinese_romanization: "héshì de" },
        { option: "D", korean_answer: "아깝네요", roman_answer: "akkapneyo", english_answer: "wasteful", chinese_answer: "浪费的", chinese_romanization: "làngfèi de" }
    ],
    correctAnswer: "A",
    english_explanation: "(A) '안타깝네요' (antakkapneyo) means regretful and expresses a feeling of sorrow or pity for someone's unfortunate situation." +
        "<br><br>" +
        "(B) '아프네요' (apeuneyo) means painful and refers to experiencing physical or emotional pain." +
        "<br><br>" +
        "(C) '알맞네요' (almajnayo) means appropriate and indicates that something is suitable or proper for a particular situation." +
        "<br><br>" +
        "(D) '아깝네요' (akkapneyo) means wasteful and describes a situation where something valuable is not used properly or is wasted.",
    chinese_explanation: "(A) '遗憾的' (antakkapneyo) 意思是感到抱歉的，表达对某人不幸情况的感到悲伤或遗憾。" +
        "<br><br>" +
        "(B) '痛苦的' (apeuneyo) 意思是痛苦的，指经历身体或情感上的疼痛。" +
        "<br><br>" +
        "(C) '合适的' (almajnayo) 意思是合适的，指某物在某种情况下是合适或恰当的。" +
        "<br><br>" +
        "(D) '浪费的' (akkapneyo) 意思是浪费的，描述某些有价值的东西没有得到适当的使用或被浪费。"
    }
];


// Function to restart the quiz
function restartQuiz() {
    // Reload the page to restart the quiz
    location.reload();
}

// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Variable to keep track of the total score
var totalScore = 0;

// Array to store the selected answers for each question
var selectedAnswers = new Array(questions.length).fill(null);

// Variable to track the state of the English translations checkbox
var englishTranslationsChecked = false;

// Variable to track the state of the Chinese translations checkbox
var chineseTranslationsChecked = false;

// Variable to track the state of the Roman translations checkbox
var romanTranslationsChecked = false;

function toggleEnglishTranslations() {
    var toggleEnglishCheckbox = document.getElementById('toggleEnglish');
    englishTranslationsChecked = !englishTranslationsChecked; // Toggle checkbox state
    displayQuestion(chineseTranslationsChecked, englishTranslationsChecked, romanTranslationsChecked);
}

function toggleChineseTranslations() {
    var toggleChineseCheckbox = document.getElementById('toggleChinese');
    chineseTranslationsChecked = !chineseTranslationsChecked; // Toggle checkbox state
    displayQuestion(chineseTranslationsChecked, englishTranslationsChecked, romanTranslationsChecked);
}

function toggleRomanTranslations() {
    var toggleRomanCheckbox = document.getElementById('toggleRoman');
    romanTranslationsChecked = !romanTranslationsChecked; // Toggle checkbox state
    displayQuestion(chineseTranslationsChecked, englishTranslationsChecked, romanTranslationsChecked);
}

// Function to toggle question shuffling
function toggleQuestionShuffle() {
    var shuffleCheckbox = document.getElementById('shuffleQuestions');
    var shuffleEnabled = shuffleCheckbox.checked;

    // Check if the current question has been answered
    var currentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== null;

    // If the current question has been answered and shuffling is enabled
    if (currentQuestionAnswered && shuffleEnabled) {
        // Move to the next question automatically
        nextQuestion();
    }

    // Call the shuffleQuestions() function to update the questions based on the checkbox state
    shuffleQuestions(shuffleEnabled);
}

// Function to shuffle the remaining unanswered questions
function shuffleQuestions(shuffleEnabled) {
    // Clear the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = null;

    // Copy the questions array
    var remainingQuestions = questions.slice(currentQuestionIndex);

    // Sort the remaining questions based on their IDs
    remainingQuestions.sort((a, b) => a.id - b.id);

    // If shuffling is enabled, shuffle the remaining questions
    if (shuffleEnabled) {
        // Shuffle the remaining questions array using Fisher-Yates algorithm
        for (var i = remainingQuestions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = remainingQuestions[i];
            remainingQuestions[i] = remainingQuestions[j];
            remainingQuestions[j] = temp;
        }
    }

    // Update the questions array with the shuffled remaining questions
    questions.splice(currentQuestionIndex, remainingQuestions.length, ...remainingQuestions);

    // Clear the selected MCQ option buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('option-selected', 'correct', 'wrong');
    });

    // Display the current question after shuffling
    displayQuestion(chineseTranslationsChecked, englishTranslationsChecked, romanTranslationsChecked);

    // Update the progress bar
    updateProgressBar();
}

// Function to display the current question
function displayQuestion(chineseTranslationsChecked = false, englishTranslationsChecked = false, romanTranslationsChecked = false) {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];
    
    // Extract question texts and options
    var questionText = currentQuestion.korean_question;
    var questionTextRoman = currentQuestion.roman_question;
    var questionTextEN = currentQuestion.english_question;
    var questionTextCN = currentQuestion.chinese_question;
    var options = currentQuestion.answers;

    // Display the question text in Korean
    document.getElementById('korean_question').innerHTML = questionText;

    // Display the question text in Romanization if the checkbox is checked or if Roman translations were manually toggled on
    if (document.getElementById('toggleRoman').checked || romanTranslationsChecked) {
        document.getElementById('roman_question').innerHTML = questionTextRoman;
    } else {
        document.getElementById('roman_question').innerHTML = ""; // Clear Roman question
    }

    // Display the question text in English if the checkbox is checked or if English translations were manually toggled on
    if (document.getElementById('toggleEnglish').checked || englishTranslationsChecked) {
        document.getElementById('english_question').innerHTML = questionTextEN;
    } else {
        document.getElementById('english_question').innerHTML = ""; // Clear English question
    }

    // Display the question text in Chinese if the checkbox is checked or if Chinese translations were manually toggled on
    if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
        document.getElementById('question_cn').innerHTML = questionTextCN;
    } else {
        document.getElementById('question_cn').innerHTML = ""; // Clear Chinese question
    }


    // Display the options as buttons with selected state
    var optionsHTML = "";
    for (var i = 0; i < options.length; i++) {
        var isSelected = selectedAnswers[currentQuestionIndex] === options[i].option;
        var optionClass = "option-btn";
        if (isSelected) {
            optionClass += ' option-selected'; // Add option-selected class if option is selected
            // Add correct or wrong class based on the correctness of the option
            if (options[i].option === currentQuestion.correctAnswer) {
                optionClass += ' correct';
            } else {
                optionClass += ' wrong';
            }
        }
        optionsHTML += '<button class="' + optionClass + '" onclick="selectAnswer(' + i + ')" value="' + options[i].option + '">' + options[i].option + '. ' + options[i].korean_answer;

        // Append Roman translation if the checkbox is checked or if Roman translations were manually toggled on
        if (document.getElementById('toggleRoman').checked || romanTranslationsChecked) {
            optionsHTML += ' (' + options[i].roman_answer + ')';
        }

        // Append English translation if the checkbox is checked or if English translations were manually toggled on
        if (document.getElementById('toggleEnglish').checked || englishTranslationsChecked) {
            optionsHTML += ' (' + options[i].english_answer + ')';
        }

        // Append Chinese translation if the checkbox is checked or if Chinese translations were manually toggled on
        if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
            optionsHTML += ' (' + options[i].chinese_answer + ' ' + options[i].chinese_romanization + ')';
        }

        optionsHTML += '</button><br>';
    }
    document.getElementById('options').innerHTML = optionsHTML;

    // Update the progress bar
    updateProgressBar();
}

// Function to handle the answer selection
function selectAnswer(optionIndex) {
    // Update the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[optionIndex].option;

    // Disable all option buttons to prevent further selection
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Check if the selected answer is correct
    var isCorrect = selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;

    // Display the result
    checkAnswer(selectedAnswers[currentQuestionIndex], isCorrect);
}

// Function to check the answer and display the result
function checkAnswer(selectedOption, isCorrect) {
    // Extract correct answer and explanation
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var correctAnswerKO = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).korean_answer;
    var correctAnswerRoman = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).roman_answer; // Add this line to extract the roman answer
    var correctAnswerEN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).english_answer;
    var correctAnswerCN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer;
    var correctAnswerRomanization = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_romanization; // Add this line to extract the chinese romanization
    var englishExplanation = questions[currentQuestionIndex].english_explanation;
    var chineseExplanation = questions[currentQuestionIndex].chinese_explanation;

    // Display result and score
    var resultHTML = "";
    if (isCorrect) {
        // Increase the total score
        totalScore++;

        // Play correct sound
        var audio = new Audio('correct.mp3');
        audio.play();

        // Display correct message and explanation
        resultHTML += "<span class='correct-explanation'>Correct</span><br>"; // Added class for correct explanation
    } else {
        // Play incorrect sound
        var audio = new Audio('incorrect.mp3');
        audio.play();

        // Display incorrect message and correct answer
        resultHTML += "<span class='wrong-explanation'>Incorrect</span><br>"; // Added class for wrong explanation
    }

    resultHTML += "The correct answer is: " + correctAnswer + ": " + correctAnswerKO + " (" + correctAnswerRoman + "), " + correctAnswerEN + ", " + correctAnswerCN + " (" + correctAnswerRomanization + ")<br><br>"; // Modify this line to include the romanization
    resultHTML += "Explanation (English):<br>" + englishExplanation + "<br><br>";
    resultHTML += "Explanation (Chinese):<br>" + chineseExplanation + "<br><br>";

    // Display total score
    resultHTML += "Total Score: " + totalScore + "/" + questions.length;
    document.getElementById('result').innerHTML = resultHTML;

    // Apply correct or incorrect styling to the selected MCQ option button
    var selectedOptionButton = document.querySelector('.option-btn[value="' + selectedOption + '"]');
    if (isCorrect) {
        selectedOptionButton.classList.add('correct');
    } else {
        selectedOptionButton.classList.add('wrong');
    }
}

// Function to update the progress bar
function updateProgressBar() {
    // Calculate the progress percentage
    var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}

// Function to move to the previous question
function previousQuestion() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Ensure the index does not go below 0
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    // Check the state of the checkboxes for translations
    var showChineseTranslations = document.getElementById('toggleChinese').checked;
    var showEnglishTranslations = document.getElementById('toggleEnglish').checked;
    var showRomanTranslations = document.getElementById('toggleRoman').checked;

    // Display the previous question with the appropriate translations
    displayQuestion(showChineseTranslations, showEnglishTranslations, showRomanTranslations);

    // Disable all MCQ buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Enable the previously selected MCQ button
    var previousSelectedAnswer = selectedAnswers[currentQuestionIndex];
    buttons.forEach(function(btn) {
        if (btn.value === previousSelectedAnswer) {
            btn.disabled = false;
            // Check if the previously selected answer is correct or wrong and apply the appropriate class
            if (previousSelectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });

    // Show the selected answer and its correctness for the previous question
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Display the explanation for the previous question
    var explanationHTML = "";
    if (previousSelectedAnswer) {
        var answerColorClass = previousSelectedAnswer === correctAnswer ? 'correct' : 'wrong';
        explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (previousSelectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
    }
    explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).korean_answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).roman_answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).english_answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
    explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].english_explanation + "<br><br>";
    explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
    document.getElementById('result').innerHTML = explanationHTML;
}

// Function to end the quiz and display the total score in a popup box
function endQuiz() {
    // Display a popup box with the quiz ended message and total score
    alert("Congratulations! You've reached the end.\n\nYour Total Score: " + totalScore + "/" + questions.length);
}

// Function to move to the next question
function nextQuestion() {
    // Ensure the "Turn on Chinese translations," "Turn on English translations," and "Turn on Roman translations" checkboxes remain unchecked
    chineseTranslationsChecked = false;
    englishTranslationsChecked = false;
    romanTranslationsChecked = false;

    // Check if the player has selected an answer for the current question
    if (selectedAnswers[currentQuestionIndex] === null) {
        // If no answer is selected, display an error message in a popup box
        alert("Please select an answer for Question " + (currentQuestionIndex + 1) + " before moving to the next question.");
        return; // Exit the function to prevent moving to the next question
    }

    // Increase the current question index
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // If all questions have been answered, end the quiz
        endQuiz();
        // Reset the current question index to prevent accessing out of bounds
        currentQuestionIndex = questions.length - 1;
    } else {
        // Display the next question with the appropriate translations
        displayQuestion(chineseTranslationsChecked, englishTranslationsChecked, romanTranslationsChecked);

        // Show the selected answer and its correctness for the next question
        var selectedAnswer = selectedAnswers[currentQuestionIndex];
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;

        // Find the button corresponding to the selected answer
        var buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(function(btn) {
            if (btn.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Display the explanation for the next question
        var explanationHTML = "";
        if (selectedAnswer) {
            var answerColorClass = selectedAnswer === correctAnswer ? 'correct' : 'wrong';
            explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (selectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
            explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).korean_answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).roman_answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).english_answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
            explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].english_explanation + "<br><br>";
            explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
        }
        document.getElementById('result').innerHTML = explanationHTML;
    }
}


function startOver() {
    // Reset the current question index to the first question
    currentQuestionIndex = 0;

    // Reset the total score and selected answers
    totalScore = 0;
    selectedAnswers.fill(null);

    // Uncheck the checkboxes for translations
    document.getElementById('toggleChinese').checked = false;
    document.getElementById('toggleEnglish').checked = false;
    document.getElementById('toggleRoman').checked = false;

    // Uncheck the checkbox for shuffling questions
    document.getElementById('shuffleQuestions').checked = false;

    // Reset the order of questions to the default state
    // Sort the questions array based on the 'id' property to revert to the original order
    questions.sort((a, b) => a.id - b.id);

    // Display the first question
    // Display only Korean translations by passing 'false' to the displayQuestion function
    displayQuestion(false, false, false);

    // Clear the result section
    document.getElementById('result').innerHTML = "";

    // Reset font size to default
    increaseFontSize = true; // Set the flag to true for increasing font size
    adjustFontSize(); // Adjust font size of all elements
    adjustChineseFontSize(); // Adjust font size of Chinese elements and explanations
    adjustEnglishFontSize(); // Adjust font size of English elements and explanations
    adjustRomanFontSize(); // Adjust font size of Roman elements and explanations
}

// Function to adjust font size of all elements
function adjustFontSize() {
    var container = document.querySelector('.container');
    var elements = container.querySelectorAll('*');
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Scale factor for increasing or decreasing font size

    elements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Roman elements and explanations
function adjustRomanFontSize() {
    var container = document.querySelector('.container');
    var romanElements = container.querySelectorAll('[lang="roman"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...romanElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of English elements and explanations
function adjustEnglishFontSize() {
    var container = document.querySelector('.container');
    var englishElements = container.querySelectorAll('[lang="en"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...englishElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads without toggling the translations by default
window.onload = function() {
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
    adjustRomanFontSize(); // Initialize Roman font size
    adjustEnglishFontSize(); // Initialize English font size
    displayQuestion(false, false, false); // Ensure no translations are shown by default
};

// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
    adjustRomanFontSize();
    adjustEnglishFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
    adjustRomanFontSize();
    adjustEnglishFontSize();
});

// English translation checkbox event listener
document.getElementById('toggleEnglish').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
    adjustRomanFontSize();
    adjustEnglishFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
    adjustRomanFontSize();
    adjustEnglishFontSize();
});

// Roman translation checkbox event listener
document.getElementById('toggleRoman').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
    adjustRomanFontSize();
    adjustEnglishFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
    adjustRomanFontSize();
    adjustEnglishFontSize();
});

function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}

// Function to adjust font size of English elements and explanations
function adjustEnglishFontSize() {
    var container = document.querySelector('.container');
    var englishElements = container.querySelectorAll('[lang="en"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...englishElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads with both Korean, English, Chinese, and Roman translations by default
window.onload = function() {
    toggleEnglishTranslations();
    toggleChineseTranslations();
    toggleRomanTranslations();
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
    adjustRomanFontSize(); // Initialize Roman font size
    adjustEnglishFontSize(); // Initialize English font size
};

// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
    adjustRomanFontSize();
    adjustEnglishFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
    adjustRomanFontSize();
    adjustEnglishFontSize();
});

// English translation checkbox event listener
document.getElementById('toggleEnglish').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
    adjustRomanFontSize();
    adjustEnglishFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
    adjustRomanFontSize();
    adjustEnglishFontSize();
});

// Roman translation checkbox event listener
document.getElementById('toggleRoman').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
    adjustRomanFontSize();
    adjustEnglishFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
    adjustRomanFontSize();
    adjustEnglishFontSize();
});

function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}

// Function to adjust font size of Roman elements and explanations
function adjustRomanFontSize() {
    var container = document.querySelector('.container');
    var romanElements = container.querySelectorAll('[lang="roman"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...romanElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}