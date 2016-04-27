import Ember from 'ember';

export default Ember.Service.extend({
	getTeamMembers() {
		return [
		  {
				id: '1',
				name: 'Bob Delach',
				title: 'Fund Manager ',
				bio: '<p>Mr. Delach has over 30 years of experience as a financial and operations executive providing strong business leadership in small and large organizations across many market segments. He is a proven leader with strong interpersonal, analytical and conceptual thinking skills. Prior to joining AGSM, Bob was Chief Financial Officer at Think Through Learning, Inc. (TTL), Bob developed a CFO support business and provided finance and operations leadership to technology startups including Mobile Fusion, Inc. (currently kWantera), Cepstral, LLC (Technology Text-to-Speech Company focused on making realistic synthetic voices), and GeoSpatial Systems, Inc., Rochester, NY (develops and markets geo-referenced imaging systems for aerial mapping and surveillance systems).</p><p>Bob was a co-founder and CFO at MRO Direct a national distributor and procurement provider service that grew from start-up to a value of $10 million within two years. Prior to MRO Direct Bob served as President and CEO of Falcon Plastic, a manufacturing company that was acquired out of bankruptcy and re-built under Bob’s leadership from restart in 1999 to $11 million in 2000.</p>',
				credentials: [
					'B.S. Accounting, St. Vincent College',
					'CPA (license not current)',
					'Venture Capital Executive Program at U.C. Berkeley ',
					'Member of AICPA, PICPA'
				],
				bod: [ ]
		  },
			{
				id: '2',
				name: 'Donald C. Belt',
				title: 'Investment Committee Member',
				bio: '<p>Mr. Belt is currently Chairman of AGSM Ventures, LLC and President / Sr. Managing Director of AGSM, LLC and iNetworks Private Wealth Ventures, LLC. He currently serves on the following boards: kWantera Inc., Prototype Productions Venture Holdings and INDIGO Biosciences. Mr. Belt brings over 40 years of experience from executive capacities at True Value, ServiStar and General Electric in addition to being a CEO/owner of MRODirect, McGhee & Co. and Chesapeake Holding Corporation.</p>',
				credentials: [
					'M.S. Business Economics, Washington & Jefferson',
					'M.B.A. Finance & Marketing, The Ohio State University',
					'Captain, US Army Reserves'
				],
				bod: [
					'kWantera',
					'kWantix',
					'T.Worx Ventures',
					'Ligonier YMCA'
				]
			}
		];
	}
});
