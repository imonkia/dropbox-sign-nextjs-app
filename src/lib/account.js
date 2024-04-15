'use server'

import * as DropboxSign from '@dropbox/sign'

const accountApi = new DropboxSign.AccountApi()
accountApi.username = process.env.API_KEY

export const getAccount = async () => {
	try {
		const result = await accountApi.accountGet(undefined, 'reta@dropbox.com');
		return {
			accountId: result.body.account.accountId,
			emailAddress: result.body.account.emailAddress
		};
	}
	catch (err) {
		return {
			errorMsg: err.body.error.errorMsg
		};
	};
};