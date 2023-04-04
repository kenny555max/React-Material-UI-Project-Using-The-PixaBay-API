export const fetchImages = (value, amount) => dispatch => {
    if (value !== null){
        fetch(`https://pixabay.com/api/?key=34391573-b77887b6867f1eca3a329b08c&q=${value}=photo&safesearch=true&per_page=${amount}`)
            .then(res => res.json())
            .then(res => dispatch({ type: 'FETCH_IMAGES', payload: res.hits }))
    }
}