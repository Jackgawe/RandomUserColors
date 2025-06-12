# RandomUserColors

A BetterDiscord plugin that assigns random colors to users in the chat, making it easier to distinguish between different users.

## Features

- Assigns unique random colors to each user
- Colors persist for each user until plugin is disabled
- Customizable color settings
- Option to use custom color palette
- Ability to exclude specific users and channels
- Automatic color application for new messages

## Installation

1. Download the plugin files:
   - `RandomUserColors.plugin.js`
   - `RandomUserColors.config.json`

2. Place both files in your BetterDiscord plugins folder:
   - Windows: `%appdata%/BetterDiscord/plugins`
   - Mac: `~/Library/Application Support/betterdiscord/plugins`
   - Linux: `~/.config/BetterDiscord/plugins`

3. Enable the plugin in BetterDiscord settings

## Configuration

You can customize the plugin by editing the `RandomUserColors.config.json` file:

```json
{
    "config": {
        "colorSettings": {
            "saturation": 70,    // HSL saturation percentage
            "lightness": 60,     // HSL lightness percentage
            "useCustomColors": false,  // Set to true to use custom colors
            "customColors": [    // Array of custom colors (hex format)
                "#FF0000",
                "#00FF00",
                "#0000FF",
                "#FFFF00",
                "#FF00FF",
                "#00FFFF"
            ]
        },
        "excludedUsers": [],     // Array of user IDs to exclude
        "excludedChannels": []   // Array of channel IDs to exclude
    }
}
```

## Usage

Once installed and enabled, the plugin will automatically:
- Assign random colors to all users in the chat
- Maintain consistent colors for each user
- Apply colors to new messages as they appear

## Support

If you encounter any issues or have suggestions:
- Open an issue on [GitHub](https://github.com/jackgawe/RandomUserColors)
- Contact me on Discord: eyadmkv

## Author

- **eyadmkv** - [GitHub](https://github.com/jackgawe) 