export function BookComponent(props) {
    return(
        <div>
            Book
            <p>Name: {props.name}</p>
            <p>Author: {props.author}</p>
            <p>Genre: {props.genre}</p>
            <p>Amount of pages: {props.amountOfPages}</p>
            <p>Reviews: {props.reviews}</p>
        </div>
    )
}
export function GroupComponent(props) {
    return(
        <div>
            Musicial Group
            <p>Name: {props.name}</p>
            <p>Members: {props.members}</p>
            <p>Albums: {props.albums}</p>
        </div>
    )
}
export function RecipeComponent(props) {
    return(
        <div>
            Recipe
            <p>Name: {props.name}</p>
            <p>Members: {props.ingredients}</p>
            <p>Albums: {props.sequence}</p>
        </div>
    )
}