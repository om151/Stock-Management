# React Native Project

This is a React Native project created using the React Native CLI.

## Prerequisites

- Node.js installed
- React Native CLI installed
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- CocoaPods (for iOS)

## Installation

1. Clone the repository
2. Install dependencies:
```sh
npm install
# OR
yarn install
```

## Running the Project

### Start Metro Server

```sh
npm start
# OR
yarn start
```

### Run on Android

```sh
npm run android
# OR
yarn android
```

### Run on iOS

First install pods:
```sh
bundle install
bundle exec pod install
```

Then run the app:
```sh
npm run ios
# OR
yarn ios
```

## Development

- The main app code is in `App.tsx`
- Uses Fast Refresh for development
- Press R twice to reload on Android
- Press R to reload on iOS


