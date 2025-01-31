import { client } from "@/sanity/lib/client";
import React from 'react'
import HomePage from './HomePage/page'

export default async function Home() {
  const Foods = await client.fetch(`*[_type == 'food']`)
  const Chefs = await client.fetch(`*[_type == 'chef']`)
  console.log(Foods, Chefs)
  return (
    
   


    <div>
      
    <HomePage />
    </div>
  )
}


