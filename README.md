# YoutubeTags

**YouTube extract video tags without the need for the official YouTube API USING JAVASCRIPT**

# Installation

```
npm install youtube-keyword-extractor
```

# Video Tags

## How to Use It

```javascript
import { getVideoTags } from "youtube-keyword-extractor";
const url = "Add Your Youtube Link Here"; // Use https / http Links
const tags = getVideoTags(url).then(console.log);
```
