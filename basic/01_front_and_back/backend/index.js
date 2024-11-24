import 'dotenv/config'
import express from 'express'


const app=express()
const port=process.env.PORT || 4000

const Jdata=[
    {
      "_id": "6742063d834c4d0d3c44b3bb",
      "index": 0,
      "guid": "4deb4e3e-e824-4700-97b0-07b2d81e105a",
      "isActive": true,
      "balance": "$1,378.12",
      "picture": "http://placehold.it/32x32",
      "age": 30,
      "eyeColor": "blue",
      "name": "Burt Blanchard",
      "gender": "male",
      "company": "ZORROMOP",
      "email": "burtblanchard@zorromop.com",
      "phone": "+1 (876) 463-2935",
      "address": "312 Russell Street, Lopezo, Marshall Islands, 7620",
      "about": "Do ex do ullamco id id reprehenderit magna nostrud nulla ea occaecat culpa. Culpa deserunt voluptate incididunt ut in cillum elit eiusmod irure. Aliquip velit ea elit dolor cillum. Adipisicing commodo sit do fugiat est.\r\n",
      "registered": "2021-12-15T11:36:22 -06:-30",
      "latitude": 35.854298,
      "longitude": -131.452397,
      "tags": [
        "elit",
        "cupidatat",
        "adipisicing",
        "sint",
        "in",
        "laboris",
        "do"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Serena Dyer"
        },
        {
          "id": 1,
          "name": "Josie Beach"
        },
        {
          "id": 2,
          "name": "Paulette Carney"
        }
      ],
      "greeting": "Hello, Burt Blanchard! You have 3 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "6742063d08db551bedfb61ff",
      "index": 1,
      "guid": "b3997b42-823b-49c5-ba69-f3b667efe9e1",
      "isActive": false,
      "balance": "$2,243.45",
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "eyeColor": "blue",
      "name": "Middleton Bennett",
      "gender": "male",
      "company": "ASSISTIA",
      "email": "middletonbennett@assistia.com",
      "phone": "+1 (840) 404-2529",
      "address": "905 Dare Court, Coaldale, Vermont, 3914",
      "about": "Nulla cillum sint id sit ut elit duis duis enim. Anim mollit aliquip adipisicing est esse consectetur labore laboris anim deserunt qui. Aute irure cillum enim ex qui voluptate est sunt voluptate sint.\r\n",
      "registered": "2021-06-23T11:04:39 -06:-30",
      "latitude": -0.221915,
      "longitude": -17.866318,
      "tags": [
        "laboris",
        "amet",
        "esse",
        "non",
        "reprehenderit",
        "duis",
        "nulla"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Mays Nieves"
        },
        {
          "id": 1,
          "name": "Samantha Heath"
        },
        {
          "id": 2,
          "name": "Marta Kent"
        }
      ],
      "greeting": "Hello, Middleton Bennett! You have 4 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "6742063d70f5c95c2f4928cb",
      "index": 2,
      "guid": "6c3c7349-a048-47e0-8ca5-d54b0801bb79",
      "isActive": false,
      "balance": "$2,536.61",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "eyeColor": "green",
      "name": "Ayala Stewart",
      "gender": "male",
      "company": "BALUBA",
      "email": "ayalastewart@baluba.com",
      "phone": "+1 (911) 582-3086",
      "address": "170 Tennis Court, Albany, Oklahoma, 7559",
      "about": "Aliquip voluptate irure aute pariatur dolore consequat laborum esse deserunt ea reprehenderit qui. Dolor et anim pariatur enim eiusmod dolor culpa id esse officia do. Cupidatat enim aliquip excepteur deserunt sint exercitation nisi dolor commodo fugiat id proident Lorem sunt. Excepteur Lorem aliquip labore mollit adipisicing ex exercitation et consequat aute. Tempor anim labore cupidatat qui non labore ipsum velit consectetur anim non. Ea eiusmod adipisicing minim est nisi sunt do dolor ipsum eiusmod nisi esse non.\r\n",
      "registered": "2022-05-03T12:37:16 -06:-30",
      "latitude": -52.720638,
      "longitude": 108.600894,
      "tags": [
        "est",
        "elit",
        "aliquip",
        "officia",
        "sint",
        "labore",
        "reprehenderit"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Hansen Mcconnell"
        },
        {
          "id": 1,
          "name": "Joyner Wong"
        },
        {
          "id": 2,
          "name": "Gamble Rutledge"
        }
      ],
      "greeting": "Hello, Ayala Stewart! You have 6 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "6742063d272da10810e5162b",
      "index": 3,
      "guid": "902dc870-0d79-4f58-aece-3ddf8563c9f9",
      "isActive": false,
      "balance": "$2,409.34",
      "picture": "http://placehold.it/32x32",
      "age": 29,
      "eyeColor": "blue",
      "name": "Lessie Pacheco",
      "gender": "female",
      "company": "VANTAGE",
      "email": "lessiepacheco@vantage.com",
      "phone": "+1 (903) 490-2329",
      "address": "991 Forbell Street, Canoochee, Iowa, 8179",
      "about": "Est nulla anim ullamco laboris ad. Sint ea culpa pariatur pariatur consectetur laborum fugiat. Commodo ut deserunt sunt consectetur exercitation magna tempor. Lorem aute ad deserunt amet aliquip.\r\n",
      "registered": "2018-08-27T06:22:33 -06:-30",
      "latitude": 42.09834,
      "longitude": 159.457333,
      "tags": [
        "nisi",
        "in",
        "consectetur",
        "minim",
        "eu",
        "eiusmod",
        "do"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Elaine Peck"
        },
        {
          "id": 1,
          "name": "Cleveland Austin"
        },
        {
          "id": 2,
          "name": "Shawn Weiss"
        }
      ],
      "greeting": "Hello, Lessie Pacheco! You have 3 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "6742063d9f3a5f76ccbfdeb0",
      "index": 4,
      "guid": "e29ba751-dc1c-4b76-8b79-3410b035a430",
      "isActive": true,
      "balance": "$2,791.67",
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "eyeColor": "brown",
      "name": "Buchanan Gilliam",
      "gender": "male",
      "company": "ECOLIGHT",
      "email": "buchanangilliam@ecolight.com",
      "phone": "+1 (840) 512-2656",
      "address": "590 Claver Place, Chalfant, Maryland, 2144",
      "about": "Est sint officia exercitation ex incididunt ad est non. Exercitation veniam velit cillum irure eiusmod. In duis dolor commodo aliquip in reprehenderit sit aute ullamco. Adipisicing do sit fugiat pariatur. Est ex quis non magna ut exercitation labore amet amet laboris ex. Mollit fugiat elit reprehenderit pariatur cillum deserunt enim.\r\n",
      "registered": "2021-02-22T06:41:23 -06:-30",
      "latitude": -4.000279,
      "longitude": 43.188468,
      "tags": [
        "veniam",
        "ex",
        "ex",
        "est",
        "eiusmod",
        "qui",
        "minim"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Addie Landry"
        },
        {
          "id": 1,
          "name": "Petersen Patterson"
        },
        {
          "id": 2,
          "name": "Jami Anthony"
        }
      ],
      "greeting": "Hello, Buchanan Gilliam! You have 2 unread messages.",
      "favoriteFruit": "strawberry"
    }
  ]

app.get('/home',(req,res)=>{
    res.send('Welcome to home page')
    
})
app.get('/user',(req,res)=>{
    res.json(Jdata)
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})