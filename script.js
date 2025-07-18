// Content data arrays
const interestingFacts = [
    "Honey never spoils - archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
    "A day on Venus is longer than its year - it takes 243 Earth days for Venus to rotate on its axis, but only 225 Earth days to orbit the Sun.",
    "Bananas are berries, but strawberries aren't - in botanical terms, bananas qualify as berries while strawberries are actually aggregate fruits.",
    "The shortest war in history lasted only 38 minutes - the Anglo-Zanzibar War of 1896 ended when the Sultan's palace was destroyed.",
    "Octopuses have three hearts - two pump blood to the gills, while the third pumps it to the rest of the body.",
    "A group of flamingos is called a 'flamboyance' - one of the most colorful collective nouns in the English language.",
    "The Great Wall of China is not visible from space with the naked eye - this is a common misconception.",
    "Polar bears have black skin under their white fur - the fur is actually transparent and reflects light.",
    "The average person spends 6 months of their lifetime waiting for red lights to turn green.",
    "A jiffy is an actual unit of time - it's 1/100th of a second.",
    "The first oranges weren't orange - they were originally green and the color orange was named after the fruit.",
    "A day on Mars is only 37 minutes longer than a day on Earth.",
    "The human body contains enough iron to make a 3-inch nail.",
    "Cows have best friends and get stressed when separated from them.",
    "The shortest English word that contains the letters A, B, C, D, E, and F is 'feedback'.",
    "A group of crows is called a 'murder' - another fascinating collective noun.",
    "The average person walks the equivalent of three times around the world in a lifetime.",
    "Butterflies taste with their feet - they have taste receptors on their feet to identify plants.",
    "The first computer programmer was a woman - Ada Lovelace wrote the first algorithm in the 1840s.",
    "A day on Jupiter is only 10 hours long - the fastest rotating planet in our solar system."
];

const knowledgeSnippets = [
    "The human brain can process images in as little as 13 milliseconds, making it incredibly efficient at visual recognition.",
    "Learning a new language can literally change your brain structure, increasing gray matter density in areas responsible for memory and language processing.",
    "The concept of 'flow state' was discovered by psychologist Mihaly Csikszentmihalyi, who found that people are happiest when fully engaged in challenging activities.",
    "The placebo effect is so powerful that even when people know they're taking a placebo, they can still experience real improvements in their condition.",
    "Your gut contains more neurons than your spinal cord, earning it the nickname 'the second brain' due to its complex nervous system.",
    "The average person makes about 35,000 decisions every day, from what to eat to which route to take to work.",
    "Memory is not like a video recording - it's more like a story that gets rewritten each time you recall it.",
    "The human body contains about 37 trillion cells, each with its own complex internal structure and function.",
    "Sleep is essential for memory consolidation - your brain processes and stores new information while you sleep.",
    "The concept of 'neuroplasticity' means your brain can form new neural connections throughout your entire life.",
    "Emotions are processed faster than thoughts - your emotional brain can react to stimuli before your thinking brain even registers it.",
    "The human eye can distinguish about 10 million different colors, though most people can only name a few hundred.",
    "Your brain uses about 20% of your body's total energy, despite being only 2% of your body weight.",
    "The average person has about 70,000 thoughts per day, though most are repetitive and automatic.",
    "Laughter is contagious because of mirror neurons - when you see someone laugh, your brain automatically prepares to laugh too.",
    "The human body replaces about 330 billion cells every day, meaning you're literally a new person every few years.",
    "Your sense of smell is the only sense that connects directly to the brain's memory and emotion centers.",
    "The average person spends about 6 years of their life dreaming, though they only remember a small fraction of those dreams.",
    "Your brain can process information at speeds up to 268 miles per hour, making it faster than any computer.",
    "The human body contains enough carbon to make 900 pencils, enough iron for a 3-inch nail, and enough fat for 7 bars of soap.",
    "Your brain creates new neural pathways every time you learn something new, literally rewiring itself with each new experience.",
    "The human body can survive for weeks without food, but only days without water, highlighting the critical importance of hydration.",
    "Your brain uses more energy when you're thinking hard than when you're at rest, making mental work physically demanding.",
    "The average person's attention span has decreased from 12 seconds to 8 seconds in the digital age, shorter than a goldfish's.",
    "Your brain processes pain and pleasure in the same regions, which is why some people find spicy food enjoyable despite the burning sensation.",
    "The human body has a built-in 'fight or flight' response that can be triggered by both real threats and perceived stress.",
    "Your brain can recognize faces even when they're upside down, but struggles to identify emotions in inverted faces.",
    "The human body produces enough heat in 30 minutes to boil a gallon of water, making us incredibly efficient heat generators."
];

