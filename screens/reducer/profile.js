import { getType } from "../action/profile";

export default function profileData(state = {
    "profile":"",
    "id":"",
    "firstName":"",
    "lastName":"",
    "email":"",
    "phone":"",
    "userList":[
        {
            "id": "5c8a80f52dfee238898d64cf",
            "firstName": "Phoebe",
            "lastName": "Monroe",
            "email": "phoebemonroe@furnafix.com",
            "phone": "(903) 553-3410"
        },
        {
            "id": "5c8a80f575270ddb54a18f86",
            "firstName": "Lidia",
            "lastName": "Wilkins",
            "email": "lidiawilkins@furnafix.com",
            "phone": "(997) 482-3866"
        },
        {
            "id": "5c8a80f57a27f272ab4272f9",
            "firstName": "Gertrude",
            "lastName": "Mccormick",
            "email": "gertrudemccormick@furnafix.com",
        },
        {
            "id": "5c8a80f5e2ad4c1edc5cc5d9",
            "firstName": "Maxine",
            "lastName": "Brady",
            "email": "maxinebrady@furnafix.com",
            "phone": "(919) 469-2468"
        },
        {
            "id": "5c8a80f5437a24a66ac7e0c5",
            "firstName": "Willie",
            "lastName": "Gonzalez",
            "phone": "(892) 456-3603"
        },
        {
            "id": "5c8a80f5a7d3d251ba82df41",
            "firstName": "Oliver",
            "lastName": "Floyd",
            "email": "oliverfloyd@furnafix.com",
            "phone": "(953) 421-2772"
        },
        {
            "id": "5c8a80f5d3c01af26b266b13",
            "firstName": "Elliott",
            "lastName": "Fry",
            "email": "elliottfry@furnafix.com",
            "phone": "(869) 557-2814"
        },
        {
            "id": "5c8a80f597cdf9c2fc4f8466",
            "firstName": "Hancock",
            "lastName": "Foreman"
        },
        {
            "id": "5c8a80f537cded38d718ecf5",
            "firstName": "Hood",
            "lastName": "Kline",
            "email": "hoodkline@furnafix.com",
            "phone": "(997) 596-2026"
        },
        {
            "id": "5c8a80f531ed87bee8d951d6",
            "firstName": "Adams",
            "lastName": "Phelps",
            "email": "adamsphelps@furnafix.com",
            "phone": "(847) 570-2622"
        },
        {
            "id": "5c8a80f537a8602ee2be6b6d",
            "firstName": "Ramos",
            "lastName": "Nieves",
            "email": "ramosnieves@furnafix.com",
            "phone": "(808) 550-3692"
        },
        {
            "id": "5c8a80f57ba5cd82a37a039c",
            "firstName": "White",
            "lastName": "Marsh",
            "email": "whitemarsh@furnafix.com",
            "phone": "(943) 403-2609"
        },
        {
            "id": "5c8a80f5d502bbf9f69e8b6d",
            "firstName": "Concepcion",
            "lastName": "Crane",
            "email": "concepcioncrane@furnafix.com",
            "phone": "(992) 499-2570"
        },
        {
            "id": "5c8a80f5000661cb7e325e17",
            "firstName": "Rhonda",
            "lastName": "Mckinney",
            "email": "rhondamckinney@furnafix.com",
            "phone": "(887) 477-3521"
        },
        {
            "id": "5c8a80f59283e24a4e526335",
            "firstName": "Hilda",
            "lastName": "Holder",
        },
        {
            "id": "5c8a80f52aec26a5edc4e17c",
            "firstName": "Burks",
            "lastName": "Aguilar",
            "email": "burksaguilar@furnafix.com",
            "phone": "(847) 431-2033"
        },
        {
            "id": "5c8a80f5b3a1e477360db964",
            "firstName": "Lorene",
            "lastName": "Stewart",
            "email": "lorenestewart@furnafix.com",
            "phone": "(895) 440-2387"
        },
        {
            "id": "5c8a80f57dab375acf5030c1",
            "firstName": "Susana",
            "lastName": "Short",
            "email": "susanashort@furnafix.com",
            "phone": "(831) 501-3483"
        },
        {
            "id": "5c8a80f523e488dd917a6e45",
            "firstName": "Lawson",
            "lastName": "French",
            "email": "lawsonfrench@furnafix.com",
            "phone": "(860) 430-3555"
        },
        {
            "id": "5c8a80f5e3d1f2f2967c4621",
            "firstName": "Paula",
            "lastName": "Turner",
            "email": "paulaturner@furnafix.com",
            "phone": "(873) 553-3808"
        }
    ],
}, action){
    switch (action.type) {
        case getType.USERLIST:
            return {
                ...state,
                "userList": action.payload,
            };
        case getType.FIRSTNAME:
            return {
                ...state,
                "firstName": action.payload,
            };
        case getType.ID:
            return {
                ...state,
                "id": action.payload,
            };
        case getType.LASTNAME:
            return {
                ...state,
                "lastName": action.payload,
            };
        case getType.EMAIL:
            return {
                ...state,
                "email": action.payload,
            };
        case getType.PHONE:
            return {
                ...state,
                "phone": action.payload,
            };
        default:
            return state;
    }
}

// import { getType } from "../action/profile";

