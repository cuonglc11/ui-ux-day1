$(document).ready(function() {
    let html =' ';
    const linkanh  =  `https://image.tmdb.org/t/p/w500`;
    const token  = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGY3ODEzYTQwNmI1ZjRiNDRhZWJkYzgxY2E0NWU1YiIsIm5iZiI6MTY0MDc3ODcyMC40MzM5OTk4LCJzdWIiOiI2MWNjNGJlMDQxYWFjNDAwNWY0YzUzM2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VOXZ1RSbb0-o9kFoWD7xy6NyOHzdcXa8LEdkL6v40ok';
    $.ajax({
        url: 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1',
        method: 'GET',
        headers : {
            'Authorization': `Bearer ${token}` 
        },
        success: function(response) {
            const data = response.results.slice(0,5);
            data.forEach(item => {
                html += `
                  <div class="item-movie">
                  <div class="item-popularity">${Math.floor(item.popularity)}</div>
                    <img src="${linkanh + item.profile_path}" alt="">
                    <h3>${item.name}</h3>
                    <p>${item.known_for[0].title}</p>
                  </div>
                `
            })
            $('#listMovie').html(html);
        },
        error: function(error) {
            console.error(error);
        }
     });
})