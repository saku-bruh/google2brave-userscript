# Google2Brave

Redirects Google search queries to Brave Search (supports **web**, **images**, **videos**, and **news**).

1. **Get a userscript manager**  
   - Chrome / Edge / Brave: [Tampermonkey](https://www.tampermonkey.net/)  
   - Firefox: [Violentmonkey](https://violentmonkey.github.io/) or [Tampermonkey](https://www.tampermonkey.net/)  

## Install (Automatic)

**Install the script from this Greasyfork page**  

   - Go to this [link](https://greasyfork.org/en/scripts/540175-google2brave)
   - Click on "Install this script"
   - Follow the on-screen instructions

## Install (Manual)

**Add the script from this GitHub repo**  
   - Open your manager → **Create new script** → paste the `script.js`, **or**  
   - Click the **Raw** file on GitHub and let the manager prompt to install.

That’s it—every Google search is now served by Brave and very easy to switch between the two if you wish to do so.

## What Gets Redirected?

| Google URL example | Brave result |
| ------------------ | ------------ |
| `…/search?q=cat` | `/search?q=cat` |
| `…&udm=2` or `…&tbm=isch` (Images) | `/images?q=cat` |
| `…&udm=7` or `…&tbm=vid` (Videos) | `/videos?q=cat` |
| `…&tbm=nws` (News) | `/news?q=cat` |

Language across search engines is also preserved.

## License

MIT
