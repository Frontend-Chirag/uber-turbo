"use client"

import { Navbar } from "@/components/nav-bar";
import { Input } from "@repo/design-system/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/design-system/components/ui/tabs";
import { StarRating } from "@repo/design-system/components/ui/star-rating";
import { useState } from "react";
import { PhoneInput } from "@repo/design-system/components/ui/phone-input";
import { DatePicker } from "@repo/design-system/components/ui/date-picker";
import { TimePicker } from "@repo/design-system/components/ui/time-picker";
import { COUNTRIES } from "@repo/design-system/lib/constants";
import {HeadingLevel, Heading} from "@repo/design-system/components/ui/heading-level";


export default function Home() {

  return (
    <div className="min-h-screen w-full h-screen overflow-y-auto w- max-w-screen   bg-white  ">
      <Navbar />

      <div className="w-[540px] h-screen flex">
      {/* <HeadingLevel>
        <Heading>Base Web [L1]</Heading>
        <HeadingLevel>
          <Heading>Introduction [L2]</Heading>
          <HeadingLevel>
            <Heading>Quotes [L3]</Heading>
            <HeadingLevel>
              <Heading>Subtitle [L4]</Heading>
              <HeadingLevel>
                <Heading>Subtitle [L5]</Heading>
                <HeadingLevel>
                  <Heading>Subtitle [L6]</Heading>
                </HeadingLevel>
              </HeadingLevel>
            </HeadingLevel>
          </HeadingLevel>
          <Heading>Motivation [L2]</Heading>
        </HeadingLevel>
      </HeadingLevel> */}

<div className="mt-8 pt-8 border-t border-gray-200">
        <HeadingLevel>
          <Heading>Documentation</Heading>
          <p className="mb-6 text-gray-700">
            This demonstrates how the HeadingLevel context automatically manages heading hierarchy.
          </p>
          
          <HeadingLevel>
            <Heading>Getting Started</Heading>
            <p className="mb-4 text-gray-600">
              Each HeadingLevel increments the heading level for all nested Heading components.
            </p>
            
            {/* Custom styleLevel override example - visual styling only */}
            <Heading level={1}>Visual H1 Style (but semantic H3)</Heading>
            <p className="mb-4 text-gray-600">
              This heading uses level=1 prop for visual styling but maintains H3 semantics for accessibility.
            </p>
            
            <HeadingLevel>
              <Heading>Installation</Heading>
              <p className="mb-4 text-gray-600">Basic installation steps would go here.</p>
              
              <HeadingLevel>
                <Heading>Prerequisites</Heading>
                <p className="mb-4 text-gray-600">Required dependencies and setup.</p>
                
                {/* Another custom styleLevel example */}
                <Heading level={6}>Visual H6 Style (but semantic H5)</Heading>
                <p className="mb-4 text-gray-600">
                  This heading uses H6 visual styling but maintains proper H5 semantics.
                </p>
              </HeadingLevel>
              
              <HeadingLevel>
                <Heading>Configuration</Heading>
                <p className="mb-4 text-gray-600">How to configure the component.</p>
              </HeadingLevel>
            </HeadingLevel>
            
            <HeadingLevel>
              <Heading>Usage Examples</Heading>
              <p className="mb-4 text-gray-600">Code examples and best practices.</p>
              
              <Heading level={2}>Visual H2 Style (but semantic H4)</Heading>
              <p className="mb-4 text-gray-600">
                This demonstrates using level=2 for visual styling while maintaining semantic H4.
              </p>
            </HeadingLevel>
          </HeadingLevel>
          
          <HeadingLevel>
            <Heading>API Reference</Heading>
            <p className="mb-4 text-gray-600">
              Complete API documentation for the components.
            </p>
          </HeadingLevel>
        </HeadingLevel>
      </div>
  
      </div>
    </div>
  );
}
