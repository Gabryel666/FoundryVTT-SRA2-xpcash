export function registerSettings() {
    const featTypes = ['Equipment', 'Weapon', 'Armor', 'Cyberware', 'Cyberdeck', 'Vehicle'];

    // Master switch
    game.settings.register('sra2-xp-cash', 'enableItemCashCost', {
        name: 'SRA2XPCash.Settings.EnableItemCashCost.Name',
        hint: 'SRA2XPCash.Settings.EnableItemCashCost.Hint',
        scope: 'world',
        config: true,
        type: Boolean,
        default: true
    });

    // Individual toggles
    featTypes.forEach(type => {
        game.settings.register('sra2-xp-cash', `cashCost${type}`, {
            name: `SRA2XPCash.Settings.CashCost${type}.Name`,
            hint: `SRA2XPCash.Settings.CashCost${type}.Hint`,
            scope: 'world',
            config: true,
            type: Boolean,
            default: true
        });
    });
}

export function isItemCashEnabled(featType) {
    if (!game.settings.get('sra2-xp-cash', 'enableItemCashCost')) return false;
    if (!featType) return false;

    // capitalize first letter to match setting key
    const typeKey = featType.charAt(0).toUpperCase() + featType.slice(1).toLowerCase();

    // check if this specific type toggle exists and is enabled
    try {
        return game.settings.get('sra2-xp-cash', `cashCost${typeKey}`);
    } catch (e) {
        // setting doesn't exist for this type, means it's not a cash-applicable type
        return false;
    }
}
