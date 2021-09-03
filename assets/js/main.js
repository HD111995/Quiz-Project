let data=[
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
      question:"Which ocean lies on the east coast of the United States?",
      choice:["Eastern","Pacific","Indian","Atlantic"],
      answer:"Atlantic"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
      question:"Which is the world's highest mountain?",
      choice:["K2","Makalu","Mount Everest","Kilimanjaro"],
      answer:"Mount Everest"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
      question:"Which of these cities is not in Europe?",
      choice:["Prague","Moscow","Barcelona","Reykjavik"],
      answer:"Moscow"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
      question:"True or False: Iceland is covered in ice.",
      choice:[true,false],
      answer:false
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
      question:"The United Kingdom is comprised of how many countries?",
      choice:[1,2,3,4],
      answer:4
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
      question:"Which of the following countries do not border France?",
      choice:["Germany","Netherlands","Spain","Italy"],
      answer:"Netherlands"
    },
      { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
      question:"Which U.S. state is the Grand Canyon located in?",
      choice:["Wyoming","Arizona","New Mexico","Nevada"],
      answer:"Arizona"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
      question:"Which is the smallest country, measured by total land area?",
      choice:["Maldives","Monaco","Vatican"],
      answer:"Vatican"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
      question:"Which is the longest river in the world?",
      choice:["Amazon River","Congo River","Yellow River","Nile River"],
      answer:"Nile River"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
      question:"Which is the largest body of water?",
      choice:["indian Ocean","Pacific Ocean","Atlantic Ocean","Nile River"],
      answer:"Pacific Ocean"
    }
]

//helping function
//function to select HTML Elements
let geter = (id) =>{
  return document.getElementById(id) 
}

//function to create HTML Elements
let eltCreater = (elt)=>{
    return document.createElement(elt)
}

//function to give the HTML Elements an Attribute 
let att = (elt,at,val)=>{
   elt.setAttribute(at,val);
  
}

//defining some variables
let a = 'article'
let b = 'button'
let divMain = geter('content');

//Start to genrate HTML Elements using Loops counting to Array Length 
//+ Array Data + Dynamic Variables
for ( i=0 ; i < data.length ; i++ ){
    //genrate article with help of Dynamic Variables
    window[a+i] = eltCreater("article") 
    att(window[a+i],'id',a+i)
    //genrating images by taking values from the objects in data Array 
    let img = eltCreater('img')
    att(img,'src',data[i].url)
    //genrating h3 elemente to but the
    //question value from objects in them
    let ques = eltCreater('h3')
    ques.textContent = data[i].question
    //but img and h3 inside the articles
    window[a+i].appendChild(img)
    window[a+i].appendChild(ques) 
    //genrating button and giving them the
    //values in the Object.choice
    //again using Dynamic Variables with a loop 
    for ( j = 0 ; j < data[i].choice.length ; j++ ){
        window[b+j] = eltCreater("button")
        window[b+j].textContent = data[i].choice[j] 
        window[a+i].appendChild(window[b+j])
        }
        
    
    divMain.appendChild(window[a+i]);   
}

//comparing the answers
//call my button as array
let button = document.querySelectorAll('button')
//defining counters
let counter = 0;
let stableCounter = 0;
//loop my buttons Array
button.forEach(elt =>{
    //giving my Buttons click Event
    elt.addEventListener('click',ev =>{
        //if the user clicked the right button do
        if (ev.target.textContent == String(data[stableCounter].answer)){
            ev.target.style.backgroundColor = "rgb(68, 218, 68)"
            counter += 1;
            stableCounter +=1;
            window.location.assign('#article'+stableCounter)
        //else do
        }else{
            ev.target.style.backgroundColor = "rgb(119, 20, 20)"
            if(counter > 0){
                counter -=1;
            }
            //reset my Buttons Background in Black after 1.5second
            setTimeout(() => {
                ev.target.style.backgroundColor = "#000"
            }, 1500);
        }
    })
})