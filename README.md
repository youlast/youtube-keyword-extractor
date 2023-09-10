# Youtube Keyword Extractor

**YouTube extract video tags without the need for the official YouTube API USING JAVASCRIPT**

# Installation

```
npm install youtube-keyword-extractor
```

# Video Tags

## Example

```javascript
const { getVideoTags } = require('youtube-keyword-extractor');
const url = "https://www.youtube.com/watch?v=J1cqaKDXY3w&ab_channel=NationalGeographic"; // Use https / http Links
const tags = getVideoTags(url).then(console.log);
```

### Output of Example 1

```
national geographic, nat geo, natgeo, animals, wildlife, science, explore, discover, survival, nature, culture, documentary, perpetual planet nat geo, Wicked Tuna, Battle Line, Bluefin Season, New England’s best fisherman, New England, Best Fisherman, Pinwheel Fish Fight, Fish Fight, Hospitality, Belligerent fish, Tuna fishing, Bluefin tuna, Old fishing spot, Pinwheel, Old Fish, Fishing video, fishing, wicked tuna national geographic, wicket tuna clips, wicked tuna compilation

```

# Channel Tags

## Example

```javascript
const { getChannelTags } = require('youtube-keyword-extractor');
const url = "https://www.youtube.com/@NatGeo"; // Use https / http Links
const tags = getChannelTags(url).then(console.log);
```

### Output of Example

```
national, geographic, animal, earth, water, mountain, adventure, wild, attack, explorer, dog, whisperer, dogtown, cesar, milan
```


## Inspired By [YoutubeTags](https://github.com/nuhmanpk/YoutubeTags/)


