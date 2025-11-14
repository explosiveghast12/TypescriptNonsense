"use strict";
// classy.ts
// A fun, simple TypeScript class: EmojiGarden
// Plant emojis, start the garden, water to speed growth, and harvest grown emoji plants.
Object.defineProperty(exports, "__esModule", { value: true });
class EmojiGarden {
    constructor(tickMs = 1000, onChange) {
        this.plants = [];
        this.nextId = 1;
        this.intervalId = null;
        this.tickMs = tickMs;
        this.onChange = onChange;
    }
    // Plant a new emoji; returns its id
    plant(emoji = "🌱") {
        const p = {
            id: this.nextId++,
            emoji,
            plantedAt: Date.now(),
            growth: 0,
            wateredCount: 0,
        };
        this.plants.push(p);
        this.trigger();
        return p.id;
    }
    // Water a plant to accelerate growth
    water(id) {
        const p = this.plants.find(x => x.id === id);
        if (!p)
            return false;
        p.wateredCount++;
        this.trigger();
        return true;
    }
    // Harvest fully grown plants (growth >= 100)
    harvest() {
        const ready = this.plants.filter(p => p.growth >= 100);
        this.plants = this.plants.filter(p => p.growth < 100);
        if (ready.length)
            this.trigger();
        return ready;
    }
    // Get a snapshot of current plants
    getStatus() {
        return this.plants.map(p => (Object.assign({}, p)));
    }
    // Start automatic ticking
    start() {
        if (this.intervalId)
            return;
        this.intervalId = setInterval(() => this.tick(), this.tickMs);
    }
    // Stop automatic ticking
    stop() {
        if (!this.intervalId)
            return;
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    // Single tick: increases growth based on watering
    tick() {
        const now = Date.now();
        for (const p of this.plants) {
            // base growth per tick
            let inc = 5;
            // each water gives a small bonus, diminishing returns
            inc += Math.min(10, p.wateredCount * 3);
            // older plants get a tiny bonus
            const ageSec = Math.floor((now - p.plantedAt) / 1000);
            inc += Math.floor(ageSec / 30);
            p.growth = Math.min(100, p.growth + inc);
        }
        this.trigger();
    }
    // Optional callback and simple console display
    trigger() {
        const snapshot = this.getStatus();
        if (this.onChange)
            this.onChange(snapshot);
        else
            this.defaultLogger(snapshot);
    }
    defaultLogger(plants) {
        if (plants.length === 0) {
            console.log("EmojiGarden is empty. Plant something with garden.plant('🌸')!");
            return;
        }
        const line = plants
            .map(p => {
            const pct = Math.floor(p.growth);
            const bars = Math.floor(pct / 10);
            return `${p.emoji} [${"█".repeat(bars)}${" ".repeat(10 - bars)}] ${pct}%`;
        })
            .join("  ");
        console.log(line);
    }
}
exports.default = EmojiGarden;
/* Example usage (uncomment to run):

const garden = new EmojiGarden(1000)
garden.plant('🌷')
garden.plant('🍄')
garden.start()

// water first plant after 3s
setTimeout(() => garden.water(1), 3000)

// auto-harvest every 5s
setInterval(() => {
    const harvested = garden.harvest()
    if (harvested.length) console.log('Harvested:', harvested.map(h => h.emoji).join(' '))
}, 5000)
*/ 
