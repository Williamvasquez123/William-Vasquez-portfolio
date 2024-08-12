console.log('hello world!')

// create a variable and assign it a prompt
// put the mall inside the mailbox
// var prompt=prompt('what is your name?')

// display the letter that we saved in the mailbox in the console

// console.log (prompt)
// if (10 > 9) {
//   console.log('yes 10 is greater than 9')
// }




function areyouOldenough(age) {
  var age = prompt('what is your age?');

  if (age < 18 && typeof age === "string") {
    alert('you are a minor');
  } 
  else if(age >= 18 && age <= 60){
    alert('you are an adult get a life ')
  }
  else{
    alert('dam your old')
  }
}



function introduction  (age, name, location ){
  console.log (age)
  console.log (name)
  console.log (location)
  console.log ('my age is ' + age + ' my name is ' + name + ' my location is ' + location)
}

introduction ( 15, 'william', 'new york')



function uploadAndIdentifyPlantID(){
  // get the photo from the input button
  var photoInput = document.getElementById('photoInput');
  console.log(photoInput);
  console.log(photoInput.files[0]);

  // if no photo was selected and the user clicks on submit 
  // aler the user to uploud photo first
  
  if (photoInput.files.length === 0){
    alert('please upload a photo');
    return
   }

  // select first from uploud and store it
  var selectedFile = photoInput.files[0];
// create new file readerobject so we czn read the function of the file
var reader = new FileReader();

  // set event handler when the submit button is clicked to read tge file and start setting up the api call

reader.onload = function(e){

  var base64Image = e.target.result;
  console.log(base64Image)


  var apiKey = 'WNlJPfiQerdxBr9fQy6s7yGljQZ5MsQy911akAx5pn744qT8LB';
  var latitude = 49.207;
  var longtitude = 16.608;
  var health = 'all';
  var similarImages = true;
  var details = 'common_names,url,description,taxonomy,rank,gbif_id,inaturalist_id,image,synonyms,edible_parts,watering,propagation_methods,treatment,cause';
  var language = 'en';
  var apiPlantIDUrl = `https://plant.id/api/v3/identification?details=${details}&language=${language}`;
}
   // make our first API call to the plant id dtabase 
axios.post(
  apiPlantIDUrl, 
  {
    images: [base64Image],
    latitude: latitude,
    longtitude: longtitude,
    health: health,
    similarImages: similarImages
  },
   {
     headers: {
      'api-Key': apikey,
       'content-type': 'application/json'
     }
   }
 )


}


// MsyfBz4bd54Pa6GTQCvcnwrtU1TG7ULrSDFAeJZSiCklzEBpaA