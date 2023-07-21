import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1>Pages Route: Home Page</h1>
            <p>
                Go to{" "}
                <Link
                    href={{
                        pathname: "/product/[tid]",
                        query: { tid: "testTid" },
                    }}
                >
                    /product/testTid
                </Link>
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
