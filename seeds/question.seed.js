const Question = require("..//question.model");

const questions = [
  {
        title: "How to determine if a number is odd in JS",
        text: 
          "
            function isOdd(num) => return num % 2
            console.log('1 is ' + isOdd(1))
            console.log('2 is ' + isOdd(2))
            console.log('3 is ' + isOdd(3))
            console.log('4 is ' + isOdd(4))
          ",
        imageUrl: " ",
        user: "aleixAbuli",
        comments: "",
  },

  {
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
    image: " ",
    user: "marcoSantonastasi"
    comments: 
      "
        You can use the for-in loop as shown by others. However, you also have to make sure that the key you get is an actual property of an object, and doesn't come from the prototype.
      ",
  },

  {
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
    image: " ",
    user: "pabloDellacassa",
    comments: "for idx, x in enumerate(xs): print(idx, x)",
  },

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

]