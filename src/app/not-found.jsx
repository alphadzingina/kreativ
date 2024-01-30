import Link from "next/link"

Link

const NotFound = () => {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Sorry, the page you ae looking for does not exist.</p>
            <Link href="/">Return to Home</Link>
        </div>
    )
}

export default NotFound;