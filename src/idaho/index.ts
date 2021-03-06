import { searchForBusinesses, getBusinessDetails } from "./../businesssearch-helpers/helpers";

(async () => {
	const domain = 'sosbiz.idaho.gov';
	const dateSearch = true;
	const businesses = await searchForBusinesses(domain, 'Idaho', dateSearch);
	await getBusinessDetails(businesses, domain);

	console.log('businesses', businesses);

})();