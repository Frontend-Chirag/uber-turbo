import { SetPinPage } from "./components/pin";

interface SetPinProps {
  params: Promise<{
    type: string
  }>
}

export default async function SetPin({ params }: SetPinProps) {
  const { type } = await params;

  return <SetPinPage type={type} />
}
