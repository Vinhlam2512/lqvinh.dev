import Link from 'next/link';
import { Button } from '../components/ui/button';

export default function Home() {
  return (
    <div className="bg-amber-200">
      <Button asChild>
        <Link href="/my-cv">My CV</Link>
      </Button>
    </div>
  );
}
