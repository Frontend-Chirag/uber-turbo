import React from 'react'
import { PlanTripPage } from "./components/plan-trip";


interface PlanTripProps {
  params: Promise<{
    type: string
  }>
}


export default async function PlanTrip({ params }: PlanTripProps) {

  const { type } = await params;

  return <PlanTripPage type={type} />
}
