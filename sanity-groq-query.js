/*SANITY-GROQ QUERIES

 This file is not related to project
 its only for my reference

 how to query data from sanity

 1. 
    * ==> to get all data
 2. 
    *[_type=="post"] ==> to get all data of type post schema
 3. 
    *[_type=="post"]{title,content,image,"slug":slug.current} inside curly brackets we write fields name that we want fetch only
 4. 
    *[_type=="post"]{title,content,image,"slug":slug.current}[20...50] if we want items from index 50 to 100
 5. 
    *[_type=="post"]{title,content,image,"slug":slug.current}[0]  to get item at index 0
 6. 
    *[_type=="post"]  |  order(_createdAt desc) to sort in descending
    note pipe operator (|) is necessary
 7.   
   *[_type=="post"]  |  order(_createdAt asc)  ==>to sort in ascending
*/

//{//to add radio or dropdown type field from which only available options can be chosen
//     name:'gender',
//     type:'string',
//     title:'Gender',
//     options:{
//         list:[
//             {title:'Male',value:'male'},
//             {title:'Female',value:'female'}
//         ],
//         layout:'radio',//by default its dropdown i.e select
//         direction:'horizontal' // by default it is vertical
//     }
// }

/**
 * Fetching data
 * make your component async in which you want to fetch data
 * then make a query
 * for e.g ==>       const query = *[_type=="post"]{title,content,image,"slug":slug.current}
 * then    ==>         const posts = await client fetch(query)
 * import client from sanity/lib/client folder from your project
 * for image url ==>image urlForImage from sanity/lib/image folder
 * and use like urlForImage(pass image received from post)
 */

/**
 * how to fetch details of reference object/data type
 * like we have made a post schema and added reference of author schema then  how to fetch user details
 * we have two ways
 * 1. we can fetch separately in another query
 * 2. but in sanity/groq we can fetch inside same query below is procedure
 *
 */
