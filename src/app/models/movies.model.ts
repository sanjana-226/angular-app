export class MovieModel {
  "_id": string;
  "title": string;
  "year": number;
  "runtime": number;
  "released": {
    $date: Date;
  };
  "poster": string;
  "plot": string;
  "type": string;
  "directors": string[];
  "imdb": {
    rating: number;
    votes: number;
    id: number;
  };
  "cast": string[];
  "countries": string[];
  "genres": string[];
  "tomatoes": {
    viewer: {
      rating: number;
      numReviews: number;
    };
    lastUpdated: {
      $date: Date;
    };
  };
  "num_mflix_comments": number;
}
