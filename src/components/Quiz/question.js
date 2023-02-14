import React from 'react'

function question() {
    const question = [
        {
            questionText: "Which country are you in if you're on the largest island in the world?",
            answerOptions: [
              { answerText: 'Japan' , rightChoice: false } ,
              { answerText: 'Greenland' , rightChoice: true } ,
              { answerText: 'Philippines' , rightChoice: false } ,
              { answerText: 'New Zealand' , rightChoice: false }
            ]
          },
          {
            questionText: 'What country are you in if you find the currency "baht"?',
            answerOptions: [
              { answerText: 'Philippines' , rightChoice: false } ,
              { answerText: 'Myanmar' , rightChoice: false } ,
              { answerText: 'Vietnam' , rightChoice: false } ,
              { answerText: 'Thailand' , rightChoice: true }
            ]
          },
          {
            questionText: 'What country is Phnom Penh the capital of?',
            answerOptions: [
              { answerText: 'Cambodia' , rightChoice: true } ,
              { answerText: 'Oman' , rightChoice: false } ,
              { answerText: 'Australia' , rightChoice: false } ,
              { answerText: 'Greece' , rightChoice: false }
            ]
          },
          {
            questionText: 'The first modern Olympic Games were held in which country?',
            answerOptions: [
              { answerText: 'Sweden' , rightChoice: false } ,
              { answerText: 'Greece' , rightChoice: true } ,
              { answerText: 'Australia' , rightChoice: false } ,
              { answerText: 'India' , rightChoice: false }
            ]
          },
          {
            questionText: 'Where is the Gobi Desert located?',
            answerOptions: [
              { answerText: 'Cuba' , rightChoice: false } ,
              { answerText: 'Mongolia' , rightChoice: true } ,
              { answerText: 'Holland' , rightChoice: false } ,
              { answerText: 'Japan' , rightChoice: false }
            ]
          },
    ]
  return (
    <div>question</div>
  )
}

export default question