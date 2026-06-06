Place licensed font files here for local loading.

Fonts referenced by the project:

- GT Zirkon (commercial)
  - Expected filenames (recommended .woff2): `GT-Zirkon.woff2`
  - Browser loads via: `/fonts/GT-Zirkon.woff2`
  - You must obtain a license from the font vendor (e.g. Grilli Type) before adding the files.

- GT Walsheim Pro (commercial)
  - Expected filenames (recommended .woff2): `GT-WalsheimPro.woff2`
  - Browser loads via: `/fonts/GT-WalsheimPro.woff2`
  - Obtain a license from the font vendor before adding files.

Notes and alternatives:

- DM Sans and Outfit are loaded from Google Fonts via `public/index.html`.
- If you have licensed font files from a vendor, add them to this folder and keep the filenames above, or update the `@font-face` rules in `src/components/pages/home/Home.css` to match your filenames.
- If you cannot license the commercial fonts, consider using free alternatives or rely on the bundled Google Fonts (`DM Sans`, `Outfit`) as fallbacks.
