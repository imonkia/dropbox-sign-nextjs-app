import dynamic from "next/dynamic";

// Initialization of HelloSign client during SSR (npm run dev, npm run compile) throws "window not defined" exception
// even on 'use client' components.
// Must completely "turn off" SSR in order to prevent exception.

const EmmbeddedRequest = dynamic(() => import('./embedded_request'), {
	ssr: false,
	loading: () => <h1 className="p-10 text-2xl">Loading...</h1>
});

const Page = () => {
	return (
		<EmmbeddedRequest />
	)
};

export default Page;