function changeImages(evt) {
    var ele = evt.target; // your element that generated event
    var mainImage = document.getElementById("i1");
    if(ele.tagName == 'IMG') {
        mainImage.src = ele.src; // assigns value of src
    }
}