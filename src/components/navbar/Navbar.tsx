import Link from 'next/link';

// Simple navigation bar component
export default function Navbar() {
	return (
		<div className="flex bg-neutral-300 p-5 items-center justify-between h-20">
			<div className="text-black">
				<h1 className="text-2xl font-bold">Dropbox Sign Next.js Example</h1>
			</div>
			<div className="flex items-center space-x-5 text-md">
				<Link href={'/'} className="hover:underline">Home</Link>
				<Link href={'/account'} className="hover:underline">Account Details</Link>
				<Link href={'/create_signature'} className="hover:underline">Embedded Signature Request</Link>
			</div>
		</div>
	);
};