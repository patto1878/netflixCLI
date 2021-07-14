const { listenerCount } = require("events");
const fs = require("fs");
let movieList=[];
try {
    let tempJson = fs.readFileSync("./netflix.json");
    let tempNetflix = JSON.parse(tempJson)
    console.log(tempNetflix)
    movieList.push(tempNetflix);
} catch (error) {
    movieList = []
}
const add = () => {
   if (process.argv[2] === "add") {
       tempMovie = {movie: process.argv[3]};
       movieList.push(tempMovie)
      let stringMovieList = JSON.stringify(movieList.flat(1));
      console.log(movieList);
       fs.writeFileSync("./netflix.json", stringMovieList);

    
};
};

const deleteItem = () =>{
    if (process.argv[2] ==="delete"){
        let deleteIndex = movieList[0].map((movie, index) =>{
            if (movie.title === process.argv[3]){
                console.log(index);
                return index;
            }
        });
        console.log(movieList);
        movieList[0].splice(deleteIndex, 1);
        console.log(movieList);
        let stringMovieList = JSON.stringify(movieList.flat(1));
        fs.writeFileSync("./netflix.json", stringMovieList);
    }
}

const list = () => {
    if (process.argc[2] === "list") {
        console.log(movieList);
    }
}

// list
// update 
// delete


add();
