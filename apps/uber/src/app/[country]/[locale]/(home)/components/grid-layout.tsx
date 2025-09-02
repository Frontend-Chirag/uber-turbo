"use client";
import { FlexGrid, FlexGridItem, ResponsiveFlexGridItem } from '@repo/design-system/components/ui/flex-grid';
import React from 'react'


export const GridLayout = () => {
    // Example props like BaseWeb
  const itemProps = { flexGridColumnSpan: 1 };
  const narrowItemProps = { flexGridColumnSpan: 1 };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">BaseWeb Style FlexGrid Demo</h1>
      
      {/* 3-column grid example */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">3-Column Grid (like BaseWeb)</h2>
        <FlexGrid
          flexGridColumnCount={3}
          flexGridColumnGap="scale800"
          flexGridRowGap="scale800"
        >
          <FlexGridItem {...itemProps}>
            <div className="bg-blue-200 p-4 rounded border text-center">
              Item (1/3)
            </div>
          </FlexGridItem>
          <FlexGridItem {...narrowItemProps}>
            <div className="bg-green-200 p-4 rounded border text-center">
              Narrow (1/3)
            </div>
          </FlexGridItem>
          <FlexGridItem {...itemProps}>
            <div className="bg-blue-200 p-4 rounded border text-center">
              Item (1/3)
            </div>
          </FlexGridItem>
          <FlexGridItem {...itemProps}>
            <div className="bg-blue-200 p-4 rounded border text-center">
              Item (1/3)
            </div>
          </FlexGridItem>
          <FlexGridItem {...narrowItemProps}>
            <div className="bg-green-200 p-4 rounded border text-center">
              Narrow (1/3)
            </div>
          </FlexGridItem>
          <FlexGridItem {...itemProps}>
            <div className="bg-blue-200 p-4 rounded border text-center">
              Item (1/3)
            </div>
          </FlexGridItem>
        </FlexGrid>
      </section>

      {/* 4-column grid example */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">4-Column Grid</h2>
        <FlexGrid
          flexGridColumnCount={4}
          flexGridColumnGap="scale600"
          flexGridRowGap="scale600"
        >
          {[...Array(8)].map((_, i) => (
            <FlexGridItem key={i} flexGridColumnSpan={1}>
              <div className="bg-purple-200 p-4 rounded border text-center">
                {i + 1}/4
              </div>
            </FlexGridItem>
          ))}
        </FlexGrid>
      </section>

      {/* Mixed spans in 6-column grid */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">6-Column Grid with Mixed Spans</h2>
        <FlexGrid
          flexGridColumnCount={6}
          flexGridColumnGap="scale700"
          flexGridRowGap="scale700"
        >
          <FlexGridItem flexGridColumnSpan={2}>
            <div className="bg-red-200 p-4 rounded border text-center">
              Wide (2/6)
            </div>
          </FlexGridItem>
          <FlexGridItem flexGridColumnSpan={1}>
            <div className="bg-yellow-200 p-4 rounded border text-center">
              1/6
            </div>
          </FlexGridItem>
          <FlexGridItem flexGridColumnSpan={3}>
            <div className="bg-indigo-200 p-4 rounded border text-center">
              Extra Wide (3/6)
            </div>
          </FlexGridItem>
          <FlexGridItem flexGridColumnSpan={1}>
            <div className="bg-pink-200 p-4 rounded border text-center">
              1/6
            </div>
          </FlexGridItem>
          <FlexGridItem flexGridColumnSpan={1}>
            <div className="bg-pink-200 p-4 rounded border text-center">
              1/6
            </div>
          </FlexGridItem>
          <FlexGridItem flexGridColumnSpan={4}>
            <div className="bg-teal-200 p-4 rounded border text-center">
              Very Wide (4/6)
            </div>
          </FlexGridItem>
        </FlexGrid>
      </section>

      {/* Responsive example with custom column count */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Responsive with 8-Column Base</h2>
        <FlexGrid
          flexGridColumnCount={8}
          flexGridColumnGap="scale800"
          flexGridRowGap="scale800"
        >
          <ResponsiveFlexGridItem span={{ small: 8, medium: 4, large: 2 }}>
            <div className="bg-orange-200 p-4 rounded border text-center">
              Responsive A
            </div>
          </ResponsiveFlexGridItem>
          <ResponsiveFlexGridItem span={{ small: 8, medium: 4, large: 2 }}>
            <div className="bg-cyan-200 p-4 rounded border text-center">
              Responsive B
            </div>
          </ResponsiveFlexGridItem>
          <ResponsiveFlexGridItem span={{ small: 8, medium: 4, large: 2 }}>
            <div className="bg-lime-200 p-4 rounded border text-center">
              Responsive C
            </div>
          </ResponsiveFlexGridItem>
          <ResponsiveFlexGridItem span={{ small: 8, medium: 4, large: 2 }}>
            <div className="bg-rose-200 p-4 rounded border text-center">
              Responsive D
            </div>
          </ResponsiveFlexGridItem>
        </FlexGrid>
      </section>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-2">How it works:</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Set <code className="bg-gray-100 px-1 rounded">flexGridColumnCount</code> to define your grid system (3, 4, 6, etc.)</li>
          <li>• Each <code className="bg-gray-100 px-1 rounded">FlexGridItem</code> gets the column count via React Context</li>
          <li>• <code className="bg-gray-100 px-1 rounded">flexGridColumnSpan</code> is relative to your custom column count</li>
          <li>• Responsive items work the same way but adapt to different breakpoints</li>
        </ul>
      </div>
    </div>
  );
}
