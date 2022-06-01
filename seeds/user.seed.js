const User = require("../models/User.model");

const users = [
  {
    type: "mentor",
    username: "aleixAbuli",
    email: "baleix@ironhack.com",
    password: "",
    aboutMe: "I've been a graphic designer/community manager for the last two years but right now I hope to become a great developer.",
    profileImg: "https://ca.slack-edge.com/T02CQ4EN4-U02KX5RSJKD-dfc890210a1c-512",
    course: "Web Development",
    graduationYear: 2022,
    skills: ["REACT", "REDUX", "NODE", "MONGODB", "JAVASCRIPT", "CSS", "HTML"],
    ocuppation: "Teacher Assistant",
    company: "Ironhack",
    posts: 
      {
        image: " ",
        user: "aleixAbuli",
        title: "How to determine if a number is odd in JS",
        text: 
          "
            function isOdd(num) => return num % 2
            console.log('1 is ' + isOdd(1))
            console.log('2 is ' + isOdd(2))
            console.log('3 is ' + isOdd(3))
            console.log('4 is ' + isOdd(4))
          "
        ,
        comments: "",
      },
  },
  {
    type: "mentor",
    name: "marcoSantonastasi",
    email: "marco@ironhack.com",
    password: "",
    aboutMe: "I run my own engineering firm and I am an instructor in software engineering.",
    profileImg: "https://avatars.githubusercontent.com/u/44085372?v=4",
    course: "Web Development",
    graduationYear: 2020,
    skills: ["REACT", "REDUX", "NODE", "MONGODB", "JAVASCRIPT", "CSS", "HTML"],
    ocuppation: "Software Engineering Instructor",
    company: "Ironhack",
    posts: 
      {
        image: " ",
        user: "marcoSantonastasi",
        title: "How do I loop through or enumerate a JavaScript object?",
        text: 
          "
            var p = {
              'p1': 'value1',
              'p2': 'value2',
              'p3': 'value3'
            };
            How do I loop through all of p's elements (p1, p2, p3...) and get their keys and values?
          ",
        comments: 
          "
            You can use the for-in loop as shown by others. However, you also have to make sure that the key you get is an actual property of an object, and doesn't come from the prototype.
          ",
      },
  },
  {
    type: "mentee",
    name: "pabloDellacassa",
    email: "pablodellacassa@ironhack.com",
    password: "",
    aboutMe: "In this profile you can check a little bit of the personal projects and this is are the main languages used",
    profileImg: "https://ca.slack-edge.com/T02CQ4EN4-U036UER4GG2-d4e588552193-512",
    course: "Web Development",
    graduationYear: 2022,
    skills: ["VUE", "SQL", "JAVASCRIPT", "CSS", "HTML", "NODE", "MONGODB"],
    ocuppation: "Student",
    company: " ",
    posts: 
      {
        image: " ",
        user: "pabloDellacassa",
        title: "Accesing the index in 'for' loops",
        text: 
          "
            xs = [8, 23, 45]
            for x in xs:
                print('item #{} = {}'.format(index, x))

            Desired output:
            item #1 = 8
            item #2 = 23
            item #3 = 45
          ",
        comments: "for idx, x in enumerate(xs): print(idx, x)",
      },
  },
  {
    type: "mentee",
    name: "samyAli",
    email: "samy@ironhack.com",
    password: "",
    aboutMe: "Learning by doing",
    profileImg: "https://avatars.githubusercontent.com/u/102321253?v=4",
    course: "Web Development",
    graduationYear: 2022,
    skills: ["HTML", "Jest", "Svelte", "React","MongoDB"],
    ocuppation: "Student",
    company: "Ironhack",
    posts: 
      {
        image: " ",
        title: "How to use the 'for' loop in JavaScript?",
        user: "samyAli",
        text: 
          "
            var linkElement = document.getElementById('BackButton');
            var loc_array = document.location.href.split('/');
            var newT = document.createTextNode(unescape(capWords(loc_array[loc_array.length-2]))); 
            linkElement.appendChild(newT);
            Currently it takes the second to last item in the array from the URL. However, I want to do a check for the last item in the array to be 'index.html' and if so, grab the third to last item instead.
          ",
        comments: 
          "
            if (loc_array.at(-1) === 'index.html') {
              // do something
            } else {
              // something else
            }
          ",
      },
  },
];
