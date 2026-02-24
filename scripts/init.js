import { registerSettings } from './settings.js';
import { setupSheetOverrides } from './sheet-overrides.js';

Hooks.once('init', () => {
    console.log('SRA2 XP & Cash | Initializing module');
    registerSettings();
});

Hooks.once('ready', () => {
    console.log('SRA2 XP & Cash | Ready, setting up sheet overrides');
    setupSheetOverrides();
});
