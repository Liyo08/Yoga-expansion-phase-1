// Simple knowledge base for the chatbot
const knowledgeBase = {
    // 🌟 General Greetings
    "hi": ["Hello!", "Hi there!", "Hey! How can I help you?"],
    "hello": ["Hi there!", "Hello! How can I assist you?", "Hey! What can I do for you today?"],
    "hey": ["Hey! How's it going?", "Hello! Need any help?"],
    "good morning": ["Good morning! Hope you have a fantastic day ahead!", "Morning! How can I help you today?"],
    "good afternoon": ["Good afternoon! How can I assist you today?"],
    "good evening": ["Good evening! Hope you had a great day!", "Evening! What can I do for you?"],
    "good night": ["Good night! Sleep well!", "Sweet dreams! Take care!"],
    "bye": ["Goodbye! Have a great day!", "See you later!", "Take care!"],
    "thank you": ["You're welcome!", "Happy to help!", "No problem!"],
    "what is your name": ["I'm a simple AI chatbot created to help answer your questions.", "You can call me ChatBot. What can I help you with?"],
    "what can you do": ["I can answer simple questions, provide information on various topics, or just chat with you!", "I'm a basic chatbot that can answer questions and have conversations with you."],
    "i am": ["Hey! I am ZenbotX..How can i help you?"],
    "i am doing": ["Glad to know"],

// 🌿 Diet - Weight Gain
"how to gain weight": ["To gain weight, consume a calorie surplus with nutrient-dense foods like nuts, dairy, and whole grains."],
"best foods for weight gain": ["Healthy weight gain foods include avocados, bananas, nuts, whole milk, and lean meats."],
"how many meals for weight gain": ["Aim for 5-6 small meals a day with a balance of proteins, carbs, and healthy fats."],
"best exercises for weight gain": ["Weight training exercises like squats, deadlifts, and bench presses help with muscle gain."],
"how to gain weight naturally": ["Eat whole foods, avoid junk food, increase protein intake, and do strength training."],
"does eating more protein help gain weight": ["Yes, protein supports muscle growth, which is essential for healthy weight gain."],
"is peanut butter good for weight gain": ["Yes, peanut butter is calorie-dense and rich in healthy fats and protein."],
"should I drink milk to gain weight": ["Whole milk is a great option for weight gain due to its high calorie and protein content."],
"what are high-calorie snacks for weight gain": ["Nuts, dried fruits, smoothies, and granola bars are great high-calorie snacks."],
"does eating late at night cause weight gain": ["Eating late can contribute to weight gain if it increases your daily calorie intake."],
"how does strength training help with weight gain": ["Strength training promotes muscle growth, which helps with healthy weight gain."],
"is junk food good for weight gain": ["While junk food adds calories, it lacks essential nutrients and can be unhealthy."],
"can I gain weight without exercise": ["Yes, but exercise ensures that weight gain is mostly muscle, not just fat."],
"is rice good for weight gain": ["Yes, rice is high in carbs and provides an easy way to add calories to meals."],
"how many calories should I eat to gain weight": ["It depends on your metabolism, but generally, 300-500 extra calories per day help with gradual weight gain."],
"should I take weight gain supplements": ["Only if necessary; it's best to focus on whole foods first."],
"how fast can I gain weight healthily": ["A gain of 0.5 to 1 kg per week is considered healthy."],
"does stress affect weight gain": ["Yes, stress can affect appetite and metabolism, making it harder to gain weight."],
"what are the best drinks for weight gain": ["Smoothies, protein shakes, and whole milk are great calorie-dense drinks."],

// 🌿 Diet - Weight Loss
"how to lose weight": ["For weight loss, focus on a calorie deficit, eat whole foods, and exercise regularly."],
"best foods for weight loss": ["Opt for lean proteins, leafy greens, whole grains, and fiber-rich foods to stay full longer."],
"weight loss tips": ["Reduce sugar intake, drink more water, exercise regularly, and get enough sleep."],
"is keto good for weight loss": ["The keto diet can be effective for weight loss, but consult a nutritionist before starting."],
"what is intermittent fasting": ["Intermittent fasting cycles between eating and fasting periods to aid weight loss and digestion."],
"is walking enough for weight loss": ["Walking helps burn calories and improve overall health, but combining it with a healthy diet is best."],
"how does water help with weight loss": ["Drinking water can boost metabolism and reduce appetite, aiding weight loss."],
"should I avoid carbs to lose weight": ["Not necessarily; whole carbs like quinoa and brown rice can be part of a healthy diet."],
"do weight loss pills work": ["Some may help temporarily, but sustainable weight loss comes from a balanced diet and exercise."],
"does stress lead to weight gain": ["Yes, stress increases cortisol levels, which can lead to weight gain."],

// 🧘 Yoga - Beginner
"best yoga for beginners": ["Start with simple poses like Child's Pose, Cat-Cow, and Downward Dog."],
"how to start yoga": ["Find a quiet space, wear comfortable clothes, and start with basic breathing exercises and simple poses."],
"yoga for flexibility for beginners": ["Try poses like Cobra Pose, Forward Bend, and Butterfly Pose to improve flexibility."],
"how often should beginners do yoga": ["Practicing yoga 3-5 times a week is ideal for improving flexibility and mental well-being."],
"beginner yoga breathing techniques": ["Start with deep breathing, alternate nostril breathing, and belly breathing."],
"what is the best time to do yoga": ["Morning is ideal for energy, while evening yoga helps with relaxation and sleep."],
"can yoga help with stress": ["Yes! Yoga reduces stress by calming the nervous system and promoting relaxation."],
"yoga for weight loss for beginners": ["Try Vinyasa or Power Yoga for fat burning, combined with a balanced diet."],
"how long should a beginner do yoga": ["Start with 15-30 minutes and gradually increase your practice time."],
"does yoga improve posture": ["Yes, yoga strengthens core muscles and improves posture over time."],
"can beginners do yoga at home": ["Yes! Start with simple poses and follow online classes or tutorials."],
"what are the benefits of beginner yoga": ["It improves flexibility, reduces stress, enhances focus, and builds strength."],
"is yoga good for back pain": ["Yes, poses like Cat-Cow and Cobra Pose help relieve back pain."],
"how does yoga improve mental health": ["Yoga promotes relaxation, reduces stress, and helps manage anxiety and depression."],
"what to wear for yoga": ["Wear comfortable, stretchable clothing that allows free movement."],
"should I do yoga on an empty stomach": ["Yes, it's best to do yoga on an empty stomach or at least 2 hours after eating."],
"what is Hatha Yoga": ["Hatha Yoga is a gentle practice focused on breathing and basic postures."],
"what is Vinyasa Yoga": ["Vinyasa Yoga is a flow-based style where movement is synchronized with breath."],
"can yoga help with digestion": ["Yes, poses like Seated Twist and Wind-Relieving Pose improve digestion."],

// 🧘 Yoga - Advanced
"advanced yoga poses": ["Advanced poses include Crow Pose, Headstand, and Scorpion Pose."],
"how to advance in yoga": ["Focus on flexibility, build strength, practice consistently, and learn advanced poses."],
"what is hot yoga": ["Hot yoga is practiced in a heated room to improve flexibility and detoxification."],
"difference between yoga and pilates": ["Yoga focuses on flexibility and mindfulness, while Pilates emphasizes core strength and muscle tone."],
"how to master headstand in yoga": ["Practice against a wall, engage your core, and maintain balance through slow progress."],
"what is Ashtanga Yoga": ["Ashtanga Yoga is a fast-paced, structured sequence of poses for strength and endurance."],
"how to improve flexibility in yoga": ["Practice regularly, stretch daily, and focus on deep breathing to relax muscles."],
"what is Power Yoga": ["Power Yoga is a high-intensity yoga style that helps with strength and weight loss."],
"how to transition to advanced yoga": ["Build strength, increase flexibility, and practice consistently to master advanced poses."],
"how to do a forearm stand in yoga": ["Strengthen your shoulders and core, and practice against a wall before attempting unsupported."],
"what is Yin Yoga": ["Yin Yoga involves holding deep poses for longer periods to improve flexibility and relaxation."],
"is aerial yoga an advanced practice": ["Yes, it involves yoga poses performed while suspended in the air using a hammock."],
"how to balance in one-leg yoga poses": ["Engage your core, distribute weight evenly, and focus on a fixed point (drishti)."],
"what is Kundalini Yoga": ["Kundalini Yoga combines breathwork, movement, and meditation to awaken inner energy."],
"is advanced yoga only for flexible people": ["No, strength and balance are equally important in advanced yoga."],
"how to prepare for an advanced yoga class": ["Warm up properly, hydrate, and practice mindfulness before starting."],
"does advanced yoga require strength training": ["Yes, building strength through yoga or external exercises can help with advanced poses."],
"can I practice advanced yoga daily": ["Yes, but allow for rest days to prevent muscle fatigue and injury."],
"what are the benefits of advanced yoga": ["Improves strength, flexibility, balance, concentration, and breath control."],

// 🧘‍♂️ Meditation - Relaxation
"how to start meditation": ["Find a quiet place, sit comfortably, close your eyes, and focus on your breath."],
"best meditation for relaxation": ["Try guided meditation, deep breathing, or mindfulness meditation for relaxation."],
"meditation for anxiety": ["Mindfulness meditation and deep breathing can help manage anxiety."],
"what is mindfulness meditation": ["Mindfulness meditation involves focusing on the present moment without judgment."],
"how long should I meditate daily": ["Start with 5-10 minutes and gradually increase to 20-30 minutes per day."],
"can meditation help with sleep": ["Yes, meditation calms the mind and improves sleep quality."],
"is guided meditation effective": ["Yes, guided meditations help beginners stay focused and relaxed."],
"how to breathe correctly during meditation": ["Breathe slowly and deeply through the nose, focusing on each inhale and exhale."],
"what is transcendental meditation": ["It involves silently repeating a mantra to reach deep relaxation."],
"can meditation help with depression": ["Yes, regular meditation has been shown to improve mood and mental health."],
"what is Zen meditation": ["Zen meditation (Zazen) focuses on sitting posture, breathing, and observing thoughts."],
"how to stop distractions in meditation": ["Find a quiet place, set a timer, and gently bring focus back when distracted."],
"does meditation improve concentration": ["Yes, meditation strengthens the mind's ability to focus and remain present."],
"what is loving-kindness meditation": ["This meditation focuses on sending positive thoughts to yourself and others."],
"can I meditate while lying down": ["Yes, but sitting upright helps maintain focus and prevents falling asleep."],
"how to meditate for stress relief": ["Practice deep breathing and focus on relaxation techniques like body scans."],

// 🌞 Sun Salutation
"what is sun salutation": ["Sun Salutation (Surya Namaskar) is a sequence of yoga poses performed to honor the sun."],
"how many poses in sun salutation": ["There are 12 poses in a traditional Sun Salutation sequence."],
"how many rounds of sun salutation should I do": ["Start with 3-5 rounds and gradually increase to 12 or more."],
"benefits of sun salutation": ["Improves flexibility, strengthens muscles, and boosts circulation and energy levels."],
"can sun salutation help with weight loss": ["Yes, doing multiple rounds of Surya Namaskar burns calories and tones the body."],
"is sun salutation a full-body workout": ["Yes, it engages all major muscle groups and enhances overall fitness."],
"how to improve sun salutation practice": ["Focus on breath synchronization, smooth transitions, and proper posture."],
"what is the best time to practice sun salutation": ["Morning, preferably at sunrise, is the best time to practice."],
"does sun salutation increase height": ["It helps improve posture and spinal health but does not increase height after puberty."],
"is sun salutation good for digestion": ["Yes, it stimulates digestion and improves metabolism."],
"can I do sun salutation in the evening": ["Yes, but morning practice is preferred for energy and vitality."],
};

