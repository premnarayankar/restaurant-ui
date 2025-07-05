import Featured from '@/components/Featured'
import Offer from '@/components/Offer'
import Slider from '@/components/Slider'

export default function Home() {
  console.log("App is running on: https://restaurant-ui-rho.vercel.app/");
  
  return (
    <main>
      <Slider/>
      <Featured/>
      <Offer/>
    </main>
  )
}
