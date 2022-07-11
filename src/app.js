const express = require('express');
const port = process.env.PORT || 5556
const hbs = require('hbs');//template engine
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/main.js');
const Details = require("./models/Details.js");
const Slider = require('./models/Slider.js')
const Service = require("./models/Service.js");
// app.get("/", (req, res)=>{
//   res.send("this is from sever side");
// })

// /static/css/style.css
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use('/static', express.static("public"));
app.use('', routes)


//tamplate engine
app.set('view engine', 'hbs')
app.set("views", "views")
hbs.registerPartials("views/partials");

//db connection
mongoose.connect("mongodb://localhost/ResponsiveDevWeb", ()=>{
  console.log("db connected");
  // Details.create({
  //   brandName: "Info Technical Solution",
  //   brandIconeUrl:"https://shoutcart.com/uploads/gig/bd6f3a23cd5294a2370b09bc413f3331.png",
  //   links:[
  //     {
  //       lable:"Home",
  //       url:"/"
  //     },
  //     {
  //       lable:"Services",
  //       url:"/services"
  //     },
  //     {
  //       lable:"Gallery",
  //       url:"/gallery"
  //     },
  //     {
  //       lable:"About",
  //       url:"/about"
  //     },
  //     {
  //       lable:"Contact-us",
  //       url:"/contact-us"
  //     }
  //   ]
  // })

//   Slider.create([
//     {
//     title: 'Learn Java in very easy way',
//     subTitle: "Java is one of the most popolar language",
//     imageUrl:"/static/images/slider1.jpg"
//   },    
//   {
//     title: 'WWhat is Django in python',
//     subTitle: "Java is one of the most popolar language",
//     imageUrl:"/static/images/slider2.png"
//   },    {
//     title: 'Dont forget about JavaScript',
//     subTitle: "Java is one of the most popolar language",
//     imageUrl:"/static/images/slider3.jpg"
//   },
//   ]
// )

//   Service.create([
//     {
//       icon:'fa-solid fa-code',
//       title:'Provide Best Courses',
//       description:'We provide courses that helps out student in learning and in placements',
//       linkText:'Check',
//       link:'https://www.youtube.com/watch?v=6FsWwIaxMho'
//   },
//   {
//     icon:'fa-solid fa-code',
//     title:'Provide Best Courses',
//     description:'We provide courses that helps out student in learning and in placements',
//     linkText:'Check',
//     link:'https://www.youtube.com/watch?v=6FsWwIaxMho'
//   },
//   {
//     icon:'fa-solid fa-code',
//     title:'Provide Best Courses',
//     description:'We provide courses that helps out student in learning and in placements',
//     linkText:'Check',
//     link:'https://www.youtube.com/watch?v=6FsWwIaxMho'
//   },
//   {
//     icon:'fa-solid fa-code',
//     title:'Provide Best Courses',
//     description:'We provide courses that helps out student in learning and in placements',
//     linkText:'Check',
//     link:'https://www.youtube.com/watch?v=6FsWwIaxMho'
//   },
//   {
//     icon:'fa-solid fa-code',
//     title:'Provide Best Courses',
//     description:'We provide courses that helps out student in learning and in placements',
//     linkText:'Check',
//     link:'https://www.youtube.com/watch?v=6FsWwIaxMho'
//   },
//   {
//     icon:'fa-solid fa-code',
//     title:'Provide Best Courses',
//     description:'We provide courses that helps out student in learning and in placements',
//     linkText:'Check',
//     link:'https://www.youtube.com/watch?v=6FsWwIaxMho'
//   }
// ])

});


app.listen(port, ()=>{
  console.log(`server running on port ${port}.... `);
})