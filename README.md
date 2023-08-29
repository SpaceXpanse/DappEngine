# SpeXEngine /WIP/ 
## A versatile tool for creating 2D and simple 3D games with ease

<!-- ![SpeXEngine logo](https://raw.githubusercontent.com/4ian/SpeXEngine/master/newIDE/SpeXEngine%20banner.png "SpeXEngine logo") -->

SpeXEngine is a full-featured, no-code, open-source game development software. You can build games for mobile, desktop, and the web. It is fast and easy to use: the game logic is built up using an intuitive and powerful event-based system.

### Main features:

- Objects: In SpeXEngine, everything on the screen is an object. This includes the playable character, enemies, and parts of the environment.

- Events and Control Flow: SpeXEngine uses events to define the logic of your game. You can create conditions and actions to control how objects interact and behave.

- Variables: SpeXEngine allows you to use variables to store and manipulate data during gameplay. This gives you flexibility in creating dynamic and interactive experiences.

- Functions: SpeXEngine provides a powerful feature called "Events Function" or simply Function. Functions allow you to create your own actions, conditions, or expressions, making it easier to organize and reuse your game's events.

- Ready-to-Use Interface Elements: SpeXEngine includes a variety of pre-made objects such as buttons, switches, sliders, and more. This saves you time and effort by providing ready-to-use interface elements for your game.

- Extensions: SpeXEngine features are provided through extensions, allowing you to embed only the features you need in your game. This modular approach gives you flexibility in customizing your game development process.

- Cross-Platform Development: SpeXEngine is a cross-platform game development software. You can build games for mobile, desktop, and the web, making it easier to reach a wider audience.

- Open-Source and No-Code: SpeXEngine is an open-source, no-code game development software. It provides a user-friendly interface that doesn't require coding knowledge, making it accessible to beginners and experienced developers alike.

It offers even more advanced features like tilemaps, physics engine, platformer engine, particle emitter, dialogue editor, leaderboards, pathfinding, and gamepad support. 

<!-- 

![The SpeXEngine editor when editing a game level](https://raw.githubusercontent.com/4ian/SpeXEngine/master/newIDE/SpeXEngine%20screenshot.png "The SpeXEngine editor when editing a game level") -->

<!-- ## Getting started

| ❔ I want to...                 | 🚀 What to do                                                                                                                                                     |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Download SpeXEngine to make games | Go to [SpeXEngine website](https://SpeXEngine.io) to download the app!                                                                                                |
| Contribute to the editor        | Download [Node.js] and follow this [README](newIDE/README.md).                                                                                                    |
| Create/improve an extension     | Download [Node.js] and follow this [README](newIDE/README-extensions.md).                                                                                         |
| Help to translate SpeXEngine      | Go on the [SpeXEngine project on Crowdin](https://crowdin.com/project/SpeXEngine) or translate [in-app tutorials](https://github.com/SpeXEngineApp/SpeXEngine-tutorials). |

> Are you interested in contributing to SpeXEngine for the first time? Take a look at the list of **[good first issues](https://github.com/4ian/SpeXEngine/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%91%8Cgood+first+issue%22)**, **[good first contributions](https://github.com/4ian/SpeXEngine/discussions/categories/good-first-contribution)** or the **["🏐 not too hard" cards](https://trello.com/b/qf0lM7k8/SpeXEngine-roadmap?menu=filter&filter=label:Not%20too%20hard%20%E2%9A%BD%EF%B8%8F)** on the Roadmap.

## Overview of the architecture

| Directory     | ℹ️ Description                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------- |
| `Core`        | SpeXEngine core library, containing common tools to implement the IDE and work with SpeXEngine games. |
| `GDJS`        | The game engine, written in TypeScript, using PixiJS (WebGL), powering all SpeXEngine games.        |
| `SpeXEngine.js` | Bindings of `Core`, `GDJS` and `Extensions` to JavaScript (with WebAssembly), used by the IDE.    |
| `newIDE`      | The game editor, written in JavaScript with React, Electron and PixiJS.                           |
| `Extensions`  | Extensions for the game engine, providing objects, behaviors, events and new features.            |

To learn more about SpeXEngine Architecture, read the [architecture overview here](Core/SpeXEngine-Architecture-Overview.md).

Pre-generated documentation of the Core library, C++ and TypeScript game engines is [available here](https://docs.SpeXEngine.io).

Status of the tests and builds: [![macOS and Linux build status](https://circleci.com/gh/4ian/SpeXEngine.svg?style=shield)](https://app.circleci.com/pipelines/github/4ian/SpeXEngine) [![Fast tests status](https://SpeXEngine.semaphoreci.com/badges/SpeXEngine/branches/master.svg?style=shields)](https://SpeXEngine.semaphoreci.com/projects/SpeXEngine) [![All tests status](https://www.travis-ci.com/4ian/SpeXEngine.svg?branch=master)](https://www.travis-ci.com/github/4ian/SpeXEngine) [![Windows Build status](https://ci.appveyor.com/api/projects/status/84uhtdox47xp422x/branch/master?svg=true)](https://ci.appveyor.com/project/4ian/SpeXEngine/branch/master) [![https://good-labs.github.io/greater-good-affirmation/assets/images/badge.svg](https://good-labs.github.io/greater-good-affirmation/assets/images/badge.svg)](https://good-labs.github.io/greater-good-affirmation)

## Links

### Community

- [SpeXEngine forums](https://forum.SpeXEngine.io) and [Discord chat](https://discord.gg/SpeXEngine).
- [SpeXEngine homepage](https://SpeXEngine.io)
- [SpeXEngine wiki (documentation)](https://wiki.SpeXEngine.io/SpeXEngine5/start)
- Help translate SpeXEngine in your language: [SpeXEngine project on Crowdin](https://crowdin.com/project/SpeXEngine).

### Development Roadmap

- [SpeXEngine Roadmap on Trello.com](https://trello.com/b/qf0lM7k8/SpeXEngine-roadmap), for a global view of the features that could be added. Please vote and comment here for new features/requests.
- [GitHub issue page](https://github.com/4ian/SpeXEngine/issues), for technical issues and bugs.
- [Github discussions](https://github.com/4ian/SpeXEngine/discussions) to talk about new features and ideas.

### Games made with SpeXEngine

- See the [showcase of games](https://SpeXEngine.io/games) created with SpeXEngine.
- Find more SpeXEngine games on [gd.games](https://gd.games).
- Suggest your game to be [added to the showcase here](https://docs.google.com/forms/d/e/1FAIpQLSfjiOnkbODuPifSGuzxYY61vB5kyMWdTZSSqkJsv3H6ePRTQA/viewform).

[![Some games made with SpeXEngine](https://raw.githubusercontent.com/4ian/SpeXEngine/master/newIDE/SpeXEngine%20games.png "Some games made with SpeXEngine")](https://SpeXEngine.io/games)

-->

## License

- The Core library, the native and HTML5 game engines, the IDE, and all extensions (respectively `Core`, `GDJS`, `newIDE` and `Extensions` folders) are under the **MIT license**.
- The name, SpeXEngine, and its logo are the exclusive property of SpaceXpanse.

Games exported with SpeXEngine are based on the SpeXEngine game engine (see `Core` and `GDJS` folders): this engine is distributed under the MIT license so that you can **distribute, sell or do anything** with the games you created with SpeXEngine. In particular, you are not forced to make your game open-source.

[node.js]: https://nodejs.org
