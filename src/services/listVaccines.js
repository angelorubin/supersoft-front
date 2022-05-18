import { emptySplitApi } from "config/emptySplitApi";

export const listVaccinesApi = emptySplitApi.injectEndpoints({
	endpoints: (builder) => ({
		getVaccines: builder.query({
			query: () => `vaccine`,
		}),
	}),
});

export const { useGetVaccinesQuery } = listVaccinesApi;
