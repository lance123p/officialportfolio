"use client";
import React from "react";
import { Card, Input, Textarea } from "@nextui-org/react";
import {Button} from "@nextui-org/react";

export default function Contact() {
  const placements = ["outside"];

  return (
   
    <div className="min-h-screen p-6 pt-[10rem]"  id='contact'>
    <Card className="flex flex-col gap-6 max-w-md mx-auto p-4 border rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-center py-4">Get in touch</h3>

      {/* Full Name Input */}
      <div className="flex flex-col gap-4">
        {placements.map((placement) => (
            <Input
              key={placement}
              type="email"
              label="Full Name"
              labelPlacement={placement}
              isRequired
            />
          ))}

        {/* Email Input */}
        <div>
          {placements.map((placement) => (
            <Input
              key={placement}
              type="email"
              label="Email Address"
              labelPlacement={placement}
              isRequired
            />
          ))}
        </div>

        {/* Message Textarea */}
        <div>
          <Textarea
            label="Write a Message"
            labelPlacement="outside"
            placeholder="Enter your message"
            className="w-full"
            isRequired
          />
        </div>
        <div> 
          <Button 
              className="w-full text-lg text-white bg-gradient-to-r from-pink-600 to-pink-300"
              radius="sm"
              size="md"
            >
              Submit
          </Button>
            
        </div>
      </div>
      </Card>
    </div>
    
  );
}
