// Initialization of HelloSign client during SSR throws "window not defined" exception
// even on 'use client' components.
// Must completely "turn off" SSR in order to prevent exception.

import dynamic from "next/dynamic";

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