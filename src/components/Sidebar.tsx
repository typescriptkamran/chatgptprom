"use client"
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Categries from "@/data/Categories";
import { subscribe } from "diagnostics_channel";

const Sidebar = () => {
  return (
    <div className="h-screen flex border-solid border-r-2 border-r-black p-3">
      <Accordion type="single" collapsible className="w-full">
        {Categries.map(({ name, path: category, subCategories }, index) => {
          return (
            <AccordionItem value = {`item-${index}`}>
              <AccordionTrigger>{name}</AccordionTrigger>
              
                {subCategories.map(({name1, path: subCategory})=> {
                  return (<AccordionContent>
                    <Link href={`/${category}/${subCategory}`}>
                    {name1}
                    </Link>      
                    </AccordionContent>)
                })}
                
              
                
                
            </AccordionItem>
          );
        })}
        
      </Accordion>
    </div>
  );
};

export default Sidebar;
