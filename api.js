const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
//grab book card location
const bookDiv = document.getElementById('books');
const searchCount = document.getElementById('search-count');
const spinner = document.getElementById('spinner');

searchBtn.addEventListener('click',function(){
    const search = searchInput.value;
    searchCount.innerHTML = '';//clearing prev cards 
    bookDiv.innerHTML = ''; //clearing prev results

    const div = document.createElement('div');

    div.classList.add('text-danger');
    if(search ===''){
        `<h5 class="text-center"> search field should be filled!</h5>`;
        return searchCount.appendChild(div);//to get out from this area
    }
    loadUser(search); // taking user data
})

//loading fro api

const loadUser = search =>{
    const url = `https://openlibrary.org/search.json?q=${search}`;
    searchInput.value = "";
    //after getting the result 
    spinner.classList.remove('d-none');//now spin will occur!
    fetch(url)
    .then (res => res.json())
    .then (data => displayData(data));
};

//showing the fetched data

const showData = bookDetail =>{
    console.log(bookDetail);

    if(bookDetail.docs.length ===0){
        div.innerHTML = `<h1 class="text-center">No results!</h1>`;
    }
    else{
        div.innerHTML = `<p>Showing ${bookDetail.docs.length} out of ${bookDetails.numFound} results</p>`;
    }
    searchCount.appendChild(div);


    bookDiv.appendChild(div);

    spinner.classList.add('d-none');
}