// Fallback responses
const fallbackResponses = [
"I'm not sure I understand. Could you rephrase that?",
"I don't have information about that yet. Is there something else I can help with?",
"I'm still learning and don't have an answer for that question.",
"Interesting question! Unfortunately, I don't have an answer for that."
];

// 🌟 Function to identify keywords and get an appropriate response
function getResponse(userInput) {
    const input = userInput.toLowerCase().trim(); // Convert to lowercase and remove extra spaces
    let bestMatch = null;
    let maxMatchLength = 0;

    // Check for the **longest phrase match** in the knowledge base
    for (const key in knowledgeBase) {
        if (input.includes(key) && key.length > maxMatchLength) {
            bestMatch = key;
            maxMatchLength = key.length;
        }
    }

    // If no phrase match, check for individual word matches
    if (!bestMatch) {
        const words = input.split(/\W+/).filter(word => word.length > 1); // Extract meaningful words
        for (const key in knowledgeBase) {
            const keyWords = key.split(/\W+/);
            for (const keyWord of keyWords) {
                if (words.includes(keyWord)) {
                    bestMatch = key;
                    break;
                }
            }
            if (bestMatch) break;
        }
    }

    // Return a response if a match is found, otherwise return a fallback response
    return bestMatch ? knowledgeBase[bestMatch][Math.floor(Math.random() * knowledgeBase[bestMatch].length)] 
                     : fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

// 🌟 DOM elements
const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-btn');
const typingIndicator = document.getElementById('typing-indicator');

// 🌟 Function to add a message to the chat
function addMessage(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', isUser ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);

    // Scroll to bottom of chat
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// 🌟 Function to handle sending a message
function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    // Add user message to chat
    addMessage(message, true);
    userInput.value = '';

    // Show typing indicator
    typingIndicator.style.display = 'block';

    // Simulate bot "thinking" time
    setTimeout(() => {
        typingIndicator.style.display = 'none'; // Hide typing indicator

        // Get bot response and add to chat
        const botResponse = getResponse(message);
        addMessage(botResponse, false);
    }, 1000); // Simulated delay
}

// 🌟 Event listeners
sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// 🌟 Focus on input field when page loads
window.onload = () => userInput.focus();