const positiveNews = [
    "Scientists have discovered a new species of deep-sea coral that glows in the dark, helping to illuminate the mysterious depths of our oceans.",
    "A community in rural India has achieved 100% renewable energy, powering their entire village with solar panels and wind turbines.",
    "Researchers have developed a new biodegradable plastic made from seaweed that dissolves in water, offering hope for reducing ocean pollution.",
    "A group of teenagers in Kenya invented a device that converts human waste into clean energy, providing power for their local school.",
    "Conservation efforts have successfully doubled the population of endangered mountain gorillas in the past decade.",
    "A small town in Denmark became the first in the world to be completely powered by renewable energy, serving as a model for sustainable living.",
    "Scientists have discovered a new species of bee that pollinates orchids, helping to preserve these beautiful flowers in the wild.",
    "A community garden project in Detroit has transformed vacant lots into thriving urban farms, providing fresh food for local residents.",
    "Researchers have found that planting trees in cities can reduce air pollution by up to 60%, improving public health significantly.",
    "A group of volunteers in Australia has successfully rehabilitated over 1,000 injured wildlife animals, returning them to their natural habitats.",
    "Scientists have developed a new type of solar panel that's more efficient and cheaper to produce, making renewable energy more accessible.",
    "A community in Brazil has created a sustainable fishing program that protects marine life while providing income for local fishermen.",
    "Researchers have discovered a new species of butterfly in the Amazon rainforest, highlighting the incredible biodiversity of our planet.",
    "A school in rural Africa has installed solar-powered computers, giving students access to educational resources and the internet.",
    "Conservationists have successfully reintroduced endangered species back into the wild, helping to restore natural ecosystems.",
    "A group of engineers has developed a water purification system that can provide clean drinking water to remote communities.",
    "Scientists have found that coral reefs can recover from damage when given proper protection and time to heal naturally.",
    "A community in Iceland has created a geothermal heating system that provides sustainable warmth for the entire town.",
    "Researchers have discovered new medicinal plants in the rainforest that could help treat diseases and improve human health.",
    "A group of students has developed an app that helps people reduce their carbon footprint by tracking daily activities and suggesting eco-friendly alternatives."
];

const transitionWords = [
    "Furthermore", "Moreover", "Additionally", "Interestingly", "Remarkably", "Surprisingly", 
    "Notably", "Significantly", "Importantly", "Consequently", "Therefore", "Thus",
    "As a result", "For instance", "For example", "In fact", "Indeed", "Clearly",
    "Evidently", "Obviously", "Naturally", "Of course", "Certainly", "Undoubtedly"
];

const connectors = [
    "which", "that", "when", "where", "while", "although", "because", "since",
    "as", "if", "unless", "until", "before", "after", "during", "through",
    "despite", "however", "nevertheless", "meanwhile", "simultaneously"
];

class ContentGenerator {
    constructor() {
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        this.contentTypeSelect = document.getElementById('content-type');
        this.generateBtn = document.getElementById('generate-btn');
        this.output = document.getElementById('output');
        this.copyBtn = document.getElementById('copy-btn');
    }

    bindEvents() {
        this.generateBtn.addEventListener('click', () => {
            this.generateContent();
        });

        this.copyBtn.addEventListener('click', () => {
            this.copyToClipboard();
        });
    }

    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    getRandomItems(array, count) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    createSentence(contentArray) {
        const baseContent = this.getRandomItem(contentArray);
        const transition = this.getRandomItem(transitionWords);
        const connector = this.getRandomItem(connectors);
        
        // Create variations of the sentence
        const variations = [
            baseContent,
            `${transition}, ${baseContent.toLowerCase()}`,
            `${baseContent} ${connector} this demonstrates the incredible complexity of our world.`,
            `${baseContent} This remarkable fact continues to amaze researchers and enthusiasts alike.`,
            `${baseContent} Such discoveries remind us of the endless wonders that surround us.`,
            `${baseContent} This fascinating insight has profound implications for our understanding.`,
            `${baseContent} ${connector} we consider the broader implications, the significance becomes even clearer.`,
            `${baseContent} This extraordinary phenomenon challenges our conventional understanding.`,
            `${baseContent} ${connector} we explore deeper, we uncover even more remarkable details.`,
            `${baseContent} This incredible discovery opens new possibilities for future research.`
        ];

        return this.getRandomItem(variations);
    }

    createParagraph(contentArray, sentenceCount) {
        const sentences = [];
        for (let i = 0; i < sentenceCount; i++) {
            sentences.push(this.createSentence(contentArray));
        }
        return sentences.join(' ');
    }

    generateContent() {
        const contentType = this.contentTypeSelect.value;
        
        // Fixed values for paragraphs and sentences
        const paragraphCount = 1;
        const sentenceCount = 5;

        // Show loading state
        this.generateBtn.innerHTML = '<div class="loading"></div> Generating...';
        this.generateBtn.disabled = true;

        setTimeout(() => {
            let contentArray;
            
            switch (contentType) {
                case 'facts':
                    contentArray = interestingFacts;
                    break;
                case 'knowledge':
                    contentArray = knowledgeSnippets;
                    break;
                case 'positive':
                    contentArray = positiveNews;
                    break;
                case 'mixed':
                default:
                    contentArray = [...interestingFacts, ...knowledgeSnippets, ...positiveNews];
                    break;
            }

            const paragraphs = [];
            for (let i = 0; i < paragraphCount; i++) {
                paragraphs.push(this.createParagraph(contentArray, sentenceCount));
            }

            this.displayContent(paragraphs);
            
            // Reset button
            this.generateBtn.innerHTML = '<i class="fas fa-magic"></i> Generate Content';
            this.generateBtn.disabled = false;
            this.generateBtn.classList.add('success');
            setTimeout(() => this.generateBtn.classList.remove('success'), 600);
        }, 500);
    }

    displayContent(paragraphs) {
        const contentHtml = paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('');
        this.output.innerHTML = `<div class="generated-content">${contentHtml}</div>`;
    }

    async copyToClipboard() {
        const content = this.output.textContent;
        if (!content || content.includes('Click "Generate Content"')) {
            return;
        }

        try {
            await navigator.clipboard.writeText(content);
            this.copyBtn.innerHTML = '<i class="fas fa-check"></i>';
            this.copyBtn.style.background = '#28a745';
            this.copyBtn.style.color = 'white';
            this.copyBtn.style.borderColor = '#28a745';
            
            setTimeout(() => {
                this.copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
                this.copyBtn.style.background = '#f8f9fa';
                this.copyBtn.style.color = '#666';
                this.copyBtn.style.borderColor = '#e1e5e9';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ContentGenerator();
}); 