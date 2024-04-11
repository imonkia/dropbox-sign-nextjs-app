'use server'

import * as DropboxSign from '@dropbox/sign';

const signatureRequestApi = new DropboxSign.SignatureRequestApi();
const embeddedApi = new DropboxSign.EmbeddedApi();
signatureRequestApi.username = process.env.API_KEY;
embeddedApi.username = process.env.API_KEY;

// export const signatureRequestsList = async () => {
// 	try {
// 		const result = await signatureRequestApi.signatureRequestList();
// 		return result;
// 	}
// 	catch (err) {
// 		return err;
// 	}
// };

export const createEmbeddedSignatureRequest = async (signerName, signerEmail) => {
	const signer1 = {
		emailAddress: signerEmail,
		name: signerName
	};

	const data = {
		clientId: process.env.CLIENT_ID,
		title: 'Test from NextJS',
		signers: [signer1],
		fileUrls: ['https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1'],
		testMode: true
	};

	try {
		const result = await signatureRequestApi.signatureRequestCreateEmbedded(data);
		const signatureId = result.body.signatureRequest.signatures[0].signatureId;
		
		const embeddedResult = await embeddedApi.embeddedSignUrl(signatureId);
		const signUrl = embeddedResult.body.embedded.signUrl;
		return {signUrl: signUrl};
		
	}
	catch(err) {
		return {errorMsg: err.body.error.errorMsg};
	};
}