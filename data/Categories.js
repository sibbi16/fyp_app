import react, { useState, useEffect } from "react";
import axios from "axios";
import { BaseUrl } from "../screens/Urls";


const Categories = [
   {id:1,name:"Oil",image:require('../assets/oil.jpg')},
   {id:1,name:"Ghee",image:require('../assets/ghee.jpg')},
   {id:1,name:"Juices",image:require('../assets/juice.jpg')},
   {id:1,name:"Frozen",image:require('../assets/oil.jpg')},
   {id:1,name:"Dairy",image:require('../assets/dairy.jpg')}
];
export default Categories;
