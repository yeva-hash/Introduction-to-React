import logo from './logo.svg';
import './App.css';
import {BookComponent,GroupComponent, RecipeComponent} from './Components'


function App() {
  const Book = {
    name: "1984",
    author: "George Orwell",
    genre: "Fantastic",
    amountOfPages: "320",
    reviews: "https://www.theguardian.com/childrens-books-site/2016/may/29/1984-george-orwell-review"
  }
  const Group = {
    name: "The Beatles",
    members: "John Lennon, Paul McCartney, George Harrison, Ringo Starr",
    albums: '"Abbey Road", "The Beatles", "Help!", "Revolver", "Sgt. Pepper’s Lonely Hearts Club Band"...',
  }
  const Recipe = {
    name:"Ukrainian borsch",
    ingredients: "1 small onion, 1 medium carrot, 1 medium parsley root, medium bunch of parsley,1 bay leaf, peppercorns, salt, crushed bacon and sour cream for serving",
    sequence:"Pour a couple of tablespoons of olive or sunflower oil into a saucepan, add finely chopped onions and grated carrots. Fry until golden brown. At this time, add a little oil to the pan and throw in the grated or chopped beet. Immediately sprinkle a little sugar on the beet, and sprinkle a little with lemon juice so that it caramelizes and does not lose color. Simmer over low heat. Stir occasionally. As the onions and carrots are browned, add flour and also fry a little. Fill with boiling water, which will save time. And we are waiting for it to boil. As it boils, we throw chopped bell peppers and potatoes. And add tomato to the beets, I add thick homemade juice. (tomatoes with seeds and peels in a meat grinder) 1 glass. Mix. As the potatoes are almost ready, add the chopped cabbage. Season with salt, pepper, seasonings (basil, oregano, etc.) and bay leaves. Finely chop the garlic and, as the borsch boil, throw in the garlic and beetroot dressing. Let it boil and turn it off. Cover with a lid and leave to brew for 5 minutes. Lunch is ready!!!",
  }
  return (
    <>
    <BookComponent name={Book.name} author = {Book.author} genre = {Book.genre} amountOfPages={Book.amountOfPages} reviews = {Book.reviews} />
    <hr></hr>
    <GroupComponent name={Group.name} members = {Group.members} albums = {Group.albums} />
    <hr></hr>
    <RecipeComponent name={Recipe.name} ingredients={Recipe.ingredients} sequence={Recipe.sequence}/>  
    </>
  );
}

export default App;
