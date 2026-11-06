# React Native / Expo Starter Structure

This is a **source-folder structure template**, not a standalone Expo project. It does not include `package.json` or installed dependencies.

## How to use it

1. Create a real Expo project with Expo Router:
   ```bash
   npx create-expo-app@latest my-app
   ```
2. Open the created project.
3. Copy this template's `src/` folder into the project (merge/replace the generated `src/` only if you are sure you do not need its starter files).
4. From the project folder, install dependencies if needed and run:
   ```bash
   npx expo start
   ```

The Expo project provides React, React Native, Expo Router, TypeScript configuration, and the `react/jsx-runtime` module that the editor needs.

## Structure

```text
src/
├── app/          # Expo Router routes and root layout
├── features/     # App features; each feature owns its screens and feature-specific code
├── components/   # Shared UI components used by multiple features
├── services/     # Shared API client and storage utilities
├── constants/    # Shared fixed values: colors, spacing, typography
├── assets/       # Images, icons, fonts
├── providers/    # App-wide state/context providers
├── utils/        # General-purpose helper functions
└── types/        # Shared TypeScript types
```

## Where things go

- A route belongs in `src/app/`.
- `src/app/_layout.tsx` defines the root navigation layout.
- The actual screen UI belongs in `src/features/<feature>/screens/`.
- Components used only by one feature stay inside that feature.
- Reusable components shared by different features go in `src/components/`.
- Feature-specific API operations stay inside that feature (for example `src/features/auth/auth.service.ts`).
- Shared API setup and device storage go in `src/services/`.
- Create folders only when the project needs them. You do not need to fill every folder on day one.

`.gitkeep` files are empty placeholders that make Git retain otherwise-empty folders. They are not application code and can be deleted once a folder contains real files.
