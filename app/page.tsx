import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1>App Route: Home Page</h1>
            <p>
                Go to <Link href="/product/testTid">/product/testTid</Link>
            </p>
            <p>
                Go to{" "}
                <Link
                    href={{
                        pathname: "/search",
                        query: { q: "test" },
                    }}
                >
                    /search?q=test
                </Link>
            </p>
        </div>
    );
}
