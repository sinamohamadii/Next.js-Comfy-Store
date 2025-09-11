import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeroCarousel from './HeroCarousel';

function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
          Please read the text below
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
          This Next.js store application is built and maintained by Monte Sina.
          For a smooth login and registration process and not getting 403 errors, please ensure your VPN is active and running.
        </p>
        <Button asChild size='lg' className='mt-10'>
          <Link href='/products'>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;