import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Page() {
    const router = useRouter();

    return (
        <div>
            <h1>Pages Route: Product Page</h1>
            <p>tid: {router.query.tid}</p>
            <p>Go to <Link href="/">Home</Link></p>
        </div>
    );
}
