// {
//   "mal_id": 232902,
//   "url": "https://myanimelist.net/character/232902/Longhu_Xuanshui",
//   "images": {
//       "jpg": {
//           "image_url": "https://cdn.myanimelist.net/images/characters/6/517787.jpg"
//       },
//       "webp": {
//           "image_url": "https://cdn.myanimelist.net/images/characters/6/517787.webp",
//           "small_image_url": "https://cdn.myanimelist.net/images/characters/6/517787t.webp"
//       }
//   },
//   "name": "Longhu Xuanshui",
//   "name_kanji": null,
//   "nicknames": [
//       "Ryuuko Gensui"
//   ],
//   "favorites": 0,
//   "about": "Longhu Xuanshui is a character from the Jiangshi X manga series. He is the Dadaoshi Master monk in the Shenxian village. He saved Xiaohu when he was young and raised him as a son.\n\nNo voice actors have been added to this character. Help improve our database by searching for a voice actor, and adding this character to their roles ."
// }

export interface ICharacter {
  mal_id?: number;
  url?: string;
  images?: any;
  name?: string;
  name_kanji?: string;
  nicknames?: any[];
  favorites?: number;
  about?: string;
}
