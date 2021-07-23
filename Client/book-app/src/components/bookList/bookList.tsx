import { error } from "console";
import React, { Fragment } from "react";
import Book from "../book/book";




async function getListData(url:string){
    console.log("1");
    await fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => console.log(data));
    /*
    await fetch(url)
        .then(response =>{
            if(response.ok){
                console.log("2");
                console.log();
                return response;
            } else {
                return Promise.reject({statusText: response.statusText});
            }
        })
        .catch(error =>{
            console.log("ERROR", error);
        });
    console.log("konec");*/
}



export default getListData;


    

