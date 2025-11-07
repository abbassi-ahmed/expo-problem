Hey everyone 👋
I’m using Expo Router in a React Native app, and I’ve hit a weird navigation issue that I can’t seem to figure out.
Here’s my folder structure:
app/
├── _layout.tsx
├── index.tsx
└── profile/
    ├── _layout.tsx
    ├── index.tsx
    └── detail/
        └── [id].tsx
What’s happening:
I have a tab bar with two main tabs:
index.tsx (Home)
profile/ (which is a stack: profile/index → profile/detail/[id])
When I open the app and navigate to the Profile tab first, then go from profile/index → profile/detail/[id], everything works fine. I can go back normally using the default header back button.
I also have a quick action button on the Home tab that takes me directly to a specific detail page (like /profile/detail/123). If I’ve already visited the Profile stack once before, the back button still works and takes me back to profile/index.
The problem:
If I open the app for the first time and go directly to /profile/detail/[id] from the quick action (without visiting the profile tab first),
→ I get to the detail page, but
🚫 there’s no back button
🚫 I can’t navigate back to profile/index
It feels like Expo Router is treating the detail page as the root of the profile stack in that case.
My question:
Is there a way to ensure that the stack always treats profile/index as the root, even when I deep-link directly to a nested route like /profile/detail/[id]?
Basically, I want the back navigation to always work as if I came from profile/index, even if I entered the detail route directly.
Any idea how to handle this properly with Expo Router?
Thanks in advance 🙏
