export interface IShadowSettings {
  offsetX: number;
  offsetY: number;
  blur: number;
}

export interface IAnime {
  mal_id: number;
  title_english: string;
  title_japanese: string;
  title: string;
  duration: string;
  score: number;
  broadcast: IBroadcast;
  background: string;
  images: IImages;
  aired: IAired;
  trailer: ITrailer;
}

interface IBroadcast {
  day: string;
  string: string;
  time: string;
  timezone: string;
}

interface IImages {
  webp: IImage;
  jpg: IImage;
}

interface IImage {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

class Images {
  webp: Image = new Image();
  jpg: Image = new Image();

  constructor(images?: IImages) {
    if (images) {
      this.webp = new Image(images.webp);
      this.jpg = new Image(images.jpg);
    }
  }
}

class Image {
  imageUrl: string = '';
  smallImageUrl: string = '';
  largeImageUrl: string = '';

  constructor(image?: IImage) {
    if (image) {
      this.imageUrl = image.image_url;
      this.smallImageUrl = image.small_image_url;
      this.largeImageUrl = image.large_image_url;
    }
  }
}

export interface IAnimeResponse {
  data: IAnime[];
}

export interface IAnimeDetailResponse {
  data: IAnime;
}

export interface IAired {
  from: string;
  to: string;
}

export class Aired {
  from: Date = new Date();
  to: Date = new Date();

  constructor(aired?: IAired) {
    if (aired) {
      this.from = aired.from ? new Date(aired.from) : new Date();
      this.to = aired.to ? new Date(aired.to) : new Date();
    }
  }
}

export interface ITrailer {
  embed_url: string;
  url: string;
  images: any;
  youtube_id?: string;
}

export class Trailer {
  embedUrl: string = '';
  url: string = '';
  youtubeId?: string;
  image: string = '';
  constructor(trailer?: ITrailer) {
    if (trailer) {
      this.embedUrl = trailer.embed_url;
      this.youtubeId = trailer.youtube_id;
      this.image = trailer.images?.large_image_url ? trailer.images.large_image_url : '';
      this.url = trailer.url;
    }
  }
}

export class Anime {
  id: number = 0;
  titleEnglish: string = 'Inesistente';
  titleJapanese: string = '';
  title: string = '';
  duration: string = '';
  score: number = 0;
  broadcast?: IBroadcast;
  images: Images = new Images();
  background: string = '';
  aired: Aired = new Aired();
  trailer: Trailer = new Trailer();

  constructor(res?: IAnime) {
    if (res) {
      this.id = res.mal_id;
      this.titleJapanese = res.title_japanese;
      this.titleEnglish = res.title_english;
      this.title = res.title;
      this.duration = res.duration;
      this.score = res.score;
      this.images = new Images(res.images);
      this.background = res.background;
      this.aired = new Aired(res.aired);
      this.trailer = new Trailer(res.trailer);
    }
  }
}

export interface IRecommendedAnimeResponse {
  data: IRecommendedAnime[];
}

export interface IRecommendedAnime {
  mal_id: string;
  entry: IEntryAnime[];
  content: string;
  date: string;
  user: any;
}

export interface IEntryAnime {
  mal_id: number;
  url: string;
  images: IImages;
  title: string;
}

export class EntryAnime {
  id: number = 0;
  url: string = '';
  images: Images = new Images();
  title: string = '';

  constructor(entry?: IEntryAnime) {
    if (entry) {
      this.id = entry.mal_id;
      this.url = entry.url;
      this.images = new Images(entry.images);
      this.title = entry.title;
    }
  }
}

export class RecommendedAnime {
  id: string = '';
  entries: EntryAnime[] = [];
  content: string = '';
  date: string = '';
  user: any;

  constructor(recommended?: IRecommendedAnime) {
    if (recommended) {
      this.id = recommended.mal_id;
      this.entries = recommended.entry.map(entry => new EntryAnime(entry));
      this.content = recommended.content;
      this.date = recommended.date;
      this.user = recommended.user;
    }
  }
}