// export default function profileData(state = {
//     "profile":"",
//     "id":"",
//     "firstName":"",
//     "lastName":"",
//     "email":"",
//     "phone":"",
//     "userList":[
//         {
//             "id": "5c8a80f52dfee238898d64cf",
//             "firstName": "Phoebe",
//             "lastName": "Monroe",
//             "email": "phoebemonroe@furnafix.com",
//             "phone": "(903) 553-3410"
//         },
//         {
//             "id": "5c8a80f575270ddb54a18f86",
//             "firstName": "Lidia",
//             "lastName": "Wilkins",
//             "email": "lidiawilkins@furnafix.com",
//             "phone": "(997) 482-3866"
//         },
//         {
//             "id": "5c8a80f57a27f272ab4272f9",
//             "firstName": "Gertrude",
//             "lastName": "Mccormick",
//             "email": "gertrudemccormick@furnafix.com",
//         },
//         {
//             "id": "5c8a80f5e2ad4c1edc5cc5d9",
//             "firstName": "Maxine",
//             "lastName": "Brady",
//             "email": "maxinebrady@furnafix.com",
//             "phone": "(919) 469-2468"
//         },
//         {
//             "id": "5c8a80f5437a24a66ac7e0c5",
//             "firstName": "Willie",
//             "lastName": "Gonzalez",
//             "phone": "(892) 456-3603"
//         },
//         {
//             "id": "5c8a80f5a7d3d251ba82df41",
//             "firstName": "Oliver",
//             "lastName": "Floyd",
//             "email": "oliverfloyd@furnafix.com",
//             "phone": "(953) 421-2772"
//         },
//         {
//             "id": "5c8a80f5d3c01af26b266b13",
//             "firstName": "Elliott",
//             "lastName": "Fry",
//             "email": "elliottfry@furnafix.com",
//             "phone": "(869) 557-2814"
//         },
//         {
//             "id": "5c8a80f597cdf9c2fc4f8466",
//             "firstName": "Hancock",
//             "lastName": "Foreman"
//         },
//         {
//             "id": "5c8a80f537cded38d718ecf5",
//             "firstName": "Hood",
//             "lastName": "Kline",
//             "email": "hoodkline@furnafix.com",
//             "phone": "(997) 596-2026"
//         },
//         {
//             "id": "5c8a80f531ed87bee8d951d6",
//             "firstName": "Adams",
//             "lastName": "Phelps",
//             "email": "adamsphelps@furnafix.com",
//             "phone": "(847) 570-2622"
//         },
//         {
//             "id": "5c8a80f537a8602ee2be6b6d",
//             "firstName": "Ramos",
//             "lastName": "Nieves",
//             "email": "ramosnieves@furnafix.com",
//             "phone": "(808) 550-3692"
//         },
//         {
//             "id": "5c8a80f57ba5cd82a37a039c",
//             "firstName": "White",
//             "lastName": "Marsh",
//             "email": "whitemarsh@furnafix.com",
//             "phone": "(943) 403-2609"
//         },
//         {
//             "id": "5c8a80f5d502bbf9f69e8b6d",
//             "firstName": "Concepcion",
//             "lastName": "Crane",
//             "email": "concepcioncrane@furnafix.com",
//             "phone": "(992) 499-2570"
//         },
//         {
//             "id": "5c8a80f5000661cb7e325e17",
//             "firstName": "Rhonda",
//             "lastName": "Mckinney",
//             "email": "rhondamckinney@furnafix.com",
//             "phone": "(887) 477-3521"
//         },
//         {
//             "id": "5c8a80f59283e24a4e526335",
//             "firstName": "Hilda",
//             "lastName": "Holder",
//         },
//         {
//             "id": "5c8a80f52aec26a5edc4e17c",
//             "firstName": "Burks",
//             "lastName": "Aguilar",
//             "email": "burksaguilar@furnafix.com",
//             "phone": "(847) 431-2033"
//         },
//         {
//             "id": "5c8a80f5b3a1e477360db964",
//             "firstName": "Lorene",
//             "lastName": "Stewart",
//             "email": "lorenestewart@furnafix.com",
//             "phone": "(895) 440-2387"
//         },
//         {
//             "id": "5c8a80f57dab375acf5030c1",
//             "firstName": "Susana",
//             "lastName": "Short",
//             "email": "susanashort@furnafix.com",
//             "phone": "(831) 501-3483"
//         },
//         {
//             "id": "5c8a80f523e488dd917a6e45",
//             "firstName": "Lawson",
//             "lastName": "French",
//             "email": "lawsonfrench@furnafix.com",
//             "phone": "(860) 430-3555"
//         },
//         {
//             "id": "5c8a80f5e3d1f2f2967c4621",
//             "firstName": "Paula",
//             "lastName": "Turner",
//             "email": "paulaturner@furnafix.com",
//             "phone": "(873) 553-3808"
//         }
//     ],
//     "updatedList":null
// }, action){
//     switch (action.type) {
//         case getType.USERLIST:
//             return {
//                 ...state,
//                 "updatedList": action.payload,
//             };
//         case getType.FIRSTNAME:
//             return {
//                 ...state,
//                 "firstName": action.payload,
//             };
//         case getType.ID:
//             return {
//                 ...state,
//                 "id": action.payload,
//             };
//         case getType.LASTNAME:
//             return {
//                 ...state,
//                 "lastName": action.payload,
//             };
//         case getType.EMAIL:
//             return {
//                 ...state,
//                 "email": action.payload,
//             };
//         case getType.PHONE:
//             return {
//                 ...state,
//                 "phone": action.payload,
//             };
//         default:
//             return state;
//     }
// }