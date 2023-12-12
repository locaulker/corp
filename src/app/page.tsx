import homeImage from "public/home.jpg"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <Hero
      imgData={homeImage}
      imgAlt="Cart Factory"
      title="Professional Cloud Hosting"
    />
  )
}
