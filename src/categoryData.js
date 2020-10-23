import firebase from  "firebase";

var fetchedData = [];

const getCategoryData = async (callback) => {
      //  Getting data from firebase
    
      // firebase.database().ref("Category").on("value", snapshot => {
      //   console.log(snapshot)
      //   snapshot.forEach((snap) => {
      //       fetchedData.push({
      //         link:snap.val().link,
      //         title:snap.val().title,
      //         iconimage:snap.val().icon,
      //         backgroundImage:snap.val().background,
      //         carouselImages:snap.val().caroausal,
      //       });
      //       console.log(fetchedData)
      //     })
        
        
        
      //   });


  const snapshot = await firebase.database().ref("Category").once("value");
    console.log(snapshot)
    snapshot.forEach((snap) => {
      fetchedData.push({
        link: snap.val().link,
        title: snap.val().title,
        iconimage: snap.val().icon,
        backgroundImage: snap.val().background,
        carouselImages: snap.val().caroausal,
      });
      // console.log(fetchedData)
      
    })
  callback(fetchedData)


}
const ba =async ()=>{




// await getCategoryData();
console.log("oawan")
}
ba();

export default getCategoryData;
