const apiKey = "zUeeHBgHuXrvBDBFDv5h8nW3-E6vswqm04ogbOGxF-78K3h8e8x3sA59dKdfYNHA0nB1ANkm31u4w_bPSaX3I6eiImxTiJsAxZr6KZK3DWO8Y1YhTGqOMI6ANIR6ZXYx";
const Yelp = {
    search(term, location, sortBy) {
      return fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
        .then((response) => {
            console.log(response)
          return response.json();
        })
        .then((jsonResponse) => {
          if (jsonResponse.businesses) {
            return jsonResponse.businesses.map((business) => ({
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            }));
          }
        });
    },
  };
  
  export default Yelp;

