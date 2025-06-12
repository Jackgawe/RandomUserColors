/**
 * @name RandomUserColors
 * @author eyadmkv
 * @description Assigns random colors to users in the chat
 * @version 1.0.0
 */

module.exports = class RandomUserColors {
    constructor() {
        this.colors = new Map();
        this.settings = {
            colorSettings: {
                saturation: 70,
                lightness: 60,
                useCustomColors: false,
                customColors: [
                    "#FF0000",
                    "#00FF00",
                    "#0000FF",
                    "#FFFF00",
                    "#FF00FF",
                    "#00FFFF"
                ]
            },
            excludedUsers: [],
            excludedChannels: []
        };
    }

    start() {
        // Generate random colors for existing users
        document.querySelectorAll('[class*="username"]').forEach(element => {
            const userId = element.closest('[data-list-item-id*="members"]')?.getAttribute('data-list-item-id')?.split('-')[1];
            if (userId && !this.colors.has(userId) && !this.settings.excludedUsers.includes(userId)) {
                this.colors.set(userId, this.getRandomColor());
            }
        });

        // Apply colors to usernames
        this.applyColors();

        // Observe DOM changes to handle new messages
        this.observer = new MutationObserver(() => this.applyColors());
        this.observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    stop() {
        if (this.observer) {
            this.observer.disconnect();
        }
        this.colors.clear();
    }

    applyColors() {
        document.querySelectorAll('[class*="username"]').forEach(element => {
            const userId = element.closest('[data-list-item-id*="members"]')?.getAttribute('data-list-item-id')?.split('-')[1];
            const channelId = element.closest('[data-list-item-id*="chat-messages"]')?.getAttribute('data-list-item-id')?.split('-')[1];
            
            if (userId && !this.settings.excludedUsers.includes(userId) && 
                (!channelId || !this.settings.excludedChannels.includes(channelId))) {
                if (!this.colors.has(userId)) {
                    this.colors.set(userId, this.getRandomColor());
                }
                element.style.color = this.colors.get(userId);
            }
        });
    }

    getRandomColor() {
        if (this.settings.colorSettings.useCustomColors) {
            const customColors = this.settings.colorSettings.customColors;
            return customColors[Math.floor(Math.random() * customColors.length)];
        }
        
        const hue = Math.floor(Math.random() * 360);
        const saturation = this.settings.colorSettings.saturation;
        const lightness = this.settings.colorSettings.lightness;
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }
}; 