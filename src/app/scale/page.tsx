import scaleImg from "public/scale.jpg"
import Hero from "@/components/Hero"

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="Steel Factory"
      title="Scale your app to infinity"
    />
  )
}
