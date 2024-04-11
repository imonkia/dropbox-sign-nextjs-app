'use client'

import { getAccount } from '@/lib/account';
import { useState } from 'react';

interface AccountInfo {
	accountId: string,
	emailAddress: string
};

const AccountDetails = () => {
	const [ clearButton, setClearButton ] = useState<boolean>(false);
	const [ accountInfo, setAccountInfo ] = useState<AccountInfo | null>(null);
			
	// Sending the request to the Dropbox Sign API using the Node SDK
	const handleClick = async () => {
		const acctData: AccountInfo = await getAccount().then(res => res);
		setAccountInfo(acctData);
		setClearButton(true);
	};

	// Updating state variables
	const clearData = async () => {
		setAccountInfo(null);
		setClearButton(false);
	};
	return (
		<div className="h-dvh p-10">
			<h1 className="text-xl mb-3">Account Details</h1>
			{accountInfo
			&&
				<ul>
					<li>Account ID: {accountInfo.accountId}</li>
					<li>Account Email: {accountInfo.emailAddress}</li>
				</ul>
			}
			<div className="mt-10">
				<button className="bg-neutral-700 text-sm text-white p-2 rounded-lg mr-5" onClick={handleClick}>Get Account Details</button>
				{clearButton ? 
					<button className="bg-neutral-700 text-sm text-white p-2 rounded-lg" onClick={clearData}>Clear data</button>
					:
					<button className="bg-neutral-700 text-sm text-neutral-100 opacity-25 p-2 rounded-lg" disabled onClick={clearData}>Clear data</button>
				}
			</div>	
		</div>
	)
};

export default AccountDetails;