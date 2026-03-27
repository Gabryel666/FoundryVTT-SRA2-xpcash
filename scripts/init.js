import { registerSettings } from './settings.js';
import { setupSheetOverrides } from './sheet-overrides.js';

Hooks.once('init', () => {
    console.log('SRA2 XP & Cash | Initializing module');
    registerSettings();
});

Hooks.once('ready', () => {
    console.log('SRA2 XP & Cash | Ready, setting up sheet overrides');
    setupSheetOverrides();

    // Migrate old flags
    if (game.user.isGM) {
        for (const actor of game.actors) {
            const oldCash = actor.getFlag('sra2-xp-cash', 'cash');
            if (oldCash !== undefined) {
                actor.setFlag('sra2-enhancements', 'cash', oldCash).then(() => {
                    actor.unsetFlag('sra2-xp-cash', 'cash');
                });
            }
            for (const item of actor.items) {
                const oldCost = item.getFlag('sra2-xp-cash', 'cost');
                if (oldCost !== undefined) {
                    item.setFlag('sra2-enhancements', 'cost', oldCost).then(() => {
                        item.unsetFlag('sra2-xp-cash', 'cost');
                    });
                }
            }
        }
    }
});
