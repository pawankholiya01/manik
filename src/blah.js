import React from "react";
import { Container } from "reactstrap";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import BlogsMain from "views/categories/BlogsMain";

import {  Route, Redirect } from "react-router-dom"

const travelBlogs = [
  {
    id: 1,
    title: "Travel to North",
    category: "Travel",
    text:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    image: require("assets/img/faces/joe-gardner-2.jpg"),
    represent: "hide",
    date: "Oct 2020",
  },
  {
    id: 2,
    title: "Through the wild",
    category: "Travel",
    text:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
    image: require("assets/img/faces/kaci-baum-2.jpg"),
    represent: "hide",
    date: "Nov 2020",
  }]

function Blah({ fetchedData}) {
  const f = fetchedData
  console.log({...fetchedData});
  console.log(typeof(travelBlogs));
  fetchedData.forEach(element => {
    console.log(element);
    
  });
  fetchedData = Object.keys(fetchedData)
  
  console.log((fetchedData))
  return (
  <h1>Blah</h1>);
  
  
}

export default Blah;
