import {  Grid, makeStyles } from "@material-ui/core";
import imgOne from "./assert/img-1.jpg";
import imgTwo from "./assert/img-2.jpg";
import imgThree from "./assert/img-3.jpg";
import CardItem from "./components/Card/Card";

const categories = [
  {
    id:1,
    img: imgOne,
    title: "Image",
    author: "author",
    cols: 4,
  },
  {
    id:2,
    img: imgTwo,
    title: "Image",
    author: "author",
    cols: 4,
  },
  {
    id:3,
    img: imgThree,
    title: "Image",
    author: "author",
    cols: 4,
  },
  {
    id:4,
    img: imgOne,
    title: "Image",
    author: "author",
  },
  {
    id:5,
    img: imgTwo,
    title: "Image",
    author: "author",
    cols: 4,
  },
  {
    id:6,
    img: imgThree,
    title: "Image",
    author: "author",
    cols: 4,
  },
  {
    id:7,
    img: imgOne,
    title: "Image",
    author: "author",
    cols: 4,
  },
  {
    id:8,
    img: imgTwo,
    title: "Image",
    author: "author",
    cols: 12,
  },
  {
    id:9,
    img: imgThree,
    title: "Image",
    author: "author",
    cols: 6,
  },
  {
    id:10,
    img: imgOne,
    title: "Image",
    author: "author",
    cols: 6,
  },
  {
    id:11,
    img: imgTwo,
    title: "Image",
    author: "author",
  },
  {
    id:12,
    img: imgThree,
    title: "Image",
    author: "author",
    cols: 4,
  },
];

const App = () => {
  return (
    <div >
  <Grid
  item
  container
  direction="row"
  alignItems="center"
  justifyContent="center"
>
 {categories.map((category)=>{
       return(
      <CardItem key={category.id} category={category}/>
       )
     })}
</Grid>

</div>
  );
};


export default App;
