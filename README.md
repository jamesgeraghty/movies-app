# movies-app
A small app created using React JS 
To activate you must run the following :
1. npm install --legacy-peer-deps
2. npm run storybook


## Features

The App overview.
The features of the React app will include:

- Display a list of current movie releases. For each one, show its poster image, title, release date and viewer rating.
- Display more detailed information on a movie from the above list by clicking its 'More Info ..' button. The details include plot, genres, runtime, revenue, etc.
- Show extracts from written reviews for a movie.
- Show the full review text for a review.
- Add movies to your favourites list.
- Write a review for one of your favourites.


  
## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

  
## Acknowledgements

 - [The Movie Database](https://developers.themoviedb.org/3/getting-started/introduction)


  
