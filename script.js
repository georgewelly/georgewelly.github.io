
const quotes = [
    "All warfare is based on deception.",
    "The greatest victory is that which requires no battle.",
    "Opportunities multiply as they are seized.",
    "The supreme art of war is to subdue the enemy without fighting.",
    "In the midst of chaos, there is also opportunity.",
    "He who knows when he can fight and when he cannot will be victorious.",
    "To fight and conquer in all our battles is not supreme excellence; supreme excellence consists in breaking the enemy's resistance without fighting.",
    "The opportunity to secure ourselves against defeat lies in our own hands, but the opportunity of defeating the enemy is provided by the enemy himself.",
    "If you know the enemy and know yourself, you need not fear the result of a hundred battles.",
    "The greatest warriors win first and then go to war, while the defeated warriors go to war first and then seek to win.",
    "When you surround an army, leave an outlet free. Do not press a desperate foe too hard.",
    "Pretend inferiority and encourage his arrogance.",
    "There is no instance of a nation benefiting from prolonged warfare.",
    "The clever combatant imposes his will on the enemy, but does not allow the enemy's will to be imposed on him.",
    "Supreme excellence consists of breaking the enemy's resistance without fighting.",
    "The good fighters of old first put themselves beyond the possibility of defeat, and then waited for an opportunity of defeating the enemy.",
    "To know your Enemy, you must become your Enemy.",
    "All men can see these tactics whereby I conquer, but what none can see is the strategy out of which victory is evolved.",
    "The wise warrior avoids the battle.",
    "Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.",
    "In war, the way is to avoid what is strong and to strike at what is weak.",
    "He who is prudent and lies in wait for an enemy who is not, will be victorious.",
    "Move swift as the Wind and closely-formed as the Wood. Attack like the Fire and be still as the Mountain.",
    "The general who advances without coveting fame and retreats without fearing disgrace, whose only thought is to protect his country and do good service for his sovereign, is the jewel of the kingdom.",
    "When strong, avoid them. If of high morale, depress them. Seem humble to fill them with conceit. If at ease, exhaust them. If united, separate them. Attack their weaknesses. Emerge to their surprise.",
    "All warfare is based on deception. Hence, when we are able to attack, we must seem unable; when using our forces, we must appear inactive; when we are near, we must make the enemy believe we are far away; when far away, we must make him believe we are near.",
    "The greatest glory is not in never falling, but in rising every time we fall.",
    "The opportunity of defeating the enemy is provided by the enemy himself.",
    "Appear weak when you are strong, and strong when you are weak.",
    "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.",
    "There is no instance of a nation benefiting from prolonged warfare.",
    "A wise ruler does not reward a general for victory in battle, but rather, for the effectiveness of his strategies and tactics.",
    "The skillful strategist defeats the enemy without doing battle, captures the city without laying siege, and overthrows the enemy state without protracted warfare.",
    "Tactics without strategy is the noise before defeat.",
    "If ignorant both of your enemy and yourself, you are certain to be in peril.",
    "The greatest victory is that which requires no battle.",
    "In war, the way is to avoid what is strong and to strike at what is weak.",
    "To know your Enemy, you must become your Enemy.",
    "Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.",
    "All warfare is based on deception.",
    "To secure ourselves against defeat lies in our own hands, but the opportunity of defeating the enemy is provided by the enemy himself.",
    "Even the finest sword plunged into salt water will eventually rust.",
    "In war, the way is to avoid what is strong and to strike at what is weak.",
    "He who knows when he can fight and when he cannot, will be victorious.",
    "Engage people with what they expect; it is what they are able to discern and confirms their projections. It settles them into predictable patterns of response, occupying their minds while you wait for the extraordinary moment — that which they cannot anticipate.",
    "When you surround an army, leave an outlet free. Do not press a desperate foe too hard.",
    "Opportunities multiply as they are seized.",
    "When the enemy is relaxed, make them toil. When full, starve them. When settled, make them move.",
    "If you know the enemy and know yourself, you need not fear the result of a hundred battles.",
    "The supreme art of war is to subdue the enemy without fighting.",
    "The general who advances without coveting fame and retreats without fearing disgrace, whose only thought is to protect his country and do good service for his sovereign, is the jewel of the kingdom.",
    "Appear weak when you are strong, and strong when you are weak.",
    "In the midst of chaos, there is also opportunity.",
    "The greatest warriors win first and then go to war, while the defeated warriors go to war first and then seek to win.",
    "The best victory is when the opponent surrenders of its own accord before there are any actual hostilities... It is best to win without fighting.",
    "The more you read and practice, the less you rely on strength and the more you depend on technique.",
    "The greatest glory is not in never falling, but in rising every time we fall.",
    "Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.",
    "In war, the way is to avoid what is strong and to strike at what is weak.",
    "He who knows when he can fight and when he cannot, will be victorious.",
    "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.",
    "All warfare is based on deception.",
    "The supreme art of war is to subdue the enemy without fighting.",
    "To know your Enemy, you must become your Enemy.",
    "The greatest victory is that which requires no battle.",
    "The best victory is when the opponent surrenders of its own accord before there are any actual hostilities... It is best to win without fighting.",
    "The greatest warriors win first and then go to war, while the defeated warriors go to war first and then seek to win.",
    "Engage people with what they expect; it is what they are able to discern and confirms their projections. It settles them into predictable patterns of response, occupying their minds while you wait for the extraordinary moment — that which they cannot anticipate.",
    "When you surround an army, leave an outlet free."]

function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
}

function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
}

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
}